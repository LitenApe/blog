import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface IPage {
  readonly title: string;
}

export function Page(props: PropsWithChildren<IPage>) {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Son Thanh Vo's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
