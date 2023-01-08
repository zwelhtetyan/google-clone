import parse from 'html-react-parser';

export default function ResultItem({ link, formattedUrl, title, htmlSnippet }) {
  return (
    <div className='max-w-xl mb-6 overflow-hidden'>
      <div className='group'>
        <a className='text-xs xs:text-sm line-clamp-1' href={link}>
          {formattedUrl}
        </a>

        <a className='group-hover:underline decoration-blue-800' href={link}>
          <h2 className='line-clamp-1 text-[19px] xs:text-xl font-medium text-blue-800'>
            {title}
          </h2>
        </a>
      </div>

      <p className='text-gray-600 line-clamp-3 text-[15px] xs:text-base'>
        {parse(htmlSnippet)}
      </p>
    </div>
  );
}
