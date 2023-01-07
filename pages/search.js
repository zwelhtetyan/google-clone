import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResult from '../components/SearchResult';

export default function search() {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search result */}
      <SearchResult />
    </>
  );
}
