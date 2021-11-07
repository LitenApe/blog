import { Container, Heading, HeadingProps } from '@chakra-ui/layout';
import { VisuallyHidden } from '@chakra-ui/react';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

interface ITitle extends HeadingProps {
  heading: string;
  hidden?: boolean;
}

interface IPage {
  readonly title: string;
  readonly heading?: string;
  readonly headingProps?: HeadingProps;
  readonly hideHeading?: boolean;
}

function Title(props: ITitle) {
  const { heading, hidden, ...rest } = props;

  if (hidden) {
    return (
      <VisuallyHidden>
        <Heading as="h1" size="2xl" my={6} {...rest}>
          {heading}
        </Heading>
      </VisuallyHidden>
    );
  }

  return (
    <Heading as="h1" size="2xl" my={6} {...rest}>
      {heading}
    </Heading>
  );
}

export function Page(props: PropsWithChildren<IPage>) {
  const {
    children,
    title,
    heading,
    headingProps = {},
    hideHeading = false,
  } = props;

  return (
    <>
      <Head>
        <title>{title} | LitenApe</title>
        <meta name="description" content="Son Thanh Vo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main">
        <Title
          heading={heading || title}
          hidden={hideHeading}
          {...headingProps}
        />
        {children}
      </Container>
    </>
  );
}
