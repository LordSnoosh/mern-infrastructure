import * as usersAPI from './users-api';

export async function signUp(userData) {
  try {
    // usersAPI.signUp will resolve to the token sent back
    // from the server
    const token = await usersAPI.signUp(userData);
    return token;
  } catch {
    throw new Error('Invalid Sign Up');
  }
}