import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([createUser(), uploadPhoto()]);
  return allPromises
    .then((res) => {
      console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
