import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog về JavaScript & Java</h1>
          <p>Chia sẻ kiến thức và kinh nghiệm về lập trình</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="blog-card"
            >
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-card-overlay">
                  <span className="blog-category">{post.category}</span>
                </div>
              </div>
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                  <span className="blog-read-more">Đọc thêm →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

