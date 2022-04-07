const btnInfo = document.querySelector('#animals');

btnInfo.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id, action, method } = event.target;
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
  // console.log(arrResponse);
  const arrLinks = arrResponse.map((el) => el.link);
  // console.log(arrLinks);
  document.querySelector('.modal-body').innerHTML = `<div class="container" id="mainContainerId">

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img id="imgID" class="d-block w-100" style="width: 200px; height: 400px; object-fit:cover"
          src="${arrLinks[0]}" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="width: 200px; height: 400px; object-fit:cover"
          src="${arrLinks[1]}" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style="width: 200px; height: 400px; object-fit:cover"
          src="${arrLinks[0]}" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`;
});
