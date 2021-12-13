import { Text, TextProps } from '@chakra-ui/layout';

import { PropsWithChildren } from 'react';
import { When } from '../utility/When';

interface Props extends TextProps {
  readonly author?: string;
}

export function Quote(props: PropsWithChildren<Props>) {
  const { children, author, ...rest } = props;
  return (
    <Text
      as="blockquote"
      fontSize="xl"
      my={8}
      paddingLeft={8}
      borderLeft="4px"
      borderLeftRadius={4}
      {...rest}
    >
      {children}
      <When condition={typeof author !== undefined}>
        <Text as="span" display="block" textAlign="start" ml={4} fontSize="2xl">
          - {author}
        </Text>
      </When>
    </Text>
  );
}
