import { ListItem, UnorderedList } from '@chakra-ui/layout';

import { Page } from '../../types/page';
import { Page as PageWrapper } from '../../components/Page';
import { Paragraph } from '../../components/layout/Paragraph';
import { Post } from '../../components/Post';
import { Quote } from '../../components/layout/Quote';
import { getAllThoughts } from '../../utils/getPages';

interface Props {
  readonly posts: Array<Page>;
}

export default function Overview(props: Props): JSX.Element {
  const { posts } = props;

  return (
    <PageWrapper title="Latest writings" heading="My thoughts on everything">
      <Quote author="Mary Jean LeTendre">
        Let us never confuse stability with stagnation
      </Quote>
      <Paragraph>
        As a developer and as a person in a quickly moving field, my biggest
        fear is stagnation. There is nothing more terrifying to me then the
        thought that I can`t improve, that I have peaked. That thought of never
        being able to accomplish anything more then what I have now, is scary.
      </Paragraph>

      <Paragraph>
        This site was created as a way to combat those thoughts, a place for
        reflections. A simple collection of my thoughts throughout time to
        improve the visibility of how I`ve evolved over time. A place to prove
        to myself that I am still learning and improving.
      </Paragraph>

      <UnorderedList styleType="none" ml={0}>
        {posts.map((post) => (
          <ListItem key={`thought-post-${post.created_at}`} mt={4}>
            <Post {...post} />
          </ListItem>
        ))}
      </UnorderedList>
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
