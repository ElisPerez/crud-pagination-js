import { localhostUserToModel } from '../mappers/localhost-user-mapper';
import { User } from '../models/user';

/**
 * It fetches a list of users from a remote API, and logs the response to the console
 * @param {Number} page - The page number to load.
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  //? userLike: que luce como un usuario.
  const users = data.map(localhostUserToModel);
  // console.log(users);

  return users;
};
