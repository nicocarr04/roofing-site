import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/pictures.css';

function Pictures() {
  const [imageNames, setImageNames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const hostname = 'http://localhost:4000'

  const showImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    // Fetch image filenames from the server
    const fetchImageNames = async () => {
      try {
        const response = await axios.get(`${hostname}/api/images`);
        setImageNames(response.data.imageNames);
      } catch (error) {
        console.error('Error fetching image names:', error);
      }
    };

    fetchImageNames();
  }, []);

  return (
    <main>
      <div className='wrapper'>
        <div className='work-title'>
          <h1>Work Gallery</h1>
          <h3>Have a look at some of our recent work</h3>
        </div>
        <div className='work-gallery'>
          {imageNames.map((imageName) => {
            try {
              const imageSource = require(`./imgs/uploaded/${imageName}`);
              return (
                <img
                  key={imageName}
                  src={imageSource}
                  alt={imageName}
                  className='gallery-image'
                  onClick={() => showImage(imageSource)}
                />
              );
            } catch (error) {
              console.error(`Error loading image ${imageName}: ${error}`);
              return null; 
            }
          })}
        </div>
      </div>
      <div className={`image-modal-overlay ${selectedImage ? 'active' : ''}`} onClick={closeModal}>
        <div className={`image-modal-content ${selectedImage ? 'active' : ''}`}>
          {selectedImage && (
            <>
              <img src={selectedImage} alt='Selected' />
              <button onClick={closeModal}>Close</button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Pictures;
