class apperElement {
    
    constructor(element, elementAnimation)
    {
        this.element =  element;
        this.elementAnimation = elementAnimation;
    }

    display(){
        
        let element = document.querySelector(`${this.element}`);
        var positionElement = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;
        if(positionElement < windowHeight){
            element.classList.add(this.elementAnimation);
    
        }
    }

}


class apperElements {
    
    constructor(element, elementAnimation)
    {
        this.element =  element;
        this.elementAnimation = elementAnimation;
    }

    display(){
        
        let elements = document.querySelectorAll(`${this.element}`);
        elements.forEach(element => {
            var positionElement = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight / 1.1;
            if(positionElement < windowHeight){
                element.classList.add(this.elementAnimation);

        }
        });  

    }
}


const a = new apperElement(".oferty", "oferty-animation");
a.display();
window.addEventListener('scroll',()=>{a.display()});
let b = new apperElement(".oNas", "oNas-animation");
window.addEventListener('scroll',()=>{b.display()});
let c = new apperElements(".foto", "fotoAnimation");
window.addEventListener('scroll',()=>{c.display()});