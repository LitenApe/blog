export interface Frontmatter {
  author: string;
  title: string;
  date: string;
  tags?: Array<string>;
  categories?: Array<string>;
  excerpt?: string | undefined;
}

export interface Page {
  raw: string;
  frontmatter: Required<Frontmatter>;
  slug: string;
  created_at: number;
}

export interface PageContent {
  raw: string;
  frontmatter: Required<Frontmatter>;
  created_at: number;
}

export interface File {
  raw: string;
  frontmatter: Required<Frontmatter>;
  content: string;
  created_at: number;
}
