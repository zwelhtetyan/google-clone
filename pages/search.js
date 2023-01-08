import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResult from '../components/SearchResult';
import { DUMMY_DATA_RESULT } from '../DUMMY_DATA.JS';
import { useRouter } from 'next/router';

export default function Search({ searchedResult }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.q} - Search</title>
      </Head>

      <SearchHeader />

      <SearchResult searchedResult={searchedResult} />
    </>
  );
}

export async function getServerSideProps(context) {
  const searchQuery = context.query.q || '';
  const searchType = context.query.searchType || '';
  const startIndex = context.query.start || '';

  // const response = await fetch(
  //   `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
  //     process.env.CX_KEY
  //   }&q=${searchQuery}${searchType ? '&searchType=image' : ''}${
  //     startIndex ? `&start=${startIndex}` : ''
  //   }`
  // );

  // const searchedResult = await response.json();

  // return { props: { searchedResult } };

  return { props: { searchedResult: DUMMY_DATA_RESULT } };
}
