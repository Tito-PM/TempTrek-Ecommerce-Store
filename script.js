// Handle form submission
document.getElementById('experience-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Hide form and display thank you message
    document.getElementById('experience-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally, here you could add an AJAX request to send the form data to your server
    // Example (this part requires server-side setup):
    // const formData = new FormData(this);
    // fetch('/submit-experience', {
    //    method: 'POST',
    //    body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //    console.log('Success:', data);
    // })
    // .catch((error) => {
    //    console.error('Error:', error);
    // });
});

