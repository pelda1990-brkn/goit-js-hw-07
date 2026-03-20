const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // sayfa yenilenmesini engeller

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // boş alan kontrolü
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // nesne oluşturma
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // formu temizleme
  form.reset();
});
