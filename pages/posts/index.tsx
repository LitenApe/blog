import { Text } from '@chakra-ui/layout';
import { Page } from '../../components/layout/page';

export default function Overview() {
  return (
    <Page
      title="Latest writings"
      heading="Find the latest of my writings here."
    >
      <Text fontSize="md" cy={4}>
        so much content...
      </Text>
    </Page>
  );
}
