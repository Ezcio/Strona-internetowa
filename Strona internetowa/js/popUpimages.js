
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


const images = document.querySelectorAll(".foto");

images.forEach(image =>{
    image.addEventListener('click', (e)=>{

        lightbox.classList.add('active');
        const placeImage = document.createElement('div');
        placeImage.className = 'image';
        lightbox.appendChild(placeImage);
        const img = document.createElement('img');
        img.src = e.currentTarget.querySelector('img').src;
        const dupa = document.querySelector('#lightbox .image');
        
        // while (lightbox.childNodes(2)){
        //     lightbox.removeChild(lightbox.childNodes(2))
        // }
        dupa.appendChild(img)
        dupa.classList.add('image-active');
    })
})

lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    lightbox.removeChild(lightbox.lastChild)
})