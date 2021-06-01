import React from 'react';
import { UploadImg } from './UploadImg';

export function ImgUploadPreview({ imgUrl, onImgChange }) {
  const handleImgChange = (url) => {
    onImgChange(url);
  };
  return (
    <section className='img-upload-preview'>
      <div className='img-preview'>
        {imgUrl ? (
          <img src={imgUrl} alt='' />
        ) : (
          <div className='empty-img'>Upload an Image</div>
        )}
      </div>

      <UploadImg handleImgChange={handleImgChange} />
    </section>
  );
}
