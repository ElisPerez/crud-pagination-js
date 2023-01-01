import { User } from '../models/user';
import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  if (state.currentPage === 1) return;

  const users = await loadUsersByPage(state.currentPage - 1);
  state.users = users;
  state.currentPage -= 1;
};

// todo: implementar
const onUserChanged = () => {
  throw new Error('No implementado');
};

const reloadPage = async () => {
  throw new Error('No implementado');
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * @return {User[]}
   */
  getUsers: () => [...state.users], // Los objetos pasan por referencia por eso se crea una nueva referencia con el spread operator "...".

  /**
   * @return {Number}
   */
  getCurrentPage: () => state.currentPage, // Los primitivos pasan por valor, no hace falta usar el spread operator.
};
