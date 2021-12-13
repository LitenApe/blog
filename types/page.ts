export interface Frontmatter {
  author: string;
  title: string;
  date: string;
  tags?: Array<string>;
  categories?: Array<string>;
  excerpt?: string;
}

export interface Page {
  raw: string;
  frontmatter: Frontmatter;
  slug: string;
  created_at: number;
}

export interface PageContent {
  raw: string;
  frontmatter: Frontmatter;
  created_at: number;
}

export interface File {
  raw: string;
  frontmatter: Frontmatter;
  content: string;
  created_at: number;
}
