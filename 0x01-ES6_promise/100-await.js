import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const [userResult, photoResult] = await Promise.all([createUser(), uploadPhoto()]);
    const obj = {
      photo: photoResult,
      user: userResult,
    };

    return obj;
  } catch (errr) {
    return {
      photo: null,
      user: null,
    };
  }
}
