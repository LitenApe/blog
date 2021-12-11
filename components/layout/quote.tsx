import { Text, TextProps } from '@chakra-ui/layout';

import { PropsWithChildren } from 'react';

export function Quote(props: PropsWithChildren<TextProps>) {
  const { children, ...rest } = props;
  return (
    <Text
      as="blockquote"
      fontSize="4xl"
      my={16}
      paddingLeft={8}
      borderLeft="4px"
      borderLeftRadius={4}
      {...rest}
    >
      {children}
    </Text>
  );
}
