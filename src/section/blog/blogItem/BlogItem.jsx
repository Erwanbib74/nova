import Link from 'next/link'
import { FaRegComments } from "react-icons/fa";

import BlogItemStyleWrapper from "./BlogItem.style";

const BlogItem = ({ thumbnail, title, timeStamp, categories, excerpt }) => {
  return (
    <BlogItemStyleWrapper className="single_blog_item">
      <div className="blog_thumb">
        
          <a>
            <img src={thumbnail.src} alt="bithu nft blog" />
          </a>
        
      </div>
      <div className="blog_content">
        <div className="blog_meta">
          
            <Link href="/">
              <a className="category_title">
                
               
              </a>
            </Link>
          
          <span></span>
          <span className="time_stamp">{timeStamp}</span>
        </div>

        
          <a className="blog_title">
            {" "}
            {title}
          </a>
        
        <p>{excerpt} </p>
        <div className="blog_footer">
          <div className="read_more_btn">
            
              <a> </a>
            
          </div>
          <div className="comment_icon">
            
              <a>
                {" "}
                
              </a>
            
            Terminée
          </div>
        </div>
      </div>
    </BlogItemStyleWrapper>
  );
};

export default BlogItem;
