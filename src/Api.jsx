
// src/api/index.js

const API_KEY = 'live_fp7hMm7ZKPbeD9lE3roIGDNrME8OH6cQGKdUTnbQ4IYH2Ih4s7vKq3AqihDPbPM6'; 
const BASE_URL = 'https://api.thedogapi.com/v1';

export const fetchBreedInfo = async (breed) => {
  try {
    const response = await fetch(`${BASE_URL}/breeds/search?q=${breed}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch breed information');
    }
    const data = await response.json();
    if (data.length > 0) {
      const breedId = data[0].id;
      const breedInfoResponse = await fetch(`${BASE_URL}/images/search?breed_id=${breedId}`, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      if (!breedInfoResponse.ok) {
        throw new Error('Failed to fetch breed information');
      }
      const breedInfoData = await breedInfoResponse.json();
      const breedInfo = {
        name: data[0].name,
        description: data[0].temperament, // You can use other fields like 'description' or 'temperament' based on your preference
        image: breedInfoData[0].url
      };
      return breedInfo;
    } else {
      throw new Error('Breed not found');
    }
  } catch (error) {
    console.error('Error fetching breed information:', error);
    return null;
  }
};


