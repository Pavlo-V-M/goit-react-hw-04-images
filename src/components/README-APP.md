To determine the types of props in the given files, here's an overview of the
props and their types based on the provided code:

1 App.jsx:

Props: handleSearch: Function prop passed to the Searchbar component.
toggleModal: Function prop passed to the ImageGallery component. closeModal:
Function prop passed to the Modal component.

2 api.js:

No props defined in this file. It contains a function to make an API request.

3 Searchbar.js:

Props: handleSearch: Function prop received from the parent App component.

4 ImageGallery.js:

Props: searchText: Value prop received from the parent App component.
toggleModal: Function prop received from the parent App component.

5 ImageGalleryItem.js:

Props: images: Array of images received from the parent ImageGallery component.
onImageClick: Function prop received from the parent ImageGallery component.

6 Button.js:

Props: onLoadMore: Function prop received from the parent ImageGallery
component.

7 Modal.js:

Props: image: Value prop received from the parent App component. closeModal:
Function prop received from the parent App component.
