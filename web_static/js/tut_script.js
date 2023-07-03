const nav = document.querySelector('.nav');
searchIcon = document.querySelector('#searchIcon'),
navOpenBtn = document.querySelector('.navOpenBtn'),
navCloseBtn = document.querySelector('.navCloseBtn');

searchIcon.addEventListener('click', () => {
    nav.classList.toggle('openSearch');
    if(nav.classList.contains('openSearch')){
    return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener('click', () => {
    nav.classList.add('openNav');
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove('openNav');
});