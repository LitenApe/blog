import { getAllThoughts, getThought } from '../../utils/getPages';

import { GetStaticPropsContext } from 'next';
import { Page } from '../../components/layout/Page';
import { PageContent } from '../../types/page';
import { Text } from '@chakra-ui/layout';
import { Timestamp } from '../../components/layout/Timstamp';
import { When } from '../../components/utility/When';
import { processRawContent } from '../../utils/processRawContent';

export default function Thought(props: PageContent) {
  const content = processRawContent(props.raw);

  const hasBeenModified = props.created_at !== props.last_modified;

  return (
    <Page title={props.frontmatter.title}>
      <Text>Author: {props.frontmatter.author}</Text>
      <When condition={hasBeenModified}>
        <Timestamp leadingText="Last modified" time={props.last_modified} />
      </When>
      <Timestamp leadingText="Published" time={props.created_at} />
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
