import { Heading, Text } from '@chakra-ui/layout';
import { Page } from '../../components/layout/Page';

export default function Overview() {
  return (
    <Page title="Latest drafts">
      <Heading as="h1" size="2xl" my={2}>
        Latest posts that I am currently working on.
      </Heading>

      <Text fontSize="md" my={2}>
        Not sure why you are looking into this space, but I might as well inform
        you of what this page is used for. This page(<Text as="i">drafts</Text>)
        is simply a list of topics, and if you are unlucky, might have some
        posts that I am still writing on. It is simply a place created to haunt
        me in my dreams untill i finish whatever post I have in the pipeline.
      </Text>
    </Page>
  );
}
