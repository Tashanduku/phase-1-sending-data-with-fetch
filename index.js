

// The submitData function takes name and email as arguments and returns a fetch() call.
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
        'Accept': 'application/json'         
      },
      body: JSON.stringify({ name, email })  
    })
      .then(response => {
       
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();  
      })
      .then(data => {
        
        const newUserDiv = document.createElement('div');
        newUserDiv.innerHTML = `New user ID: ${data.id}`;
        document.body.appendChild(newUserDiv);
      })
      .catch(error => {
        // If an error occurs, append the error message to the DOM
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = `Error: ${error.message}`;
        document.body.appendChild(errorDiv);
      });
  }
  
  // Export the function so that it can be used in tests
  module.exports = { submitData };
  