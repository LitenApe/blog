import { Container, Heading, HeadingProps } from '@chakra-ui/layout';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

interface IPage {
  readonly title: string;
  readonly heading?: string;
  readonly headingProps?: HeadingProps;
}

export function Page(props: PropsWithChildren<IPage>) {
  const { children, title, heading, headingProps = {} } = props;

  return (
    <>
      <Head>
        <title>{title} | LitenApe</title>
        <meta name="description" content="Son Thanh Vo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main">
        <Heading as="h1" size="2xl" my={6} {...headingProps}>
          {heading || title}
        </Heading>
        {children}
      </Container>
    </>
  );
}
