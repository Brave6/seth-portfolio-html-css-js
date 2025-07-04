function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openModal(imageArray) {
  const modal = document.getElementById('modal');
  const modalImages = document.getElementById('modalImages');

  // Clear old content
  modalImages.innerHTML = '';

  // Add new images
  imageArray.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Project Screenshot";
    modalImages.appendChild(img);
  });

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// Optional: Close when clicking outside modal
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


let currentSlide = 0;
  let totalSlides = document.querySelectorAll('.carousel-slide').length;
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');

  function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) =>
      dot.classList.toggle('active', index === currentSlide)
    );
  }

  function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlide();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlide();
  }

  // Autoplay every 5 seconds
  setInterval(() => {
    moveSlide(1);
  }, 5000);

  // Swipe Support (Touch Events)
  const carousel = document.getElementById('carousel');
  let startX = 0;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50) moveSlide(-1);
    else if (diffX < -50) moveSlide(1);
  });

  // Buttons
  document.querySelector('.prev').onclick = () => moveSlide(-1);
  document.querySelector('.next').onclick = () => moveSlide(1);