
/**
 * It fetches a list of users from a remote API, and logs the response to the console
 * @param [page=1] - The page number to load.
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
