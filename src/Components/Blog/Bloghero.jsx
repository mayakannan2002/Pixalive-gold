import React, { useState } from 'react';

const categories = [
  'Festive Reads',
  'Credit Cards',
  'Financial Education',
  'Taxes',
  'Savings',
  'Investment',
  'Digital Gold',
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const highlightMatch = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-[#b98a30] text-black font-semibold px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-[#150015] text-white p-18 flex flex-col md:flex-row justify-between">
      {/* Left side: Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-1">Pixalive Blog</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mb-4" />
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-400">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      </div>

      {/* Right side: Search */}
      <div className="mt-6 md:mt-0 md:ml-12 w-full md:w-1/3">
        <h3 className="font-semibold mb-2">Search for an article</h3>
        <input
          type="text"
          placeholder="Search by keyword"
          className="w-full p-2 rounded bg-white text-black focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Place your content here and apply `highlightMatch()` on it */}
        {/* Example:
            <p>{highlightMatch("Your blog content here that includes searchTerm")}</p>
        */}
      </div>
    </div>
  );
};

export default BlogSection;
