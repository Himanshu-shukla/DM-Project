document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('inputName').value;
    const contact = document.getElementById('InputNumber').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('InputLocation').value;
    fetch('/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&contact=${contact}&email=${email}&message=${message}`,
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully');
          // Clear the form or perform any other actions here
        } else {
          alert('Error sending email');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  