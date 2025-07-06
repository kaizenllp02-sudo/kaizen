import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/home/Navbar.jsx';
import BlogPostContent from '../components/home/BlogPostContent.jsx';
import ContactForm from '../components/home/ContactForm.jsx';
import FAQ from '../components/home/FAQ.jsx';
import FooterMenu from '../components/home/FooterMenu.jsx';
import Footer from '../components/home/Footer.jsx';
import { useParams } from 'react-router-dom';
import { client, POST_QUERY, urlFor } from '../lib/sanity';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const postData = await client.fetch(POST_QUERY, { slug });
        if (!postData) {
          setError('Post not found');
          setPost(null);
          return;
        }
        setPost(postData);
      } catch (err) {
        setError('Failed to load post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  // Dynamic meta tags
  const metaTitle = post ? `${post.title} | Kaizen Blog` : (loading ? 'Loading... | Kaizen Blog' : 'Blog Post – Kaizen');
  const metaDescription = post?.excerpt || 'Read this in-depth article from Kaizen\'s marketing experts. Explore strategies, case studies, and actionable insights for research-driven marketing.';
  const metaImage = post?.mainImage ? urlFor(post.mainImage).width(1200).height(600).auto('format').url() : 'https://kaizzzen.vercel.app/og-image.jpg';
  const metaUrl = `https://kaizzzen.vercel.app/blog/${slug || 'post'}`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <Navbar />
      <BlogPostContent post={post} loading={loading} error={error} />
      <ContactForm />
      <FAQ />
      <FooterMenu />
      <Footer />
    </>
  );
};

export default BlogPost;