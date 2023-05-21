// const allItems = document.querySelectorAll('.slider-nav span');

// allItems.forEach(item => {
//     item.addEventListener('click', function (e) {
//         // Loop para previas selecciones
//         for (var i = 0; i < allItems.length; i++) {
//             allItems[i].classList.remove('active');
//         }
//         this.classList.add('active');
//     })
// })

// var indexValue = 1;
// showImg(indexValue);
// function btn_slide(e) {
//     showImg(indexValue = e);
// }

// function showImg(e) {
//     var i;
//     const img = document.querySelectorAll('.slider img');
//     const sliders = document.querySelectorAll('.slider-nav span');
//     if (e > img.length) {
//         indexValue = 1;
//     }
//     if (e < 1) {
//         indexValue = img.length;
//     }
//     for (i = 0; i < img.length; i++) {
//         img[i].style.display = "none";
//     }
//     img[indexValue - 1].style.display = "block";
// }