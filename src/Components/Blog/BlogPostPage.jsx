import React, { useState } from 'react';
import featuredImageBase from './../../assets/Blogs/blog-1.png'; // Initial featured image
import promoImage from './../../assets/Blogs/blog-promo.png';
import blogThumb1 from './../../assets/Blogs/blog-2.png';
import blogThumb2 from './../../assets/Blogs/blog-3.png';

const BlogPostPage = () => {
  const [featuredBlog, setFeaturedBlog] = useState({
    title: 'The Future of Wealth: Digital Gold with Pixalive',
    thumb: featuredImageBase,
  });

  const [recentBlogs, setRecentBlogs] = useState([
    {
      title: 'Building a future with tokenized gold assets',
      thumb: blogThumb1,
    },
    {
      title: 'How to protect your wealth in a digital world',
      thumb: blogThumb2,
    },
  ]);

  const handleRecentBlogClick = (index) => {
    const clickedBlog = recentBlogs[index];
    const currentFeatured = { ...featuredBlog };

    // Update featured with clicked one
    setFeaturedBlog(clickedBlog);

    // Replace clicked with the previous featured one
    const newRecentBlogs = [...recentBlogs];
    newRecentBlogs[index] = currentFeatured;

    setRecentBlogs(newRecentBlogs);
  };

  return (
    <div className="min-h-screen bg-[#140014] text-white px-4 py-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Column: Blog Content */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-2">{featuredBlog.title}</h2>
          <p className="text-sm text-gray-400 mb-4">by Pixalive Team | Published on Apr 20, 2025</p>

          {/* Featured Image */}
          <img
            src={featuredBlog.thumb}
            alt="Blog"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg mb-3 mx-auto"
          />

          {/* Table of Contents */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Table of contents</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Why Choose Pixalive Gold Wallet?</li>
              <li>1. Accessibility for Everyone</li>
              <li>2. Security and Purity Guaranteed</li>
              <li>3. Liquidity and Flexibility</li>
              <li>4. More Than an Investment</li>
              <li>Revolutionizing the Gold Ecosystem</li>
              <li>Gold Wallet: Securely store and manage your digital gold</li>
              <li>A Partnership Built on Trust</li>
              <li>The Future is Digital, the Future is Gold</li>
            </ul>
          </div>

          {/* Blog Body */}
          <div className="space-y-6 text-sm text-gray-200 leading-relaxed">
            <p>
              In a world where digital transformation shapes our lives, Pixalive brings a secure,
              accessible, and innovative platform to invest in digital gold. Whether you're a
              seasoned investor or just starting your journey, Pixalive makes it simple and rewarding.
            </p>

            <h4 className="font-semibold text-white text-base">1. Accessibility for Everyone</h4>
            <p>
              Digital gold is no longer reserved for the elite. With Pixalive, anyone can start
              investing in gold with as little as ₹10, removing barriers and democratizing access.
            </p>

            <h4 className="font-semibold text-white text-base">2. Security and Purity Guaranteed</h4>
            <p>
              Pixalive partners with reputed vaults and gold refineries to offer 24k pure digital
              gold, fully secured and insured. Every transaction is recorded and tracked for your peace of mind.
            </p>

            <h4 className="font-semibold text-white text-base">3. Liquidity and Flexibility</h4>
            <p>
              Enjoy instant buy/sell options with competitive rates. Need to cash out or convert gold
              to jewelry? Pixalive lets you do it all with ease, making your gold as liquid as your wallet.
            </p>

            <h4 className="font-semibold text-white text-base">4. More Than an Investment</h4>
            <p>
              Think beyond gold as a material asset. Use it to pay for services, gift to someone, or
              save for long-term goals — digital gold empowers more than just financial growth.
            </p>

            <h4 className="font-semibold text-white text-base">Revolutionizing the Gold Ecosystem</h4>
            <p>
              Pixalive is pioneering a shift in how gold is stored and accessed. No hidden charges,
              no middlemen — just direct, digital ownership.
            </p>

            <h4 className="font-semibold text-white text-base">
              Gold Wallet: Securely store and manage your digital gold.
            </h4>
            <p>
              Backed by top-tier security and digital proof through receipts, use our easy-to-access
              dashboard to monitor, manage, and grow your portfolio.
            </p>

            <h4 className="font-semibold text-white text-base">A Partnership Built on Trust</h4>
            <p>
              Pixalive collaborates with market leaders that have years of gold and fintech
              experience. We’re committed to delivering transparency, trust, and the best value.
            </p>

            <h4 className="font-semibold text-white text-base">
              The Future is Digital, the Future is Gold
            </h4>
            <p>
              As the world moves toward decentralization, the way we invest and build wealth will
              transform. Pixalive’s digital gold wallet is not just an app — it’s your entry into the
              future of finance. Embrace the new standard. Own your digital gold today and watch your
              wealth grow tomorrow.
            </p>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          {/* Promo Card */}
          <div className="bg-white text-black rounded-lg p-4 shadow-md">
            <h4 className="font-semibold mb-1">Save in Digital Gold with</h4>
            <p className="text-sm text-gray-700 mb-2">Pixalive Gold Wallet. Invest securely, anytime, anywhere.</p>
            <img src={promoImage} alt="Promo" className="w-full h-auto rounded-md" />
          </div>

          {/* Recent Blogs */}
          <div>
            <h4 className="text-white font-semibold mb-2">Recent Blogs</h4>
            <div className="space-y-3">
              {recentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80"
                  onClick={() => handleRecentBlogClick(index)}
                >
                  <img src={blog.thumb} alt={blog.title} className="w-12 h-12 rounded-md object-cover" />
                  <p className="text-sm text-gray-300">{blog.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
