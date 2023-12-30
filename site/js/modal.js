let isModalOpen = false;

function toggleModal(id) {
  console.log(id);
  let modal = document.getElementById(id);
  let mainContainer = document.getElementById('container');

  isModalOpen = modal.classList.toggle('open');
  mainContainer.classList.toggle('background');

  // document.body.classList.toggle('body-overlay');
}

function previewClickHandler(id) {
  if (isModalOpen) {
    return;
  }

  toggleModal(id);
}
