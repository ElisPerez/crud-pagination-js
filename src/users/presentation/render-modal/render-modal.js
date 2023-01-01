import modalHtml from './render-modal.html?raw';
import './render-modal.css';

let modal, form;

// TODO: cargar usuario por id
export const showModal = () => {
  modal?.classList.remove('hide-modal');
};

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset(); // reset() es un metodo nativo para resetear los formularios
};

/**
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';

  // Cerrar el modal
  modal.addEventListener('click', e => {
    if (e.target.className === 'modal-container') {
      hideModal();
    }
  });

  // Formulario
  form = modal.querySelector('form');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const userLike = {};

    for (const [key, value] of formData) {
      if (key === 'balance') {
        userLike[key] = +value; // convierte string a number
        continue;
      }

      if (key === 'isActive') {
        userLike[key] = (value === 'on') ? true : false;
        continue;
      }

      userLike[key] = value;
    }

    await callback(userLike);

    hideModal();
  });

  element.append(modal);
};
