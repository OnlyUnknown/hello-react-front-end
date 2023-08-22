import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const getRandomGreeting = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/random_greeting`);
  return response.data.greeting;
};

export default getRandomGreeting;
