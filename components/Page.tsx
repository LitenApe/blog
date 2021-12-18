import 'highlight.js/styles/github.css';

import { Box, Container, Heading, HeadingProps } from '@chakra-ui/layout';
import { PropsWithChildren, useEffect } from 'react';

import Head from 'next/head';
import { VisuallyHidden } from '@chakra-ui/react';
import highlightjs from 'highlight.js/lib/common';

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

  useEffect(() => {
    highlightjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{title} | LitenApe</title>
        <meta name="description" content="Son Thanh Vo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.lg">
        <Box as="main" mx={4} maxW="container.sm">
          <Title
            heading={heading || title}
            hidden={hideHeading}
            {...headingProps}
          />
          {children}
        </Box>
      </Container>
    </>
  );
}
