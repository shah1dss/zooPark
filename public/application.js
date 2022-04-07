document.addEventListener('DOMContentLoaded', async () => {
  const html = await fetch('/tariff/getTariffs');
  const data = await html.text();

  const dropdownList = document.querySelector('#dropdown_id');
  dropdownList.innerHTML = data;
});
