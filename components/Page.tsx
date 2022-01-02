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

function load() {
  const observer = new MutationObserver(async () => {
    const isDarkMode = document.body.className.includes('chakra-ui-dark');

    if (isDarkMode) {
      // @ts-ignore
      await import('../node_modules/highlight.js/styles/github-dark.css');
    } else {
      // @ts-ignore
      await import('../node_modules/highlight.js/styles/github.css');
    }
  });

  observer.observe(document.body, { attributes: true });
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
    load();
    highlightjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{title} | LitenApe</title>
        <meta name="description" content="Son Thanh Vo's blog" />
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
