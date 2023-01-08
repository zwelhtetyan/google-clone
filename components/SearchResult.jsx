import ResultItem from './ResultItem';

export default function SearchResult({ searchedResult }) {
  console.log(searchedResult);

  const {
    searchInformation: { formattedSearchTime, formattedTotalResults },
    items: searchedItems,
  } = searchedResult;

  return (
    <div className='p-4 md:ml-[145px]'>
      <p className='text-gray-600 text-sm mb-5'>
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>

      {searchedItems.map((item) => (
        <ResultItem key={item.link} {...item} />
      ))}
    </div>
  );
}
