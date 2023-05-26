import React, { useState } from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const Searchbar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Simulating a delay of 3 seconds
    setTimeout(() => {
      handleSearch(inputValue);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button" disabled={!inputValue || isLoading}>
          {isLoading ? (
            <RotatingSquare color="#4fa94d" height={40} width={40} visible={true} />
          ) : (
            <span className="SearchForm-button-label">Search</span>
          )}
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};

export default Searchbar;

//------------------------------------------------------------------

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { RotatingSquare } from 'react-loader-spinner';

// class Searchbar extends Component {
//   state = {
//     inputValue: '',
//     isLoading: false
//   }

//   handleChange = ({ target: { value } }) => {
//     this.setState({ inputValue: value });
//   }
  
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { inputValue } = this.state;

//     this.setState({ isLoading: true });

//     // Simulating a delay of 3 seconds
//     setTimeout(() => {
//       this.props.handleSearch(inputValue);
//       this.setState({ isLoading: false });
//     }, 3000);
//   }

//   render() {
//     const { inputValue, isLoading } = this.state;

//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button" disabled={!inputValue || isLoading}>
//             {isLoading ? (
//               <RotatingSquare color="#4fa94d" height={40} width={40} visible={true} />
//             ) : (
//               <span className="SearchForm-button-label">Search</span>
//             )}
//           </button>
//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={inputValue}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
// handleSearch: PropTypes.func.isRequired,
// };

// export default Searchbar;




