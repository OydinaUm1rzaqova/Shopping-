const categoryList = document.querySelector('.category-div ul')
const brandList = document.querySelector('.brand-div ul')

const btnCat = document.querySelector('.btn-category')
const btnBrand = document.querySelector('.btn-brand')

const catIcon = document.querySelector('.btn-category i')
const brandIcon = document.querySelector('.btn-brand i')

const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.btn-search');

const productsContainer = document.querySelector('.products-container');

function replaceIcon(icon) {
    let iconClassText = icon.getAttribute('class');
    (iconClassText.includes('down')) 
    ? icon.setAttribute('class', iconClassText.replace('down', 'up'))
    : icon.setAttribute('class', iconClassText.replace('up', 'down'));
}
btnCat.addEventListener('click', () => {
    replaceIcon(catIcon)
    categoryList.classList.toggle('active');
    brandList.classList.remove('active');
    brandIcon.setAttribute('class', "fa-solid fa-angle-down");
})


btnBrand.addEventListener('click', () => {
    replaceIcon(brandIcon)
    brandList.classList.toggle('active');
    categoryList.classList.remove('active');
    catIcon.setAttribute('class', "fa-solid fa-angle-down");
})



// search filter


searchBtn.addEventListener('click', () => {
    const filterData = productsData.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.value.toLowerCase())
    })

    createProducts(filterData);
})


// searchInput.addEventListener('input', () => {
//     const filterData = productsData.filter((item) => {
//         return item.title.toLowerCase().includes(searchInput.value.toLowerCase())
//     })

//     createProducts(filterData);
// })


// category filter

const categories = []
productsData.forEach((item) => {
    if (!categories.includes(item.category)) {
        categories.push(item.category)
    }
})

categories.forEach((cat) => {
    let li = document.createElement('li')
    li.innerHTML = cat;

    categoryList.appendChild(li);

    li.addEventListener('click', () => {
        const filterData = productsData.filter((item) => {
            return item.category === cat;
        });
        // categoryList.classList.remove('active');

        categoryList.classList.remove('active');
        catIcon.setAttribute('class', 'fa-solid fa-angle-down')

        createProducts(filterData);
    })
})


// brand filter
const brands = []
productsData.forEach((item) => {
    if (!brands.includes(item.brand)) {
        brands.push(item.brand)
    }
})

// console.log(brands);

brands.forEach((brand) => {
    let li = document.createElement('li')
    li.innerHTML = brand;

    brandList.appendChild(li)

    li.addEventListener('click', () => {
        const filterData = productsData.filter((item) => {
            return item.brand === brand;
        });
        // brandList.classList.remove('active');


        brandList.classList.remove('active');
        brandIcon.setAttribute('class', 'fa-solid fa-angle-down');

        createProducts(filterData);
    })
})

// create product

function createProducts (data) {
productsContainer.innerHTML = '';

data.forEach((item) => {
    let productDiv = document.createElement('div');

    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <div class="img">
             <img src='${item.images[0]}' alt='${item.title}'>
        </div>
    <h3 class="product-title">Nomi: ${item.title}</h3>
    <p class="product-brand">Brand: ${item.brand}</p>
    <p class="product-price">Narxi: $${item.price}</p>
    <button class="addBtn">Add to Cart</button>
    `;

    productsContainer.appendChild(productDiv);
});
}
createProducts(productsData);