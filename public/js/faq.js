let toogles = document.getElementsByClassName('toogle')
let content = document.getElementsByClassName('content')
let icons = document.getElementsByClassName('icon')


for(let i = 0; i < toogles.length; i++){
    toogles[i].addEventListener('click', () => {
        if(parseInt(content[i].style.height)
        != content[i].scrollHeight + "px"){
           content[i].style.height = content
           [i].scrollHeight + "px"
           toogles[i].style.color = "#30084e9"
           icons[i].classList.remove('icons')
        }
        else{
            content[i].style.height = "0px"
            toogles[i].style.color = "#111130";
            icons[i].classList.remove('icons')
        }


        for(let j = 0; j < content.length; j++){
            if(j!==i){
                content[j].style.height = "0px";
                toogles[j].style.color = "#111130";
                icons[j].classList.remove('icons')
            }
        }
    })
}