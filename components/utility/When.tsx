import { PropsWithChildren } from 'react';

interface Props {
  readonly condition: boolean;
}

export function When(props: PropsWithChildren<Props>): JSX.Element | null {
  if (props.condition) {
    return <>props.children</>;
  }

  return null;
}
