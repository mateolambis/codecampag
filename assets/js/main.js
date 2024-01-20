/*mixitup filter*/
let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.project__item',
  },
  animation: {
    duration: 300,
  },
});

/*active work*/
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
  linkWork.forEach((a) => a.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*equipo swiper*/
var testiSwiper = new Swiper(".testimonial__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*contact form*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the fields have values
  if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
    // Add and remove classes for styling
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // Show error message
    contactMessage.textContent = 'Por favor complete todos los campos de entrada.';
  } else {
    // Service ID - Template ID - Form ID - User ID
    emailjs.sendForm('service_cvkohy1', 'template_6zidn2l', '#contact-form', 'r3i9NFiM7ibb12AxC')
      .then(() => {
        // Show success message, add color, display checkmark emoji
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Mensaje Enviado ✔️';

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      })
      .catch((error) => {
        alert('¡Ups! Algo salió mal...', error);
      }
      );

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);