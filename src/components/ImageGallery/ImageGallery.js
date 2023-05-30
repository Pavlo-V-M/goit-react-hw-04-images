import React, { useEffect, useState } from 'react';
import { getSearchElements } from '../../api/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

const ImageGallery = ({
  searchText,
  toggleModal,
  loadedImagesCount,
  setLoadedImagesCount,
  totalHits,
  setTotalHits,
  currentPage,
  setCurrentPage
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchText) {
      fetchImages();
    }// eslint-disable-next-line
  }, [searchText]);

  const fetchImages = () => {
  const perPage = 12; // Number of images per page
    getSearchElements(searchText, perPage, currentPage).then((data) => {
      const newImages = data.hits;
      setImages(newImages); // Reset the images state with new images
      setLoadedImagesCount((prevCount) => prevCount + newImages.length);
      setTotalHits(data.totalHits);
      setCurrentPage((prevPage) => prevPage + 1);
    });
 };

  const handleImageClick = (image) => {
    toggleModal(image);
  };

  const showLoadMore = loadedImagesCount < totalHits;

  const handleLoadMore = () => {
    fetchImages();
  };

  return (
    <div className="ImageGalleryWrap">
      {loadedImagesCount > 0 && (
        <ul className="ImageGallery">
          <ImageGalleryItem images={images} onImageClick={handleImageClick} />
        </ul>
      )}
      {showLoadMore && <Button onLoadMore={handleLoadMore} />}
    </div>
  );
};

export default ImageGallery;

//------------------------------------------------------------------

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getSearchElements } from '../../api/api'
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';

// class ImageGallery extends Component {
//   state = {
//   images: [],
//   currentPage: 1,
//   loadedImagesCount: 0,
//   totalHits: 0,
//   };

//   componentDidMount() {
//     // const data = getSearchElements()
//     // data.then(res => console.log(res))
//   }

//   // Modification function componentDidUpdate

//   // componentDidUpdate(prevProps) { console.log (this.props.searchText)
//   //   if (prevProps.searchText !== this.props.searchText) {
//   //     this.fetchImages();
//   //   }
//   // }

//   componentDidUpdate(prevProps) {
//     if (prevProps.searchText !== this.props.searchText) {
//       this.setState({
//         images: [], // Reset images
//         currentPage: 1,
//         loadedImagesCount: 0, // Reset loadedImagesCount
//       }, () => {
//         this.fetchImages(); // Fetch new images after resetting the state
//       });
//     }
//   };

//   fetchImages = () => {
//     const { searchText } = this.props;
//     const { currentPage } = this.state;
//     const perPage = 12; // Number of images per page

//     getSearchElements(searchText, perPage, currentPage).then((data) => {
//       console.log(data);
//       const newImages = data.hits;
//       this.setState((prevState) => ({
//         images: [...prevState.images, ...newImages],
//         currentPage: prevState.currentPage + 1,
//         loadedImagesCount: prevState.loadedImagesCount + newImages.length, // Increment loadedImagesCount
//         totalHits: data.totalHits
//       }));

//       setTimeout(() => {
//       console.log("Loaded Images Count:", this.state.loadedImagesCount);
//     }, 0);
//     });
//   };

//   handleImageClick = (image) => {
//     this.props.toggleModal(image);
//   };

//   render() {
//     const { images, loadedImagesCount, totalHits } = this.state;
//     const showLoadMore = images.length > 0 && loadedImagesCount < totalHits;

//     return (
//       <div className="ImageGalleryWrap">
//         {images.length > 0 && (
//           <ul className="ImageGallery">
//             <ImageGalleryItem images={images} onImageClick={this.handleImageClick} />
//           </ul>
//         )}
//         {showLoadMore && <Button onLoadMore={this.fetchImages} />}
//       </div>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };

// export default ImageGallery;

// ------------------------------------------------------

// componentDidUpdate(prevProps) { console.log (this.props.searchText)
  //   if (prevProps.searchText !== this.props.searchText) {
  //     getSearchElements(this.props.searchText).then((data) => {
  //       console.log(data);
  //       this.setState({ images: [...data.hits] });
  //       console.log(this.state.images);
  //       }
  //     )
  //   }
  // }
