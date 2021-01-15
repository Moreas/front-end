const items = document.querySelectorAll('.sidenav__list-item');

items.forEach(item => {item.addEventListener('click', () => item.classList.toggle("active"))});