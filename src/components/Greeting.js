// src/components/Greeting.js
import React, { useState, useEffect } from 'react';
import getRandomGreeting from '../api';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const randomGreeting = await getRandomGreeting();
        setGreeting(randomGreeting);
        setError(''); // Clear any previous error
      } catch (error) {
        setError('An error occurred while fetching the greeting.');
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      {error ? (
        <div>
          Error:
          {error}
        </div>
      ) : (
        <div>{greeting}</div>
      )}
    </div>
  );
};

export default Greeting;
