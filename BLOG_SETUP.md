# Sanity Blog Setup Instructions

## 🚀 Quick Setup Guide

### 1. Create a Sanity Project
1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project
3. Choose "Blog" template or start with a blank project
4. Note your Project ID and Dataset name (usually "production")

### 2. Update Sanity Configuration
Edit `src/lib/sanity.js` and replace:
```javascript
projectId: 'your-project-id', // Replace with your actual project ID
dataset: 'production', // Replace with your dataset name if different
```

### 3. Sanity Schema Setup
If you started with a blank project, you'll need to set up your schemas. Here are the basic schemas you'll need:

#### Blog Post Schema (post.js)
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }
  ]
}
```

#### Author Schema (author.js)
```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ]
}
```

#### Category Schema (category.js)
```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
```

#### Block Content Schema (blockContent.js)
```javascript
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }
      ]
    },
  ],
}
```

### 4. Navigation Setup
Add blog links to your navigation components. For example, in your Navbar component:

```jsx
<Link to="/blog">Blog</Link>
```

### 5. Environment Variables (Optional)
For production, consider using environment variables:

Create `.env` file:
```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

Then update `sanity.js`:
```javascript
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  // ... other config
})
```

### 6. Testing Your Setup
1. Start your React development server: `npm run dev`
2. Navigate to `/blog` in your browser
3. You should see the blog page (empty if no posts yet)

### 7. Adding Content
1. Access your Sanity Studio (usually at `your-project.sanity.studio`)
2. Create some authors, categories, and blog posts
3. Publish them
4. Refresh your blog page to see the content

## 🎨 Customization Options

### Styling
- All styles are in `src/styles/blog.css` and `src/styles/blogPost.css`
- Colors use your existing theme (golden accent: rgba(223, 160, 6, 0.9))
- Fully responsive design

### Features Included
- ✅ Blog post listing with pagination
- ✅ Category filtering
- ✅ Search functionality
- ✅ Individual blog post pages
- ✅ Author information
- ✅ Social sharing buttons
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ SEO-friendly URLs

### Optional Enhancements
- Add pagination for large numbers of posts
- Implement blog post comments
- Add related posts suggestions
- Include reading time estimation
- Add RSS feed generation

## 🔧 Troubleshooting

### Common Issues
1. **Posts not showing**: Check your Sanity project ID and dataset name
2. **Images not loading**: Verify image fields in your schema
3. **Styling issues**: Ensure CSS files are properly imported
4. **CORS errors**: Check your Sanity CORS settings in the management console

### Support
- [Sanity Documentation](https://www.sanity.io/docs)
- [React Router Documentation](https://reactrouter.com/)

## 📦 Packages Installed
- `@sanity/client` - Sanity API client
- `@sanity/image-url` - Image URL builder
- `@portabletext/react` - Rich text rendering

Your blog is now ready to use! 🎉