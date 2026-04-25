
const axios = require('axios');

const baseURL = 'http://localhost:8000/api';

async function testAuth() {
  const email = `testuser_${Date.now()}@example.com`;
  const password = 'password123';
  const name = 'Test User';

  try {
    console.log('--- Registering User ---');
    const registerResponse = await axios.post(`${baseURL}/auth/register`, {
      email,
      name,
      password,
    });
    console.log('Register Response:', registerResponse.data);

    console.log('\n--- Logging In ---');
    const loginResponse = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });
    console.log('Login Response:', loginResponse.data);
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testAuth();
