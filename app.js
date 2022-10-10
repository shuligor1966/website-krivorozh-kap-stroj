/* Создаем ПЛАГИН с КАРТОЧКАМИ (flex box) для файла photo.html  */
const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    
    
    slide.classList.add('active')

  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')

  })
}



















