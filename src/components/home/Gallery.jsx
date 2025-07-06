import React from 'react';
import '../../styles/gallery.css';

// Example images (replace with your own or fetch dynamically)
const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    alt: 'Mountain Lake'
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    alt: 'Desert Dunes'
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    alt: 'Forest Path'
  },
  {
    src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
    alt: 'Sunset Beach'
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    alt: 'City Skyline'
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    alt: 'Desert Dunes 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    alt: 'Forest Path 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
    alt: 'Sunset Beach'
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    alt: 'City Skyline 2'
  }
];

const Gallery = () => (
  <section className="gallery-section">
    <h2 className="gallery-heading">Our Work in Pictures</h2>
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;