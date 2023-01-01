import usersStore from './store/users-store';

/**
 *
 * @param {HTMLDivElement} element - The DOM element that the app will be rendered in.
 */
export const UsersApp = async (element) => {
  element.innerHTML = '...loading';
  await usersStore.loadNextPage();
};
