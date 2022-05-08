const saveUserToCookie = (value) => {
  document.cookie = `user=${value}`;
};

export {
  saveUserToCookie
};