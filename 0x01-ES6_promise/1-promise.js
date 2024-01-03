export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const resObj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(resObj);
    } else {
      const errorObject = new Error('The fake API is not working currently');
      reject(errorObject);
    }
  });
}
