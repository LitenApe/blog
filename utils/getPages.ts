import { Frontmatter, Page, PageContent } from '../types/page';
import { readFileSync, readdirSync, statSync } from 'fs';

import { join } from 'path';
import matter from 'gray-matter';

const current_path = process.cwd();
const content_path = 'content/thoughts';

function processTagsAndCategories(value?: string): Array<string> {
  if (typeof value === 'undefined') {
    return [];
  }

  return value.split(',').map((part) => part.trim().toLowerCase());
}

interface File {
  raw: string;
  frontmatter: Frontmatter;
  content: string;
  created_at: number;
  last_modified: number;
}

function getFile(file_path: string): File {
  const file_content = readFileSync(file_path, { encoding: 'utf-8' });
  const metadata = statSync(file_path);
  const { data, content } = matter(file_content);

  const tags = processTagsAndCategories(data.tags);
  const categories = processTagsAndCategories(data.categories);

  return {
    raw: file_content,
    frontmatter: {
      ...data,
      tags,
      categories,
    } as Frontmatter,
    content,
    created_at: metadata.ctimeMs,
    last_modified: metadata.mtimeMs,
  };
}

export function getAllThoughts(): Array<Page> {
  const path = join(current_path, content_path);
  const files = readdirSync(path);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const file_path = join(path, file);
      const { frontmatter, content, created_at, last_modified } =
        getFile(file_path);

      return {
        frontmatter,
        created_at,
        last_modified,
        raw: content,
        excerpt: frontmatter.excerpt ?? '',
        slug: file.replace(/\.md/, ''),
      };
    })
    .sort((a, b) => b.created_at - a.created_at);
}

export function getThought(slug: string): PageContent {
  const file_path = join(current_path, content_path, `${slug}.md`);
  const { frontmatter, content, created_at, last_modified } =
    getFile(file_path);

  return {
    frontmatter,
    created_at,
    last_modified,
    raw: content,
  };
}
