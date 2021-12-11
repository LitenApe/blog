import { Fragment } from 'react';
import { Paragraph } from './Paragraph';

export function HTMLContent(props: { content: string }): JSX.Element | null {
  const { content } = props;

  const processed = content
    .match(/(<.>.+<\/.>)?/g)
    ?.filter((match) => match.length > 0)
    .map((match) =>
      match.startsWith('<p') ? (
        <Paragraph>{match.match(/<p.?>(.+)<\/p>/)?.pop()}</Paragraph>
      ) : (
        <p>match</p>
      )
    );

  if (typeof processed === 'undefined') {
    return null;
  }

  return (
    <Fragment>
      {processed.map((content, index) => (
        <Fragment key={`content-${index}`}>{content}</Fragment>
      ))}
    </Fragment>
  );
}
