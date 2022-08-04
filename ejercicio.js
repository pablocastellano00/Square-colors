let container = document.getElementById('container')
let cuadraditos = 500
let colores = ['#33FF33','#B8E803', '#0337E8', '#E503E8', '#E81403', '#10D7EF', '#E5EF10', '#8A00F6', '#E8460E']
let coloraleatorio = colores[Math.floor(Math.random) * colores.length]
let square = document.getElementsByClassName('square')


for (let i = 0; i < cuadraditos; i++){
    let square = document.createElement('div')
    square.classList.add('square')
    
    container.appendChild(square)    
    square.onmouseover=function(){
        square.style.background = colores[Math.floor(Math.random()*colores.length)]
        square.style.transition = '0s'
    }
    square.onmouseleave=function(){
        square.style.background = '#1d1d1d'
        square.style.transition = '1500ms ease'
    }
}
















// Así se agregan elementos al html