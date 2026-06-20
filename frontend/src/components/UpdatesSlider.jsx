import React, { useRef, useState } from 'react';
import './UpdatesSlider.css';

const UPDATES = [
  { id: 1, src: '/assets/update1.jpeg', alt: 'Update 1' },
  { id: 2, src: '/assets/update2.jpeg', alt: 'Update 2' },
  { id: 3, src: '/assets/update3.jpeg', alt: 'Update 3' },
  { id: 4, src: '/assets/update4.jpeg', alt: 'Update 4' },
];

export default function UpdatesSlider() {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="section bg-white updates-section">
        <div className="container">
          <div className="section-label">
            <div className="badge">Latest News</div>
            <h2>Updates</h2>
            <p>Stay informed with the latest updates and activities from our community.</p>
          </div>
          
          <div className="updates-slider-container">
            <button className="slider-btn prev" onClick={scrollLeft}>
              &#10094;
            </button>
            
            <div className="updates-slider" ref={sliderRef}>
              {UPDATES.map((update) => (
                <div 
                  key={update.id} 
                  className="update-slide"
                  onClick={() => setSelectedImage(update)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={update.src} alt={update.alt} />
                </div>
              ))}
            </div>

            <button className="slider-btn next" onClick={scrollRight}>
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </>
  );
}
