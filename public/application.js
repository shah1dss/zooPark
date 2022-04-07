const weekdayBtn = document.getElementById('weekday_id');
const weekendBtn = document.getElementById('weekend_id');

weekdayBtn?.addEventListener('click', async (event) => {
  event.preventDefault();
  const response = await fetch('/tariff/weekday');
  const container = document.getElementById('mainContainerId');
  const txt = await response.text();
  container.innerHTML = txt;
});

weekendBtn.addEventListener('click', async (event) => {
  const response = await fetch('/tariff/weekend');
  const container = document.getElementById('mainContainerId');
  const txt = await response.text();
  container.innerHTML = txt;
});
