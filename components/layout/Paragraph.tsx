import { PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

export function Paragraph(props: PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <Text fontSize="2xl" my={8}>
      {children}
    </Text>
  );
}
