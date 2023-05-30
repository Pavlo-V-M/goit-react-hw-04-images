import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchText) => {
    setIsShowModal(false);
    setSearchText(searchText);
    setLoadedImagesCount(0);
    setTotalHits(0);
    setCurrentPage(1);
  };

  const toggleModal = (image) => {
    setIsShowModal((prevState) => !prevState);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setSelectedImage('');
  };

  return (
    <div className="appRenderWrap">
      <Searchbar handleSearch={handleSearch} />
      <ImageGallery
        searchText={searchText}
        toggleModal={toggleModal}
        loadedImagesCount={loadedImagesCount}
        setLoadedImagesCount={setLoadedImagesCount}
        totalHits={totalHits}
        setTotalHits={setTotalHits}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isShowModal && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default App;

//---------------------------------------------------------------------------------

// import React from 'react';
// // import PropTypes from 'prop-types';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';

// export class App extends React.Component {
//   state = {
//     isShowModal: false,
//     searchText: '',
//     selectedImage: '',
//   };

//   handleSearch = (searchText) => {
//     this.setState({ searchText })
//   };

//   toggleModal = (image) => {
//     this.setState((prevState) => ({
//       isShowModal: !prevState.isShowModal,
//       selectedImage: image,
//     }));
//   };

//   closeModal = () => {
//     this.setState({
//       isShowModal: false,
//       // selectedImage: '',
//     });
//   };

//   render() {
//     const { isShowModal, selectedImage } = this.state;
//     return (
//       <div className="appRenderWrap">
//         <Searchbar handleSearch={this.handleSearch} />
//         <ImageGallery searchText={this.state.searchText} toggleModal={this.toggleModal} />
//         {isShowModal && (
//           <Modal image={selectedImage} closeModal={this.closeModal} />
//         )}
//       </div>
//     );
//   }
// }

// // App.propTypes = {};
