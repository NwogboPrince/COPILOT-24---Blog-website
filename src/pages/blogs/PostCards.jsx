import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../Redux/features/blogs/blogsSlice';
import PostCard from './Card';

const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(state => state.blogs);

  // pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 5;
  const startIndex = (currentPage - 1) * blogPerPage;
  const endIndex = currentPage * blogPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  const handlePageChange = (nexPage) => {
    setCurrentPage(nexPage)
  }

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="some-wrapper">
      {
        blogs.length > 0 ? (
          <div className="blogs-grid">
            {paginatedBlogs.map(blog => (
              <PostCard key={blog.id} blog={blog} />
            ))}
            {/* paginations */}
            <div className="space-x-2">
              <button className="px-2 bg-red-500 text-white rounded cursor-pointer" onClick={()=> handlePageChange(currentPage -1)}
                disabled={currentPage === 1}>
                previous
              </button>
              <span>{currentPage}</span>
              <button className="px-2 bg-blue-500 text-white rounded" onClick={() => handlePageChange(currentPage +1)}>
                Next
                </button>
              </div>
          </div>
        ) : (
          <div>No blogs found!</div>
        )
      }
    </div>
  );
};

export default PostCards;
