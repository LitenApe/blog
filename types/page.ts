export interface Frontmatter {
  [key: string]: any;
  author: string;
  title: string;
  tags: Array<string>;
  categories: Array<string>;
  excerpt?: string;
}

export interface Page {
  raw: string;
  frontmatter: Frontmatter;
  slug: string;
  created_at: number;
  last_modified: number;
}

export interface PageContent {
  raw: string;
  frontmatter: Frontmatter;
  created_at: number;
  last_modified: number;
}
