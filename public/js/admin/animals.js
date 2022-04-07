const cardForm = document.querySelector('#card-form');
const listAnimals = document.querySelector('#list-animals-div');
const editForm = document.querySelector('#edit-form');
const errorDiv = document.querySelector('#error-div');

let countEdit = '';

cardForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const {
      action, name, photo, description,
    } = event.target;

    const response = await fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        photo: photo.value,
        description: description.value,
      }),
    });

    const data = await response.text();

    if (data === 'ошибка при добавлении в БД') {
      errorDiv.innerHTML = '<h3> Ошибка при добавлении в БД! </h3>';
    } else if (data === 'сервер Ошибка при добавлении') {
      errorDiv.innerHTML = '<h3> сервер Ошибка при добавлении! </h3>';
    } else {
      errorDiv.innerHTML = '';
      listAnimals.innerHTML = data;
    }
  } catch (error) {
    console.log(error);
    errorDiv.innerHTML = '<h2> клиент Ошибка при добавлении! </h2>';
  }
});

listAnimals.addEventListener('click', async (event) => {
  const { del, edit } = event.target.dataset;
  countEdit = edit;
  if (del) {
    try {
      const response = await fetch(`/admin/animals/${del}`, {
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
        listAnimals.innerHTML = data;
      }
    } catch (error) {
      console.log(error);
      errorDiv.innerHTML = '<h2> клиент Ошибка при удаление! </h2>';
    }
  } else if (countEdit) {
    editForm.addEventListener('submit', async (events) => {
      events.preventDefault();
      try {
        const { name, photo, description } = events.target;

        const response = await fetch(`/admin/animals/${countEdit}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            countEdit,
            name: name.value,
            photo: photo.value,
            description: description.value,
          }),
        });

        const data = await response.text();

        if (data === 'ошибка при изменении') {
          errorDiv.innerHTML = '<h3> сервер не Ошибка при изменении! </h3>';
        } else {
          errorDiv.innerHTML = '';
          listAnimals.innerHTML = data;
          name.value = '';
          photo.value = '';
          description.value = '';
        }
      } catch (error) {
        console.log(error);
        errorDiv.innerHTML = '<h2> клиент Ошибка при изменении! </h2>';
      }
    });
  }
});
