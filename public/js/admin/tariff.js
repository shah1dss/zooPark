const tariffForm = document.querySelector('#tariff-form');
const listTariff = document.querySelector('#list-tariff-div');
const editFormTariff = document.querySelector('#edit-form-tariff');
const errorDiv = document.querySelector('#error-div');
const nameInput = document.querySelector('#name-input');
const descriptionInput = document.querySelector('#description-input');
const priceInput = document.querySelector('#price-input');

let countEdit = '';

tariffForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const {
      action, name, description, price,
    } = event.target;

    const response = await fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        price: price.value,
      }),
    });

    const data = await response.text();

    if (data === 'сервер Ошибка при добавлении') {
      errorDiv.innerHTML = '<h5>Сервер ошибка при добавлении!</h5>';
    } else {
      errorDiv.innerHTML = '';
      name.value = '';
      description.value = '';
      price.value = '';
      listTariff.innerHTML = data;
    }
  } catch (error) {
    console.log(error);
    errorDiv.innerHTML = '<h5>Клиент ошибка при изменении!</h5>';
  }
});

listTariff.addEventListener('click', async (event) => {
  const {
    del, edit, nam, desc, pric,
  } = event.target.dataset;
  countEdit = edit;
  nameInput.value = nam;
  descriptionInput.value = desc;
  priceInput.value = pric;
  if (del) {
    try {
      const response = await fetch(`/admin/tariff/${del}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          del,
        }),
      });

      const data = await response.text();

      if (data === 'ошибка при удаление') {
        errorDiv.innerHTML = '<h5>Сервер ошибка при удаление!</h5>';
      } else {
        errorDiv.innerHTML = '';
        listTariff.innerHTML = data;
      }
    } catch (error) {
      console.log(error);
      errorDiv.innerHTML = '<h5>Клиент ошибка при удаление!</h5>';
    }
  } else if (countEdit) {
    editFormTariff.addEventListener('submit', async (events) => {
      events.preventDefault();
      try {
        const { name, description, price } = events.target;

        const response = await fetch(`/admin/tariff/${countEdit}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            countEdit,
            name: name.value,
            description: description.value,
            price: price.value,
          }),
        });

        const data = await response.text();

        if (data === 'ошибка при изменении') {
          errorDiv.innerHTML = '<h5>Сервер ошибка при изменении!</h5>';
        } else {
          errorDiv.innerHTML = '';
          listTariff.innerHTML = data;
        }
      } catch (error) {
        console.log(error);
        errorDiv.innerHTML = '<h5>Клиент ошибка при изменении!</h5>';
      }
    });
  }
});
