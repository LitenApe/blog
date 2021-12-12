import { Text, TextProps } from '@chakra-ui/layout';

import { PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren<TextProps>) {
  const { children, ...rest } = props;
  return (
    <Text fontSize="lg" my={8} {...rest}>
      {children}
    </Text>
  );
}
