let ul = document.querySelector("ul");

fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(result => {
    getCharacters(result)
  })
	.catch(err => console.error(err));


    function getCharacters(result){
        for (let i=0; i<20; i++){
        let li = document.createElement("li")
        li.setAttribute("class", "photo-display")
        li.setAttribute("value", i + 1)
        li.setAttribute("style", "width: 150px;")
        let img = document.createElement("img")
        let p = document.createElement("p")
        p.innerHTML = result.results[i].name
        ul.append(li)
        li.append(img)
        li.append(p)
        img.setAttribute("src", result.results[i].image)
        img.setAttribute("class", "photo-img")
        }
    }

    ul.addEventListener("click",(event)=>{
        fetch(`https://rickandmortyapi.com/api/character/${event.target.value}`)
        document.querySelector("main").style.display = "flex"
       
    })
