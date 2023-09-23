function carousel(selector, imgList) {
    let carouselDiv = document.querySelector(selector)

    function createCarouselHtml(imgList) {
        let imgContainer = document.createElement('div')
        imgContainer.className = 'img-container'
        imgList.forEach(function(item, i) {
            imgContainer.innerHTML += `
                <img style="background-image: url('${item.imgUrl}');" class="picture">                
            `
        })
        carouselDiv.appendChild(imgContainer)
        let imgs = document.querySelectorAll(selector + ' .img-container .picture')
        imgs[0].classList.add('active')
    }
    createCarouselHtml(imgList)
    let carouselImgs = document.querySelectorAll(selector + ' .img-container .picture')
    let carouselNum = 0

    function renderNumImg() {
        carouselImgs.forEach(function(item, i) {
            item.classList.remove('active')
        })
        carouselImgs[carouselNum].classList.add('active')
    }

    setInterval(() => {
        carouselNum++
        if (carouselNum >= carouselImgs.length) {
            carouselNum = 0
        }
        renderNumImg()
    }, 4000);
}