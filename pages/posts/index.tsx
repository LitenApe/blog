import { Heading, Text } from '@chakra-ui/layout';
import { Page } from '../../components/layout/Page';

export default function Overview() {
  return (
    <Page title="Latest writings">
      <Heading size="2xl" my={2}>
        Find the latest of my writings here.
      </Heading>
      <Text fontSize="md" cy={2}>
        so much content...
      </Text>
    </Page>
  );
}
