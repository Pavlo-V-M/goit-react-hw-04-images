// -------------------------------------------
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35028800-20b44384747278ffeb1b55203';

export const getSearchElements = async (searchText, perpage = 12, page = 1) => {

  try {
    const urlRequest = `${BASE_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perpage}`;
    const response = await fetch(urlRequest);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
