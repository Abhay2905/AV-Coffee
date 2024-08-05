let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

const menu2 = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 200,
      img: "./image/item-1.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia. `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 139,
      img: "./image/item-2.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 699,
      img: "./image/item-3.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 299,
      img: "./image/item-4.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia. `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 299,
      img: "./image/item-5.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia. `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 199,
      img: "./image/item-6.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 899,
      img: "./image/item-7.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia. `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 199,
      img: "./image/item-8.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia. `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 199,
      img: "./image/item-9.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
            laboriosam excepturi! Quo, officia.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 299,
      img: "./image/item-10.jpeg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
          x  laboriosam excepturi! Quo, officia.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu2);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">₹${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu2.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories.map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu2.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu2);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
