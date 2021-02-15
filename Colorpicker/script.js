const colors = ["green" , "red", "blue", "darkorchid", "Black"]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
   const randomNumber = getRandomNumberOfColors()
   document.body.style.backgroundColor = colors[randomNumber]
   color.textContent = colors[randomNumber]
})

function getRandomNumberOfColors(){
    let colorSum = colors.length
    return Math.floor(Math.random()*colorSum)
}