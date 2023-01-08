import PaginationButtons from './PaginationButtons';
import ResultItem from './ResultItem';

export default function SearchResult({ searchedResult }) {
  const { searchInformation, items: searchedItems, queries } = searchedResult;

  return (
    <div className='p-4 md:ml-[145px] max-w-xl'>
      <p className='text-gray-600 text-sm mb-5'>
        About {searchInformation?.formattedTotalResults || ''} results (
        {searchInformation?.formattedSearchTime || ''} seconds)
      </p>

      {searchedItems?.map((item) => (
        <ResultItem key={item.link} {...item} />
      ))}

      <PaginationButtons
        previousPage={queries?.previousPage}
        nextPage={queries?.nextPage}
      />
    </div>
  );
}
