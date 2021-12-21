import { File, Frontmatter, Page, PageContent } from '../types/page';
import { readFileSync, readdirSync } from 'fs';

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

function getFile(file_path: string): File {
  const file_content = readFileSync(file_path, { encoding: 'utf-8' });
  const { data, content } = matter(file_content);

  if (
    !data.hasOwnProperty('title') ||
    !data.hasOwnProperty('date') ||
    !data.hasOwnProperty('author')
  ) {
    throw new Error(`Encountered incomplete frontmatter in ${file_path}.`);
  }

  const tags = processTagsAndCategories(data.tags);
  const categories = processTagsAndCategories(data.categories);

  return {
    raw: file_content,
    frontmatter: {
      ...data,
      date: `${data.date.getUTCFullYear()}-${
        data.date.getUTCMonth() + 1
      }-${data.date.getUTCDate()}`,
      tags,
      categories,
      draft: typeof data.draft !== 'undefined' ? data.draft : false,
    } as Required<Frontmatter>,
    content,
    created_at: data.date.getTime(),
  };
}

export function getAllThoughts(): Array<Page> {
  const path = join(current_path, content_path);
  const files = readdirSync(path);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const file_path = join(path, file);
      const { frontmatter, content, created_at } = getFile(file_path);

      return {
        frontmatter,
        created_at,
        raw: content,
        excerpt: frontmatter.excerpt ?? '',
        slug: file.replace(/\.md/, ''),
      };
    })
    .filter(({ frontmatter }) =>
      process.env.NODE_ENV === 'development' ? true : !frontmatter.draft
    )
    .sort((a, b) => b.created_at - a.created_at);
}

export function getThought(slug: string): PageContent {
  const file_path = join(current_path, content_path, `${slug}.md`);
  const { frontmatter, content, created_at } = getFile(file_path);

  return {
    frontmatter,
    created_at,
    raw: content,
  };
}
