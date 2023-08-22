import axios from 'axios';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/v1/random_greeting');
    dispatch({ type: 'SET_GREETING', payload: response.data.greeting });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'An error occurred while fetching the greeting.' });
  }
};

export default fetchRandomGreeting;
