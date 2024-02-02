document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const successMessage = document.querySelector('.form-messages.success');
    const errorMessage = document.querySelector('.form-messages.error');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Collect form data
      const formData = new FormData(form);
  
      // Send a POST request to your backend using fetch or another AJAX method
      fetch('https://rosscarhart.com/send', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            found: formData.get('find-us'),
            message: formData.get('message'),
      }),
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) =>{
          if (response.ok) {
            // If the response is successful (e.g., status code 200), show the success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset(); // Optionally, reset the form
          } else {
            // If there's an error, show the error message
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle other errors if needed
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
        });
    });
  });
  