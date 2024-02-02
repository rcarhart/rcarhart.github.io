document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const successMessage = document.querySelector('.form-messages.success');
    const errorMessage = document.querySelector('.form-messages.error');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
    }); 
    
    // Collect form data
    const formData = new FormData(form);

