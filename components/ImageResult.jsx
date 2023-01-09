import PaginationButtons from './PaginationButtons';

export default function ImageResult({ searchedResult }) {
  const { items: searchedItems, queries } = searchedResult;

  return (
    <div className='p-4'>
      <div className='grid grid-cols-auto-fill-150 gap-4'>
        {searchedItems?.map((item) => (
          <div key={item.link} className='overflow-hidden'>
            <div className='group'>
              <a href={item.image.contextLink}>
                <img
                  className='w-full h-52 object-cover rounded-lg'
                  src={item.link}
                  alt={item.title}
                />
              </a>

              <a
                className='group-hover:underline mt-1 block'
                href={item.image.contextLink}
              >
                <h2 className='truncate text-sm'>{item.title}</h2>
              </a>

              <a
                className='group-hover:underline'
                href={item.image.contextLink}
              >
                <p className='text-gray-600 text-xs'>{item.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      {searchedItems?.length > 0 && (
        <PaginationButtons
          previousPage={queries?.previousPage}
          nextPage={queries?.nextPage}
        />
      )}
    </div>
  );
}
