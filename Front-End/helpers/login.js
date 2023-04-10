const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
const showsidebar=document.querySelector('.hidden-sidebar')
const menubtn=document.querySelector('.menu-icon')
const blanksidebar=document.querySelector('.blank-sidebar')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
menubtn.addEventListener('click', () => {
    showsidebar.classList.remove('hidden')
})
blanksidebar.addEventListener('click', () => {
    showsidebar.classList.add('hidden')
})