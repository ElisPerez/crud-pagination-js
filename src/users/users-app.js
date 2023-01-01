import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';

/**
 *
 * @param {HTMLDivElement} element - The DOM element that the app will be rendered in.
 */
export const UsersApp = async (element) => {
  element.innerHTML = '...loading';
  await usersStore.loadNextPage();
  element.innerHTML = '';

  renderTable(element);
  renderButtons(element);
};
