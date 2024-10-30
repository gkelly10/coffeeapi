document.querySelector('button').addEventListener('click', getCofee)

function getCofee(){
    const coffeeDrink = document.querySelector('input').value
    const url = `/api/${coffeeDrink}`
    fetch(url)//git request to the suver that uses this url
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#drinkDescrip').innerText = data.coffeeDescription
        document.querySelector('#ingredientDescrip').innerText = data.ingredientDescription
        document.querySelector('#roast').innerText = data.roast
    })
}