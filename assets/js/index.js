const navigation = document.querySelector('.navigation');
const header = document.querySelector('.toolbar');
const navItemsDesktop = document.querySelectorAll('.nav-item-desktop');
const navItemsMobile = document.querySelectorAll('.nav-item-mobile');
const popupcontainer = document.querySelector('.popcontainer');
// console.log(popupcontainer);
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
};

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
};

const setActive = (nav, target = null) => {
  nav.forEach((element) => {
    if (element.getAttribute('href') === target) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
};

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('sticky')) {
      header.classList.add('sticky');
    }
  } else {
    header.classList.remove('sticky');
  }
  switch (true) {
    case window.scrollY >= 879.75 && window.scrollY < 2406.75:
      setActive(navItemsDesktop, '#portofolio');
      break;
    case window.scrollY >= 2406.75 && window.scrollY < 3257.5:
      setActive(navItemsDesktop, '#about');
      break;
    case window.scrollY >= 3257.5:
      setActive(navItemsDesktop, '#contact-form');
      break;
    default:
      setActive(navItemsDesktop);
      break;
  }
  switch (true) {
    case window.scrollY >= 1017.5 && window.scrollY < 4856.75:
      setActive(navItemsMobile, '#portofolio');
      break;
    case window.scrollY >= 4856.75 && window.scrollY < 6780.5:
      setActive(navItemsMobile, '#about');
      break;
    case window.scrollY >= 6780.5:
      setActive(navItemsMobile, '#contact');
      break;
    default:
      setActive(navItemsMobile);
      break;
  }
});

document.querySelector('.open').addEventListener('click', expandMenu);
const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));

const projects = [
  {
    id: 'popup1',
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '1.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '4.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '5.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    languages: ['Codekit', 'GitHub', 'JavaScript'],
    image: '6.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo adipisci odio maxime, officia odit distinctio? Voluptas impedit dignissimos nemo sapiente facilis cupiditate! Facere dolorum, explicabo quo eligendi eaque non?',
    livelink: '#',
    repository: '#',
  },
];
(() => {
  projects.forEach((project, index) => {
    let language = '';
    project.languages.forEach((lang) => {
      language += `<li>${lang}</li>`;
    });
    document.querySelector('#achievementlist').innerHTML += `
    <li class="card">
      <div class="project-image-card">
        <img class="projectimages" src="assets/images/${project.image}" alt="${project.name}" />
      </div>
      <div class="project-description">
        <h3>${project.name}</h3>
        <ul class="languages">${language}</ul>
        <div class="project-button-wrapper">
          <button type="button" id="${index}" class="success-button opne-modal">See Project</button>
        </div>
      </div>
    </li>
    `;
  });
  if (localStorage.getItem('userdata') !== null) {
    const data = JSON.parse(localStorage.getItem('userdata'));
    document.querySelector('[name="firstname"]').value = data.firstname;
    document.querySelector('[name="lastname"]').value = data.lastname;
    document.querySelector('[name="_replyto"]').value = data.email;
    document.querySelector('[name="fullname"]').value = data.fullname;
    document.querySelector('[name="message"]').value = data.messge;
  }
})();
const buttons = document.querySelectorAll('.success-button');

console.log(buttons[0]);

projects.forEach((project, index) => {
  // console.log(index);
  buttons.forEach((button) => {
    //  console.log(button.id);
    button.addEventListener('click', () => {
      if (index == button.id) {
        // const popupCard = createPopup(project);
        // popupContainer.appendChild(popupCard);
        console.log('test');
        console.log(button.id);
      }
    });
  });
});

const openPopup = (element) => {
  // document.querySelector('#modal-title').textContent = projects[element.getAttribute('data-index')].name;
  // document.querySelector('#project-banner').setAttribute('src', `assets/images/${projects[element.getAttribute('data-index')].image}`);

  let language = '';
  projects[element.getAttribute('id')].languages.forEach((lang) => {
    language += `<li>${lang}</li>`;
  }
  );

  document.querySelector('#laguages-modal').innerHTML = language;

  document.querySelectorAll('.livelink').forEach((alink) => alink.setAttribute('href', projects[element.getAttribute('id')].livelink));
  document.querySelectorAll('.repolink').forEach((alink) => alink.setAttribute('href', projects[element.getAttribute('id')].repository));

  document.querySelector('#descriptionmodal').textContent = projects[element.getAttribute('id')].description;

  document.querySelector('#project-modal').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.modal').classList.remove('project-modal-up');
    document.querySelector('.modal').classList.add('project-modal-down');
  }, 500);
};

document.querySelector('#modal-close').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('project-modal-down');
  document.querySelector('.modal').classList.add('project-modal-up');
  setTimeout(() => {
    document.querySelector('#project-modal').style.display = 'none';
  }, 600);
});

document.querySelectorAll('.opne-modal').forEach((element) => {
  element.addEventListener('click', () => openPopup(element));
});
// Form Validation
const validateForm = (formItem) => {
  let isInvalid = 0;
  const regex = /\S+@\S+\.\S+/;
  switch (true) {
    case formItem.getAttribute('type') === 'email':
      if (!regex.test(formItem.value)) {
        formItem.nextElementSibling.innerHTML += 'The email is invalid <br>';
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace('The email is invalid <br>, ', '');
      }
      if (formItem.value !== formItem.value.toLowerCase()) {
        formItem.nextElementSibling.innerHTML += 'The email shoud be in lowercase';
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace('The email shoud be in lowercase', '');
      }
      break;
    case formItem.getAttribute('type') === 'text':
      if (formItem.value.length > formItem.getAttribute('maxlength')) {
        formItem.nextElementSibling.innerHTML += `The maximum number of character is ${formItem.getAttribute('maxlength')} <br>`;
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace(`The maximum number of character is ${formItem.getAttribute('maxlength')} <br>`, '');
      }
      if (formItem.value.length < formItem.getAttribute('minlength')) {
        formItem.nextElementSibling.innerHTML += `The minimum number of character is ${formItem.getAttribute('minlength')}`;
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace(`The minimum number of character is ${formItem.getAttribute('maxlength')}`, '');
      }
      break;
    default:
      break;
  }
  if (isInvalid > 0) {
    formItem.nextElementSibling.style.display = 'block';
  }

  return isInvalid;
};

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  let invalid = 0;
  for (let i = 0; i < e.target.length; i += 1) {
    if (!e.target[i].hasAttribute('disabled')) {
      if (e.target[i].classList.contains('form-control')) {
        if (e.target[i].value === '') {
          invalid += 1;
          e.target[i].nextElementSibling.innerHTML = `Pease enter your ${e.target[i].getAttribute('placeholder')}<br>`;
          e.target[i].nextElementSibling.style.display = 'block';
        } else {
          e.target[i].nextElementSibling.textContent = '';
        }
      }
      invalid += validateForm(e.target[i]);
    }
  }
  if (invalid > 0) {
    e.preventDefault();
  } else {
    localStorage.clear();
    const userInfo = {
      firstname: document.querySelector('[name="firstname"]').value,
      lastname: document.querySelector('[name="lastname"]').value,
      email: document.querySelector('[name="_replyto"]').value,
      fullname: document.querySelector('[name="fullname"]').value,
      messge: document.querySelector('[name="message"]').value,
    };
    localStorage.setItem('userdata', JSON.stringify(userInfo));
  }
});

document.querySelectorAll('.form-control').forEach((element) => element.addEventListener('focus', () => {
  element.nextElementSibling.style.display = 'none';
}));

window.addEventListener('resize', () => {
  if (window.screen.width < 992) {
    document.querySelector('[name="firstname"]').disabled = true;
    document.querySelector('[name="lastname"]').disabled = true;
    document.querySelector('[name="fullname"]').disabled = false;
  } else {
    document.querySelector('[name="firstname"]').disabled = false;
    document.querySelector('[name="lastname"]').disabled = false;
    document.querySelector('[name="fullname"]').disabled = true;
  }
});