import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client, POST_QUERY, urlFor } from '../lib/sanity'
import '../styles/blogPost.css'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const postData = await client.fetch(POST_QUERY, { slug })
        
        if (!postData) {
          setError('Post not found')
          return
        }
        
        setPost(postData)
      } catch (err) {
        console.error('Error fetching blog post:', err)
        setError('Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  // Custom components for PortableText
  const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <figure className="blog-post-image">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            loading="lazy"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a 
          href={value.href} 
          target={value.blank ? '_blank' : '_self'}
          rel={value.blank ? 'noopener noreferrer' : ''}
        >
          {children}
        </a>
      ),
    },
    block: {
      h1: ({ children }) => <h1 className="blog-post-h1">{children}</h1>,
      h2: ({ children }) => <h2 className="blog-post-h2">{children}</h2>,
      h3: ({ children }) => <h3 className="blog-post-h3">{children}</h3>,
      h4: ({ children }) => <h4 className="blog-post-h4">{children}</h4>,
      normal: ({ children }) => <p className="blog-post-paragraph">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="blog-post-blockquote">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="blog-post-list">{children}</ul>,
      number: ({ children }) => <ol className="blog-post-list">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="blog-post-list-item">{children}</li>,
      number: ({ children }) => <li className="blog-post-list-item">{children}</li>,
    },
  }

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="blog-spinner"></div>
        <p>Loading article...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="blog-post-error">
        <div className="error-content">
          <i className="fas fa-exclamation-triangle"></i>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <div className="error-actions">
            <button onClick={() => navigate('/blog')} className="btn-primary">
              Back to Blog
            </button>
            <button onClick={() => window.location.reload()} className="btn-secondary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="not-found-content">
          <i className="fas fa-file-alt"></i>
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="blog-post">
      {/* Back Navigation */}
      <div className="blog-post-nav">
        <Link to="/blog" className="back-link">
          <i className="fas fa-arrow-left"></i>
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <header className="blog-post-header">
        {post.mainImage && (
          <div className="blog-post-hero-image">
            <img
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
            />
          </div>
        )}
        
        <div className="blog-post-header-content">
          <div className="blog-post-meta">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            
            {post.categories && post.categories.length > 0 && (
              <div className="blog-post-categories">
                {post.categories.map(category => (
                  <span key={category._id} className="category-tag">
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          {post.excerpt && (
            <p className="blog-post-excerpt">{post.excerpt}</p>
          )}
          
          {post.author && (
            <div className="blog-post-author">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(60).height(60).url()}
                  alt={post.author.name}
                  className="author-avatar"
                />
              )}
              <div className="author-info">
                <span className="author-name">{post.author.name}</span>
                <span className="author-label">Author</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="blog-post-content">
        <div className="blog-post-body">
          {post.body && (
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          )}
        </div>
      </div>

      {/* Share Section */}
      <footer className="blog-post-footer">
        <div className="blog-post-share">
          <h4>Share this article</h4>
          <div className="share-buttons">
            <button 
              onClick={() => {
                navigator.share({
                  title: post.title,
                  url: window.location.href
                }).catch(() => {
                  // Fallback for browsers that don't support Web Share API
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link copied to clipboard!')
                })
              }}
              className="share-btn"
            >
              <i className="fas fa-share"></i>
              Share
            </button>
            
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn twitter"
            >
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn linkedin"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="blog-post-navigation">
          <Link to="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </footer>
    </article>
  )
}

export default BlogPost