const btnInfo = document.querySelector('#animals');
const nameAnimal = document.getElementById('staticBackdropLabel');
const nameDesc = document.getElementById('staticDescription');

btnInfo.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id, action, method } = event.target;

  const animalId = id.replace('animal', '');
  const responseAnimal = await fetch(`animals/getanimal/${animalId}`);
  const resAn = await responseAnimal.json();
  nameAnimal.innerHTML = resAn.name;
  nameDesc.innerHTML = resAn.description;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify({
      id,
    }),
  });
  const arrResponse = await response.json();
  const arrLinks = arrResponse.map((el) => el.link);

  document.querySelector('.modal-body').innerHTML = `<div class="container" id="mainContainerId">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" id="animal_slider">
      <div class="carousel-item active" >
        <img id="imgID" class="d-block w-100" style="width: 200px; height: 400px; object-fit:cover"
          src="${resAn.photo}" alt="Second slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
  </div>`;
  const innerSlider = document.getElementById('animal_slider');
  console.log(innerSlider);
  if (arrLinks.length > 0) {
    for (let i = 0; i < arrLinks.length; i += 1) {
      const slide = document.createElement('div');
      slide.className = 'carousel-item';
      slide.innerHTML = ` 
      <img class="d-block w-100" style="width: 200px; height: 400px; object-fit:cover"
      src="${arrLinks[i]}" alt="First slide">`;
      innerSlider.appendChild(slide);
    }
  }
});
