import { Heading } from '@chakra-ui/layout';
import { Page } from '../../components/layout/Page';

export default function Overview() {
  return (
    <Page title="Latest drafts">
      <Heading as="h1" size="4xl">
        Latest posts that I am currently working on.
      </Heading>
    </Page>
  );
}
