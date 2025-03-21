console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=>{

    image() 
    document.querySelector('#breed-dropdown').addEventListener('change', dogBreed);

})


//functions

function image(){

   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then((res => res.json()))
.then((data => {  

    const display  = document.querySelector('#dog-image-container')
    display.innerHTML = ''//clear any img embedded in the display
    data.message.forEach(img => {
        //incrementing the inner html per loop displayed
        // display.innerHTML += `
        //     <img src = "${img}">
        // `

        //creating and appending per loop fot the display

        const image = document.createElement('img');
        image.src = `${img}`
        image.alt = 'Image Error';
        image.style.width  = '200px'
        image.style.height  = '200px'
        
         display.appendChild(image)

    })
}))
.catch((error => error.message))

}

function dogBreed(){

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then((res=> res.json()))
    .then((data => {
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = '';
        const filter = document.querySelector('#breed-dropdown').value.trim()
        const filtered = Object.keys(data.message).filter(breeds => breeds.startsWith(filter))
        
        filtered.forEach(breed => {
            const li = document.createElement('li')
            li.innerHTML = `
                <a href='#'  id="link" style = "text-Decoration: none; color: black">${breed}</a>
            `
            ul.appendChild(li)
            })

        const a = document.querySelectorAll('#link')
        a.forEach(link =>{
            link.addEventListener('click', (e)=>{
                e.preventDefault();
                link.style.color = 'blue'
            })
        })
       
    }))
    .catch((error => console.log('Error fetching dog breeds')))
}





