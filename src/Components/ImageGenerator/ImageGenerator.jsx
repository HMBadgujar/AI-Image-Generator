import React, { useState, useRef } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
  const [image_url, setImageUrl] = useState('/');
  let inputRef = useRef(null);
  const [loading,setLoading]= useState(false);
  const imageGenerator=async () => {
    if(inputRef.current.value.trim() === '') {
      alert("Please enter a description to generate an image.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('prompt', `${inputRef.current.value}`);
      const response = await fetch(
        "https://clipdrop-api.co/text-to-image/v1",
        {
          method: "POST",
          headers: {
            'x-api-key': '94d9883dc1f9f4ab21dcab86972e2f89abe80edfbdcfbc30ffa446aa3262b5ac3de04436a8dd33f1bb8c9a92e2f4704e', // Use your API key
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // CORRECT WAY: Read the response as a blob (the image file)
      const imageBlob = await response.blob();

      // Create a temporary URL from the image data
      const imageUrl = URL.createObjectURL(imageBlob);

      // Set this temporary URL as the image source

      
      setImageUrl(imageUrl);
      setLoading(false);

    
    
  }
  return (
    <div>
      <div className="ai-image-generator">
        <div className='header'>AI IMAGE <span>Generator </span></div>
        <div className='img-loading'>
          <div className="image">
            <img src={image_url==="/"?default_image:image_url} alt=''/>
          </div>
          <div className="loading">
            <div className={loading?"loading-bar-full":"loading-bar"}></div>
            <div className={loading?"loading-text":"display-none"}>Loading....</div>
          </div>
        </div>
        <div className="search-box">
          <input type='text' ref={inputRef} className='search-input' placeholder='Describe what you want to see...' />
          <div className="generate-btn" onClick={()=>{imageGenerator()}}>GENERATE</div>
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator
