document.addEventListener('DOMContentLoaded', () => {
    const navCategoriesItems = document.querySelectorAll('.catalog__navigation-category-list-item');
    for(const navCategoriesItem of navCategoriesItems) {
        navCategoriesItem.addEventListener('click', function(e) {
            let currentActiveItem = document.querySelector('.catalog__navigation-category-list-item.active');
            currentActiveItem.classList.remove('active');
            this.classList.add('active');
            let currentActiveItemMobile = document.querySelector('.catalog__navigation-category-select-list-item.active');
            currentActiveItemMobile.classList.remove('active');
            //Find a mobile navItem, set actives class
            const navCategoriesItemsMobile = document.querySelectorAll('.catalog__navigation-category-select-list-item');
            let navItemAttr = e.target.getAttribute('data-category-id');
            for(const navCategoriesItemMobile of navCategoriesItemsMobile) {
                let navMobileAttr = navCategoriesItemMobile.getAttribute('data-category-id');
                if(parseInt(navMobileAttr) === parseInt(navItemAttr)) {
                    navCategoriesItemMobile.classList.add('active');
                }
            }
            getCategories();
        });
    }
    let navCategoriesTitleMobile = document.querySelector('.catalog__navigation-category-select-title');
    navCategoriesTitleMobile.addEventListener('click', function(e) {
        this.nextElementSibling.classList.toggle('show');
    });
    const navCategoriesItemsMobile = document.querySelectorAll('.catalog__navigation-category-select-list-item');
    for(const navCategoriesItemMobile of navCategoriesItemsMobile) {
        navCategoriesItemMobile.addEventListener('click', function(e) {
            let currentActiveItem = document.querySelector('.catalog__navigation-category-select-list-item.active');
            currentActiveItem.classList.remove('active');
            navCategoriesTitleMobile.textContent = this.textContent;
            this.classList.add('active');
            this.closest('.catalog__navigation-category-select-list').classList.remove('show');
            getCategories();
        });
    }
});