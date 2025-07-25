import React from 'react';
import '../../styles/gallery.css';

const images = [
  {
    src: 'images/image1.png',
    alt: 'Mountain Lake'
  },
  {
    src: 'images/image2.png',
    alt: 'Desert Dunes'
  },
  {
    src: 'images/image3.png',
    alt: 'Forest Path'
  },
  {
    src: 'images/image4.png',
    alt: 'Sunset Beach'
  },
  {
    src: 'images/image5.png',
    alt: 'City Skyline'
  },
  {
    src: 'images/image6.png',
    alt: 'Desert Dunes 2'
  },
  {
    src: 'images/image7.png',
    alt: 'Forest Path 2'
  },
  {
    src: 'images/image8.png',
    alt: 'Sunset Beach'
  },
  {
    src: 'images/image9.png',
    alt: 'City Skyline 2'
  },
  // {
  //   src: 'images/image10.jpg',
  //   alt: 'Sunset Beach'
  // },
  {
    src: 'images/image11.jpg',
    alt: 'City Skyline'
  },
  {
    src: 'images/image12.jpg',
    alt: 'Desert Dunes 2'
  },
  {
    src: 'images/image13.jpg',
    alt: 'Forest Path 2'
  },
  {
    src: 'images/image14.jpg',
    alt: 'Sunset Beach'
  },
  {
    src: 'images/image15.jpg',
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