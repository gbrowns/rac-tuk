// Function to make a GET request to an API endpoint
export async function get(apiUrl) {
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Function to make a POST request to an API endpoint
export async function post(apiUrl, data) {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Function to make a PUT request to an API endpoint
export async function put(apiUrl, data) {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Function to make a DELETE request to an API endpoint
export async function del(apiUrl) {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}
