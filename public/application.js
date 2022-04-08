document.addEventListener('DOMContentLoaded', async () => {
  const html = await fetch('/tariff/getTariffs');
  const data = await html.text();
  const dropdownList = document.querySelector('#dropdown_id');
  dropdownList.innerHTML = data;
});

const footerAdmin = document.getElementById('authAdminForm');

footerAdmin.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, login, password } = event.target;
  console.log('LOGIN ', login.value);
  console.log('PASS ', password.value);
  const response = await fetch('/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  });
  const text = await response.text();
  if (text !== 'error') {
    console.log('VSE GOOD');
    window.location.assign('/');
  } else {
    const errDiv = document.getElementById('authError-div');
    errDiv.innerHTML = '<p style="color:red">Отказано в доступе!</p>';
  }
});
