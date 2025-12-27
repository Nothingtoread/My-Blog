import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <h1>Bài viết không tồn tại</h1>
          <Link to="/blog" className="back-link">← Quay lại Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="blog-post-container">
        <Link to="/blog" className="back-link">← Quay lại Blog</Link>
        
        <article className="post-content">
          <header className="post-header">
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{new Date(post.date).toLocaleDateString('vi-VN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
          </header>
          
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
          
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        <div className="post-navigation">
          <Link to="/blog" className="nav-button">Xem tất cả bài viết</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

