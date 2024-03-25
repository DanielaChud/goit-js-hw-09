document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.feedback-form');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    form.email.value = savedFormData.email || '';
    form.message.value = savedFormData.message || '';
  }

  form.addEventListener('input', function (event) {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email && message) {
      console.log({ email, message });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both email and message fields.');
    }
  });
});