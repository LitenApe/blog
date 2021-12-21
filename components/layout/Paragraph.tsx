import { Text, TextProps } from '@chakra-ui/layout';

import { PropsWithChildren } from 'react';

export function Paragraph(props: PropsWithChildren<TextProps>) {
  const { children, ...rest } = props;
  return (
    <Text
      fontSize="lg"
      my={8}
      textAlign="justify"
      style={{ textIndent: '2rem' }}
      {...rest}
    >
      {children}
    </Text>
  );
}
