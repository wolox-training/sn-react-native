const showErrorMessage = (idError, display) => (document.getElementById(idError).style.display = display);
const validatePassword = validationPassword =>
  validationPassword.length >= 8 && validationPassword.length <= 52;
const validateEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

export { showErrorMessage, validatePassword, validateEmail };
