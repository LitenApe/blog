import { Frontmatter, Page, PageContent } from '../types/page';
import { readFileSync, readdirSync, statSync } from 'fs';

import { join } from 'path';
import matter from 'gray-matter';

const current_path = process.cwd();
const content_path = 'content/thoughts';

export function getAllThoughts(): Array<Page> {
  const path = join(current_path, content_path);
  const files = readdirSync(path);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const file_path = join(path, file);
      const file_content = readFileSync(file_path, { encoding: 'utf-8' });
      const metadata = statSync(file_path);
      const { data, content } = matter(file_content);

      return {
        raw: content,
        frontmatter: data as Frontmatter,
        excerpt: data.excerpt ?? '',
        slug: file.replace(/\.md/, ''),
        created_at: metadata.ctimeMs,
        last_modified: metadata.mtimeMs,
      };
    });
}

export function getThought(slug: string): PageContent {
  const file_path = join(current_path, content_path, `${slug}.md`);
  const file_content = readFileSync(file_path, { encoding: 'utf-8' });
  const metadata = statSync(file_path);
  const { data, content } = matter(file_content);

  return {
    raw: content,
    frontmatter: data as Frontmatter,
    created_at: metadata.ctimeMs,
    last_modified: metadata.mtimeMs,
  };
}
