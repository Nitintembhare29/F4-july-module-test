// Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postActions';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
        <div className="homePage">
        <h1>Social Media For Travellers</h1>
        <input type="text" placeholder='Search here...'/>
        <div className="home-container">
        {
        posts.map((post) =>(
        // <PostCard key={post.id} post={post} />)
          <div key={post.id} className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id} `} alt="Post" />
            <div className="details-container">
            <div className='details'>
                  <h3>Post Title</h3>
                  <p>
                      {post.title.slice(0, 25)}...
                  </p>
                  <h3>Post Details</h3>
                  <p>
                      {post.body.slice(0, 50)},{" "}
                  <Link to={`/item/${post.id}`} 
                  className="read-more-link">
                    Read More...
                  </Link></p>
            </div>
            <Link to={`/item/${post.id}`} >
            <button id='btn'>{<FaChevronRight/>}</button>
            </Link>
            </div>
            
          </div>
      ))}
      </div>
        </div>
    </div>
  );
};

export default Home;
