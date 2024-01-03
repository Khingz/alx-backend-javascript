export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const resObj = {
      status: 200,
      body: 'Success',
    };
    if (promise) {
      resolve(resObj);
    } else {
      const errorObject = new Error();
      reject(errorObject);
    }
  })
    .then((res) => {
      console.log('Got a response from the API');
      // eslint-disable-next-line no-unused-vars
      const unusedVar = res;
    });
}
