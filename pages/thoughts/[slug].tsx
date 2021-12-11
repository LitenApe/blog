import { getAllThoughts, getThought } from '../../utils/getPages';

import { GetStaticPropsContext } from 'next';
import { HTMLContent } from '../../components/layout/HTMLContent';
import { Page } from '../../components/layout/Page';
import { ProcessedPageContent } from '../../types/page';
import { processRawContent } from '../../utils/processRawContent';

export default function Thought(props: ProcessedPageContent) {
  return (
    <Page title={props.frontmatter.title}>
      <p>Author: {props.frontmatter.author}</p>
      <p>Last modified: {props.last_modified}</p>
      <p>Published: {props.created_at}</p>
      <HTMLContent content={props.html} />
    </Page>
  );
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  if (typeof ctx.params === 'undefined') {
    throw Error('Encountered missing params while building thought post');
  }

  const post = getThought(ctx.params.slug);

  return {
    props: {
      ...post,
      html: await processRawContent(post.raw),
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllThoughts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
