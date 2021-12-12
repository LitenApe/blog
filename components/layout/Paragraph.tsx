import { PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

export function Paragraph(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <Text fontSize="lg" my={8}>
      {children}
    </Text>
  );
}
