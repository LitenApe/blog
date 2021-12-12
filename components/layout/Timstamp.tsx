import { Text } from '@chakra-ui/layout';
import { useState } from 'react';

interface Props {
  readonly leadingText: string;
  readonly time: number;
}

export function Timestamp(props: Props): JSX.Element {
  const [time] = useState(new Date(props.time));

  const date = time.toDateString();
  return <Text>{`${props.leadingText}: ${date}`}</Text>;
}
