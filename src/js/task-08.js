const formEl = document.querySelector('.login-form'); // form.login-form
const onSubmitForm = e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!(email.value && password.value)) {
    email.classList.add(email.value ? 'valid' : 'invalid');
    password.classList.add(password.value ? 'valid' : 'invalid');
    setTimeout(() => {
      alert('input data');
    });
  } else {
    const obj = { email: email.value, password: password.value };
    console.log(obj);
    formEl.reset();
  }
};
formEl.addEventListener('submit', onSubmitForm);
