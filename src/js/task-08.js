const formEl = document.querySelector('.login-form'); // form.login-form
const resetStyles = () => {};
const onSubmitForm = e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  email.className = password.className = '';

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

//---------------OR-------------

// const formEl = document.querySelector('.login-form'); // form.login-form
// formEl.addEventListener('submit', e => {
//   e.preventDefault();
//   const { email, password } = e.currentTarget.elements;
//   if (!(email.value && password.value)) alert('input data');
//   else {
//     console.log({ email: email.value, password: password.value });
//     formEl.reset();
//   }
// });
