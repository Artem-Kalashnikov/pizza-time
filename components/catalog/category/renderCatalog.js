
const categoriesWrapper = document.querySelector('.catalog__section-wrapper');

async function getCategories() {
    const responseCat = await fetch('./data/categories.json');
    const categoriesArray = await responseCat.json();
    renderCategories(categoriesArray);
}

getCategories();

function renderCategories(array) {
    //clear old categories
    categoriesWrapper.innerHTML = '';
    //if Desktop
    let currentCategory = document.querySelector('.catalog__navigation-category-list-item.active');
    let currentCategoryId = currentCategory.getAttribute('data-id-category');
    //if Mobile
    let currentCategoryMobile = document.querySelector('.catalog__navigation-category-select-list-item.active');
    //let currentCategoryMobileId = currentCategoryMobile.getAttribute('data-id-category');
    array.forEach(function(cItem){
      if(cItem.categoryId === parseInt(currentCategoryId) /*|| cItem.categoryId === parseInt(currentCategoryMobileId)*/ ) {
        const categoryItemHTML = `
        <div class="catalog__section" data-category="${cItem.categoryId}">
          <div class="catalog__section-title">${cItem.categoryName}</div>
          <div class="catalog__section-products">
            <div class="row catalog__section-products-wrapper">
              <!-- Вывод товаров из json файла -->
            </div>
          </div>
        </div>`;
        categoriesWrapper.insertAdjacentHTML('beforeend', categoryItemHTML);
        renderProducts(cItem.products,cItem.categoryId);
      }
      //if category is empty
      
    });
}

function renderProducts(array, index) {
  const productsWrapper = document.querySelector(`[data-category='${index}'] .catalog__section-products-wrapper`);
    array.forEach(function(pItem) {
        const productItemHTML = `<div class="col-md-4">
        <div class="catalog__section-products-item" data-product-id="${pItem.productId}">
          <div class="catalog__section-products-item-image">
            <img src="${pItem.imageSrc}">
          </div>
          <div class="catalog__section-products-item-name">${pItem.productName}</div>
          <div class="catalog__section-products-item-type">
            <div class="catalog__section-products-item-type-dough">
              <div class="catalog__section-products-item-type-dough-item active">${pItem.dough.small}</div>
              <div class="catalog__section-products-item-type-dough-item">${pItem.dough.trad}</div>
            </div>
            <div class="catalog__section-products-item-type-size">
              <div class="catalog__section-products-item-type-size-item active">${pItem.size.sm}</div>
              <div class="catalog__section-products-item-type-size-item">${pItem.size.md}</div>
              <div class="catalog__section-products-item-type-size-item">${pItem.size.xs}</div>
            </div>
          </div>
          <div class="catalog__section-products-item-footer">
            <div class="catalog__section-products-item-footer-price">от ${pItem.price}</div>
            <button class="catalog__section-products-item-footer-add-basket">Добавить</button>
          </div>
        </div>
      </div>`;
      productsWrapper.insertAdjacentHTML("beforeend", productItemHTML);
    });
    toggleOptions();
}