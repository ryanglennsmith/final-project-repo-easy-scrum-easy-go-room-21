import Head from 'next/head';

export default function Header({ title }) {
  return (
    <Head>
      <link rel="icon" />
      <meta name="viewport" content="weShare, Find The Perfect {Tutor}" />
      <title>{title}</title>
    </Head>
  );
}
