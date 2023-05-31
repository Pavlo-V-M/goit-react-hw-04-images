import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ image, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const closeModalOnClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={closeModalOnClick}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
 closeModal: PropTypes.func.isRequired,
};

export default Modal;

//----------------------------------------------------------------------

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   closeModalOnClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     const { image } = this.props;
//     return (
//       <div className="Overlay" onClick={this.closeModalOnClick}>
//         <div className="Modal">
//           <img src={image} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
//   image: PropTypes.string.isRequired,
// };

// export default Modal;
