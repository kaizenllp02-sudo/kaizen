import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, POSTS_QUERY, urlFor } from '../../lib/sanity'
import '../../styles/blogPreview.css'

const extractTextFromBlocks = (blocks, maxLength = 120) => {
  if (!blocks || !Array.isArray(blocks)) return ''

  let text = ''
  for (const block of blocks) {
    if (block._type === 'block' && block.children) {
      for (const child of block.children) {
        if (child.text) {
          text += child.text + ' '
        }
      }
      if (text.length > maxLength) break
    }
  }

  return text.length > maxLength
    ? text.substring(0, maxLength).trim() + '...'
    : text.trim()
}

const BlogPreview = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        // Fetch only the latest 3 posts
        const postsData = await client.fetch(`${POSTS_QUERY}[0...3]`)
        setPosts(postsData)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="blog-preview">
        <div className="blog-preview-container">
          <div className="blog-preview-loading">
            <div className="blog-preview-spinner"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-preview">
      <div className="blog-preview-container">
        {/* Header Section */}
        <div className="blog-preview-header">
          <div className="blog-preview-heading">
            <h2>Latest Insights</h2>
            <p>Stay updated with our latest thoughts, strategies, and industry insights</p>
          </div>
          <Link to="/blog" className="blog-preview-see-all" aria-label="See all blog posts">
            See All
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="blog-preview-grid">
          {posts.map(post => (
            <Link
              key={post._id}
              to={`/blog/${post.slug.current}`}
              className="blog-preview-card-link"
            >
              <article className="blog-preview-card">
                {post.mainImage && (
                  <div className="blog-preview-card-image">
                    <img
                      src={urlFor(post.mainImage).width(400).height(250).url()}
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="blog-preview-card-content">
                  <div className="blog-preview-card-meta">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        <i className="fas fa-calendar-alt"></i>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <span className="blog-preview-card-category">
                        {post.categories[0].title}
                      </span>
                    )}
                  </div>

                  <h3 className="blog-preview-card-title">
                    {post.title}
                  </h3>

                  {(post.excerpt || post.body) && (
                    <p className="blog-preview-card-excerpt">
                      {post.excerpt || extractTextFromBlocks(post.body)}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview