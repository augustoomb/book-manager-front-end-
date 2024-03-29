import axios from 'axios';

const arrSubject = ['fiction', 'romance', 'brazilian'];

const paginationLimit = 10;

const searchGoogleBooksApi = async (searchInput, firstCurrentIndex) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes',
      params: {
        // q: `intitle:${searchInput}`,
        q: searchInput,
        langRestrict: 'pt',
        printType: 'books',
        startIndex: firstCurrentIndex,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBook = async () => {
  const randomNumberSubject = getRandomIntInclusive(0, arrSubject.length);
  const randomNumberPosition = getRandomIntInclusive(0, paginationLimit);

  try {
    const response = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes',
      params: {
        q: `subject: ${arrSubject[randomNumberSubject]}`,
        langRestrict: 'pt',
        printType: 'books',
        maxResults: 1,
        startIndex: randomNumberPosition,
      },
    });
    return response.data.items[0];
  } catch (error) {
    return null;
  }
};

export { searchGoogleBooksApi, getRandomBook };
