let menu=document.getElementById('menu')
let st=true

menu.addEventListener('click',()=>{
    let link=document.querySelector('.header .links')
    console.log('click')
    if (st === false) {
        link.style.display = "none"
        st=true
    }else{
        link.style.display = "flex"
        st=false
    }
})

export default menu