import { useRouter } from 'next/router';
import PaginationButtons from './PaginationButtons';
import ResultItem from './ResultItem';
import parse from 'html-react-parser';

export default function SearchResult({ searchedResult }) {
  const router = useRouter();
  const {
    searchInformation,
    items: searchedItems,
    queries,
    spelling,
  } = searchedResult;
  const totalResult = searchInformation?.formattedTotalResults || 0;
  const searchTime = searchInformation?.formattedSearchTime || 0;

  return (
    <div className='p-4 md:ml-[145px] max-w-xl'>
      <p className='text-gray-600 text-sm mb-5'>
        About {totalResult} {totalResult ? 'results' : 'result'} ( {searchTime}{' '}
        {searchTime ? 'seconds' : 'second'} )
      </p>

      {spelling && (
        <div className='mb-6'>
          <h2 className='font-medium text-lg'>
            Showing results for{' '}
            <span className='text-blue-800'>
              {parse(spelling.htmlCorrectedQuery)}
            </span>
          </h2>
          <p>
            Search instead for{' '}
            <span className='text-blue-800'>{router.query.q}</span>
          </p>
        </div>
      )}

      {searchedItems?.map((item) => (
        <ResultItem key={item.link} {...item} />
      ))}

      {searchedItems?.length > 0 && (
        <PaginationButtons
          previousPage={queries?.previousPage}
          nextPage={queries?.nextPage}
        />
      )}
    </div>
  );
}
