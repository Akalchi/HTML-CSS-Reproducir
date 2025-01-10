const fruits = [...document.querySelectorAll(".fruit")]

fruits.map(fruit => {
    const fruitEmoji = fruit.innerHTML;
    fruit.addEventListener("click", (e) => {
        if(fruit.innerHTML)
            fruit.innerHTML = ""
        else fruit.innerHTML = fruitEmoji;
    })
})