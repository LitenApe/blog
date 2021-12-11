import { getAllThoughts, getThought } from '../../utils/getPages';

import { GetStaticPropsContext } from 'next';
import { Page } from '../../components/layout/Page';
import { PageContent } from '../../types/page';
import { processRawContent } from '../../utils/processRawContent';

export default function Thought(props: PageContent) {
  const content = processRawContent(props.raw);

  return (
    <Page title={props.frontmatter.title}>
      <p>Author: {props.frontmatter.author}</p>
      <p>Last modified: {props.last_modified}</p>
      <p>Published: {props.created_at}</p>
      {content}
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
    props: post,
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
