// errorHandler.js
document.addEventListener('DOMContentLoaded', function () {
  const errorMessage = document.getElementById('error-message');
  const errorTitle = document.querySelector('title'); // Select the title element

  const urlParams = new URLSearchParams(window.location.search);
  const statusCode = parseInt(urlParams.get('statusCode'));

  // Define error messages based on status codes
  const errorMessages = {
    400: 'Error 400: Bad Request',
    401: 'Error 401: Unauthorized',
    403: 'Error 403: Forbidden',
    404: 'Error 404: Page Not Found',
    408: 'Error 408: Request Timeout',
    429: 'Error 429: Too Many Requests',
    500: 'Error 500: Internal Server Error',
    503: 'Error 503: Service Unavailable'
    // Add more status codes and their respective error messages as needed
  };

  // Define error titles based on status codes
  const errorTitles = {
    400: '400 Bad Request',
    401: '401 Unauthorized',
    403: '403 Forbidden',
    404: '404 Not Found',
    408: '408 Request Timeout',
    429: '429 Too Many Requests',
    500: '500 Internal Server Error',
    503: '503 Service Unavailable'
    // Add more status codes and their respective error titles as needed
  };

  // Display the error message and update the title based on the status code
  errorMessage.textContent = errorMessages[statusCode] || 'An unknown error occurred';
  errorTitle.textContent = errorTitles[statusCode] || 'Error'; // Set the title dynamically
});
