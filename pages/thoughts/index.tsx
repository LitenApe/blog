import { Page } from '../../types/page';
import { Page as PageWrapper } from '../../components/layout/Page';
import { Paragraph } from '../../components/layout/Paragraph';
import { Post } from '../../components/layout/Post';
import { getAllThoughts } from '../../utils/getPages';
import { useRouter } from 'next/dist/client/router';

interface Props {
  readonly posts: Array<Page>;
}

export default function Overview(props: Props): JSX.Element {
  const router = useRouter();

  return (
    <PageWrapper title="Latest writings" heading="My thoughts on everything">
      <Paragraph>
        Below you will find a collection of my thoughts on everything. Use the
        filters to quickly find content which might interest you 🙂.
      </Paragraph>
      {props.posts.map((post) => (
        <Post
          key={`thought-${post.created_at}`}
          slug={post.slug}
          {...post.frontmatter}
        />
      ))}
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllThoughts(),
    },
  };
}
