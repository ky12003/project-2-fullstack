import React, { useState, useEffect } from 'react';


const ImageComp = ({ folder, index, imageClass }) => {
    const [imagePath, setImagePath] = useState(null);
    useEffect(() => {
        const loadImage = async () => {
          try {
            const imageContextG = import.meta.globEager('../assets/images/g-imgs/*');
            const imageContextP = import.meta.globEager('../assets/images/p-imgs/*');
            const imageContextPic = import.meta.globEager('../assets/images/pic-imgs/*');
            const imageContextSA = import.meta.globEager('../assets/images/s-imgs-a/*');
            const imageContextSB = import.meta.globEager('../assets/images/s-imgs-b/*');
            const imageContexts = {
                'g-imgs': imageContextG,
                'p-imgs': imageContextP,
                'pic-imgs': imageContextPic,
                's-imgs-a': imageContextSA,
                's-imgs-b': imageContextSB
            };

            const imagePaths = Object.keys(imageContexts[folder]);
            
            const selectedImagePath = imagePaths[index];
            
            
            if (selectedImagePath) {
              const image = imageContexts[folder][selectedImagePath].default;
              setImagePath(image);
            } else {
              setImagePath(null);
            }
          } catch (error) {
            console.error('Error loading image:', error);
            setImagePath(null);
          }
        };
    
        loadImage();
      }, [folder, index]);

      return (
      <div>
      {imagePath ? (
        <img  className={imageClass} src={imagePath} alt={`Image at index ${index} in folder number ${folder}`} />
      ) : (
        <p>Image not found</p>
      )}
    </div>
      )

}

export default ImageComp