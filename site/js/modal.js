let isModalOpen = false;

function previewClickHandler(id) {
  if (isModalOpen) {
    return;
  }

  toggleModal(id);
}

function toggleModal(id=null) {
  if (id == null) {
    const modals = Array.from(document.getElementsByClassName("modal open"));
    modals.forEach(modal => {
      isModalOpen = modal.classList.toggle('open');
    });
  } else { 
    const modal = document.getElementById(id);
    isModalOpen = modal.classList.toggle('open');
  }

  const mainContainer = document.getElementById('container');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('btn-modal-close');
  const header = document.getElementsByTagName('header')[0];
  const navbar = document.getElementsByTagName('nav')[0];

  document.body.style.overflow = (document.body.style.overflow == 'hidden') ? '' : 'hidden';
  overlay.style.display = (overlay.style.display == 'none') ? '' : 'none';
  mainContainer.classList.toggle('background');
  closeButton.style.visibility = (isModalOpen) ? 'visible' : 'hidden';
  header.classList.toggle('background');
  navbar.classList.toggle('background'); 
}
