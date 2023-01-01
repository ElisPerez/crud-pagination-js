import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
import { saveUser } from './use-cases/save-user';

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
  // renderAddButtonWithCallback(element, () => {
  //   console.log('from father');
  // });
  renderAddButton(element)
  renderModal(element, async(userLike) => {
    const user = await saveUser(userLike);
    usersStore.onUserChanged(user);
    renderTable();
  })
};
