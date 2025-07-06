import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, POSTS_QUERY, CATEGORIES_QUERY, urlFor } from '../../lib/sanity'
import '../../styles/blog.css'

const extractTextFromBlocks = (blocks, maxLength = 150) => {
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

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [postsData, categoriesData] = await Promise.all([
          client.fetch(POSTS_QUERY),
          client.fetch(CATEGORIES_QUERY)
        ])
        setPosts(postsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' ||
      post.categories?.some(cat => cat._id === selectedCategory)

    const searchContent = post.excerpt || extractTextFromBlocks(post.body, 500)
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchContent?.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <section className="blog-section">
        <div className="blog-loading">
          <div className="blog-spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-section">
      <div className="blog-hero">
        <div className="blog-hero-content">
          <h1>Blog</h1>
          <p>Insights, tips, and stories from our journey</p>
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-filters-layout">
          {/* Blog Search */}
          <div className="blog-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Blog Categories */}
          <div className="blog-categories">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
              aria-label="Show all blog categories"
            >
              <i className="fas fa-th-large" aria-hidden="true"></i>
              Explore All
            </button>
            {categories.map(category => (
              <button
                key={category._id}
                className={selectedCategory === category._id ? 'active' : ''}
                onClick={() => setSelectedCategory(category._id)}
                aria-label={`Show category: ${category.title}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.length === 0 ? (
            <div className="blog-no-posts">
              <i className="fas fa-inbox"></i>
              <h3>No posts found</h3>
              <p>Try adjusting your search input.</p>
            </div>
          ) : (
            filteredPosts.map(post => (
              <Link
                key={post._id}
                to={`/blog/${post.slug.current}`}
                className="blog-card-link"
                aria-label={`Read blog post: ${post.title}`}
              >
                <article className="blog-card">
                  {post.mainImage && (
                    <div className="blog-card-image">
                      <img
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.title}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          <i className="fas fa-calendar-alt"></i>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      )}
                      {post.categories && post.categories.length > 0 && (
                        <span className="blog-card-category">
                          {post.categories[0].title}
                        </span>
                      )}
                    </div>

                    <h2 className="blog-card-title">
                      {post.title}
                    </h2>

                    {(post.excerpt || post.body) && (
                      <p className="blog-card-excerpt">
                        {post.excerpt || extractTextFromBlocks(post.body)}
                      </p>
                    )}

                    <div className="blog-card-footer">
                      {post.author && (
                        <div className="blog-card-author">
                          {post.author.image && (
                            <img
                              src={urlFor(post.author.image).width(40).height(40).url()}
                              alt={post.author.name}
                            />
                          )}
                          <span>{post.author.name}</span>
                        </div>
                      )}

                      <div className="blog-card-read-more">
                        Read More
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogSection