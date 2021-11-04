import { Text } from '@chakra-ui/layout';
import { Page } from '../../components/layout/Page';

export default function Overview() {
  return (
    <Page
      title="Latest writings"
      heading="Find the latest of my writings here."
    >
      <Text fontSize="md" cy={2}>
        so much content...
      </Text>
    </Page>
  );
}
