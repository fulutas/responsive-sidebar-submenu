// Show Navbar
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // #navbar show-menu class add 
            nav.classList.toggle('show-menu')
            
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}

showMenu('header-toggle','navbar')

// Nav Link active
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))