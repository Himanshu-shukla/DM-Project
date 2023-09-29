document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNumberGroup = document.querySelector('.InputNumber-group');
  const inputNameGroup = document.querySelector('.name-group');
  const inputEmailGroup = document.querySelector('.email-group');
  const inputLocationGroup = document.querySelector('.location-group');


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
        document.getElementById('InputNumber').value = ""
        inputNumberGroup.querySelectorAll('.palceholder').forEach(element => {
          element.style.display = 'block';
        });

        document.getElementById('inputName').value = ""
        inputNameGroup.querySelectorAll('.palceholder').forEach(element => {
          element.style.display = 'block';
        });
        document.getElementById('email').value = ""
        inputEmailGroup.querySelectorAll('.palceholder').forEach(element => {
          element.style.display = 'block';
        });
        document.getElementById('InputLocation').value = ""
        inputLocationGroup.querySelectorAll('.palceholder').forEach(element => {
          element.style.display = 'block';
        });
      } else {
        alert('Error sending email');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
