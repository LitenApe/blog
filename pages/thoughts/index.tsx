import { Page } from '../../components/layout/Page';
import { Paragraph } from '../../components/layout/Paragraph';
import { Text } from '@chakra-ui/layout';

export default function Overview() {
  return (
    <Page
      title="Latest writings"
      heading="Find the latest of my writings here."
    >
      <Paragraph>so much content...</Paragraph>
    </Page>
  );
}
