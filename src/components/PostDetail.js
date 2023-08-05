// PostDetail.js
import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';


const PostDetail = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState(false);

  useEffect(() => {

  }, [dispatch, id]);
  
   
  const post = posts.find((post) => post.id === parseInt(id));
  let details = post.body;
  let PostInfo = `Post Was Posted By ${post.id}`;
  
  
  const displayDetails = () => {
    setShowDetails(true);
    setShowUserId(false);
  };

  const displayUserId = () => {
    setShowDetails(false);
    setShowUserId(true);
  };

  return (
    <div>
      <Navbar/>
    <div className="homePage">
      <h2 style={{marginBottom : "20px"}}> Post Number #{post.id} </h2>
      <div className="details-div">
        
        <img  style={{width: "25%", borderRadius: "20px"}} src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
        
        <div className="button-container" style={{width: "70%"}}>
          {/* <button onClick={()=> setText(details)}>Details</button>
          <button onClick={()=> setText(PostInfo)}>User Info</button> */}

<button
              onClick={displayDetails}
              id='det'
              className={showDetails ? 'selected' : ''}
            >
              Detail
            </button>
            <button
              onClick={displayUserId}
              id='user'
              className={showUserId ? 'selected' : ''}
            >
              User Info
            </button>
          
            {showDetails && <p>{post.body}</p>}
            {showUserId && <p>Post Was Posted By User ID: {post.id}</p>}
            
          
        </div>
      </div>
      <h2 style={{marginTop: "20px"}}>More Posts</h2>
      <div className="home-container">
        { posts.map((post) =>(
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

export default PostDetail;
