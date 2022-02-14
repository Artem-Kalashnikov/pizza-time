
function toggleOptions() {
    const doughItems = document.querySelectorAll('.catalog__section-products-item-type-dough-item');
    for(const doughItem of doughItems) {
        doughItem.addEventListener('click', function(e) {
            let parentActiveItem = e.target.closest('.catalog__section-products-item-type-dough');
            parentActiveItem.classList.remove('active');
            e.target.classList.add('active');
        });
    }
}

