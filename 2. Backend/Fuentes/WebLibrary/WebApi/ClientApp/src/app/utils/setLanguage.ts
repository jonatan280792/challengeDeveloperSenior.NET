const setLanguage = (keyName) => {
  // let value = sessionStorage.getItem('language');
  const valueString = sessionStorage.getItem(keyName);

  let value;
  if (!valueString) {
    value = 'es';
  } else {
    return JSON.parse(valueString);
  }
};

export { setLanguage };