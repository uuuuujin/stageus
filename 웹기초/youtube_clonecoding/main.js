const toggleBtn = document.querySelector('.top-bar')
const aside = document.querySelector('.aside')
const navigation = document.querySelector('.navigation')
const content = document.querySelector('.content')

toggleBtn.addEventListener("click", () => {
    navigation.classList.toggle("active");
    aside.classList.toggle("active");
    content.classList.toggle("active");
})

