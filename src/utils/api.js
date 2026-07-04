/**
 * Sends contact form details to the custom Node.js Express backend.
 * Uses fetch to send a POST request.
 * 
 * @param {Object} data - Contact form data
 * @returns {Promise} - Fetch response promise resolving to JSON
 */
export const sendEmailViaBackend = async (data) => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message via backend server.');
  }

  return result;
};
