import React from 'react';

const Pagination = ({ pageHandler, page, dynamicPage }) => {
  const getPages = (current, total) => {
    const pages = [];
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 2, total - 1, total);
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }
    return pages;
  };

  const handlePrev = () => {
    if (page > 1) {
      pageHandler(page - 1);
    }
  };

  const handleNext = () => {
    if (page < dynamicPage) {
      pageHandler(page + 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={`px-4 py-2 rounded-xl cursor-pointer transition duration-300 ${
          page === 1
            ? 'bg-gradient-to-r from-gray-400 to-gray-300 text-gray-100 cursor-not-allowed'
            : 'bg-gradient-to-l from-blue-950 to-sky-700 text-amber-50 hover:from-blue-900 hover:to-sky-600'
        }`}
      >
        Prev
      </button>
      
      {getPages(page, dynamicPage).map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === 'number' && pageHandler(item)}
          className={`px-3 py-1 rounded-md cursor-pointer transition duration-200 ${
            item === page
              ? 'text-blue-800  font-bold shadow-md'
              : typeof item === 'number'
              ?'text-gray-500 cursor-default':
              'text-gray-500'
          }`}
        >
          {item}
        </span>
      ))}
      
      <button
        onClick={handleNext}
        disabled={page === dynamicPage}
        className={`px-4 py-2 rounded-xl cursor-pointer transition duration-300 ${
          page === dynamicPage
            ? 'bg-gradient-to-r from-gray-400 to-gray-300 text-gray-100 cursor-not-allowed'
            : 'bg-gradient-to-l from-blue-950 to-sky-700 text-amber-50 hover:from-blue-900 hover:to-sky-600'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;