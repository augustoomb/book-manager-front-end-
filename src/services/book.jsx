import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const saveBook = async (objBook) => {
  try {
    const response = await axios.post(`${backUrl}/books`, {
      title: objBook.title,
      thumb: objBook.sendImg,
      hasBeenRead: objBook.hasBeenReadState,
      authorName: objBook.author,
      infoLink: objBook.infoLink,
    }, {
      headers: {
        Authorization: localStorage.getItem('tokenLogin'),
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
    return 'Erro';
  }
};

const getAllBooksByUser = async () => {
  try {
    const response = await axios.get(`${backUrl}/books`, {
      headers: {
        Authorization: localStorage.getItem('tokenLogin'),
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
    return 'Erro';
  }
};

const updateBook = async (id, objBook) => {
  try {
    const response = await axios.put(
      `${backUrl}/books/${id}`,
      {
        title: objBook.title,
        thumb: objBook.sendImg,
        hasBeenRead: objBook.beenRead,
        authorName: objBook.author,
        infoLink: objBook.infoLink,
      },
      {
        headers: {
          Authorization: localStorage.getItem('tokenLogin'),
        },
      },
    );
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
    return 'Erro';
  }
};

export { saveBook, getAllBooksByUser, updateBook };
