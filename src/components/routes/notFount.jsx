import React from 'react';
import LinkComp from '../shared/Link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <img
        src="/assets/404.png"
        alt="404 Not Found"
        className="mb-12 md:w-[40rem] mx-auto"
      />
      <h1 className="md:text-6xl text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-8 text-center">
        Oops! It seems like the page you're looking for doesn't exist.
      </p>
      <LinkComp
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </LinkComp>
    </div>
  );
};

export default NotFound;