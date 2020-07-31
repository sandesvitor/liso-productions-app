function setup(section){
    console.log('Preloading %s', section)
    switch(section){
        case "start":
            
            let videoBtn = document.querySelector('[block=video]')
            let artBtn = document.querySelector('[block=art]')
            videoBtn.addEventListener('click', () => {
                load("video")
            })
            artBtn.addEventListener('click', () => {
                load("art")
            })
            AOS.init()
            break
        case "video":
            videoSlider()
            let prevBtnVideo = document.querySelector('.img-prev')
            prevBtnVideo.addEventListener('click', () => {
                load('start')
            })
            break
        case "art":
            loadImagesList()
            let prevBtnArt = document.querySelector('.img-prev')
            prevBtnArt.addEventListener('click', () => {
                load('start')
            })
            break
        default:
            console.log('Caso default!')           
    }
}

function load(section){
    const mainSection = document.querySelector('section')
    const url = `./htmlComponents/${section}.html`

    fetch(url)
        .then(res => res.text())
        .then(html => {
            mainSection.innerHTML = html
            setup(section)
        })
}


function videoSlider(){
    const ul = document.querySelector('.navigation')
    const url = 'dados/videosInfo.json'
    
    fetch(url)
        .then(resp => resp.json())
        .then(videos => {

            document.querySelector('#slider').src = videos[0].src
            videos.forEach(video => {
                let li = document.createElement('li')
                let img = document.createElement('img')
                img.src = video.thumbnail

                li.appendChild(img)
                ul.appendChild(li)

                li.onclick = src => {
                    document.querySelector('#slider').src = video.src
                }           
            })
        })
}
function loadImagesList() {
    const url = "./dados/imgsInfo.json"
    const ul = document.querySelector('.art-gallery .navigation')
    fetch(url)
        .then(resp => resp.json())
        .then(imgJSON => {
            imgJSON.forEach(img => {
                let imageElement = document.createElement('img')
                imageElement.src = img.src
                imageElement.alt = img.imgTitle

                let link = document.createElement('a')
                link.href = img.src
                link.setAttribute('data-lightbox', 'mygallery')
                link.setAttribute('data-title', img.imgTitle)

                let li = document.createElement('li')

                link.appendChild(imageElement)
                li.appendChild(link)
                ul.appendChild(li)
            })
        })
    
        
}
function loadImagesInSection() {
    const url = "./dados/imgsInfo.json"
    const frame = document.querySelector('.art-gallery')
    fetch(url)
        .then(resp => resp.json())
        .then(imgJSON => {
            imgJSON.forEach(img => {
                let imageElement = document.createElement('img')
                imageElement.src = img.src
                imageElement.alt = img.imgTitle

                let link = document.createElement('a')
                link.href = img.src
                link.setAttribute('data-lightbox', 'mygallery')
                link.setAttribute('data-title', img.imgTitle)

                link.appendChild(imageElement)
                frame.appendChild(link)
            })
        })
    
        
}

const navState = { controller: "start" } 

window.addEventListener('load', () => {
    load(navState.controller)
})
