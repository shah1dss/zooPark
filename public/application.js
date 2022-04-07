const weekdayBtn = document.getElementById('weekday_id');
const weekendBtn = document.getElementById('weekend_id');

// dropdownForm.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const currentID = event.target.identificator;
//   console.log('ID!!!! ', event.target);
// });
// const list = document.getElementById('dropdown_id')
// list.addEventListener('click', (event)=>{
//   console.log(event.target)
// })
document.addEventListener('DOMContentLoaded', async () => {
  const html = await fetch('/tariff/getTariffs');
  const data = await html.text()

  const dropdownList = document.querySelector('#dropdown_id')
  dropdownList.innerHTML = data;
});
// console.log(weekdayBtn);
// console.log(weekendBtn);
// weekdayBtn?.addEventListener('click', async (event) => {
//   event.preventDefault();
//   console.log('YA TUT');
//   const response = await fetch('/tariff/weekday');
//   const container = document.getElementById('mainContainerId');
//   const txt = await response.text();
//   container.innerHTML = txt;
// });

// weekendBtn.addEventListener('click', async (event) => {
//   console.log('YA TUT');
//   const response = await fetch('/tariff/weekend');
//   const container = document.getElementById('mainContainerId');
//   const txt = await response.text();
//   container.innerHTML = txt;
// });
// dropdownBtn.addEventListener('click', () => {
//   console.log('YA TUT????');
//   const weekdayBtn = document.getElementById('weekday_id');
//   const weekendBtn = document.getElementById('weekend_id');

//   weekdayBtn.addEventListener('click', async (event) => {
//     console.log('YA TUT');
//     const response = await fetch('/tariff/weekday');
//     const container = document.getElementById('mainContainerId');
//     console.log('RESPONSE ', await response.text());
//     container.innerHTML = await response.text();
//   });

//   weekendBtn.addEventListener('click', async (event) => {
//     console.log('YA TUT');
//     const response = await fetch('/tariff/weekend');
//     const container = document.getElementById('mainContainerId');
//     console.log('RESPONSE ', await response.text());
//     container.innerHTML = await response.text();
//   });
// });
