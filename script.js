let saveCh = document.querySelector('.save')
let modal_bg = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal')

saveCh.onclick = () => {
    closeModal()
    console.log('a');
}

modal_bg.onclick = () => {
    closeModal()
}


const closeModal = () => {
    modal.style.display = "none"
    modal.style.opacity = "0"
    modal_bg.style.display = "none"
    modal_bg.style.opacity = "0"
}