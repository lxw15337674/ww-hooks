export const getData = () => {
  return new Promise((resolve) => {
    console.log('data');
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
};

export const getErrorData = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(Error('error'));
    }, 1000);
  });
};
