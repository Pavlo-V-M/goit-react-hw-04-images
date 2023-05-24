import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = (props) => {
  const { images, onImageClick } = props;
  return images.map(image => (
    <li className="ImageGalleryItem" key={image.id} >
      <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags} onClick={() => onImageClick(image.largeImageURL)} />
    </li>));
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;