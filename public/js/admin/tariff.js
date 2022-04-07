const tariffForm = document.querySelector('#tariff-form');
const listTariff = document.querySelector('#list-tariff-div');
const editFormTariff = document.querySelector('#edit-form-tariff');
const errorDiv = document.querySelector('#error-div');

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
      errorDiv.innerHTML = '<h3> сервер Ошибка при добавлении! </h3>';
    } else {
      errorDiv.innerHTML = '';
      listTariff.innerHTML = data;
    }
  } catch (error) {
    console.log(error);
    errorDiv.innerHTML = '<h2> клиент Ошибка при изменении! </h2>';
  }
});

listTariff.addEventListener('click', async (event) => {
  const { del, edit } = event.target.dataset;
  countEdit = edit;
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
        errorDiv.innerHTML = '<h3> сервер Ошибка при удаление! </h3>';
      } else {
        errorDiv.innerHTML = '';
        listTariff.innerHTML = data;
      }
    } catch (error) {
      console.log(error);
      errorDiv.innerHTML = '<h2> клиент Ошибка при удаление! </h2>';
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
          errorDiv.innerHTML = '<h3> сервер Ошибка при изменении! </h3>';
        } else {
          errorDiv.innerHTML = '';
          listTariff.innerHTML = data;
          // name.value = '';
          // photo.value = '';
          // description.value = '';
        }
      } catch (error) {
        console.log(error);
        errorDiv.innerHTML = '<h2> клиент Ошибка при изменении! </h2>';
      }
    });
  }
});
