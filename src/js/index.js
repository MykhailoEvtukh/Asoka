const selectNode = function(element){
    return document.querySelector(element);
    }
    
    const refs = {
        menuToggler : selectNode('.menu-toggle'),
        body : selectNode('body'),
        closeIcon : selectNode('.fa-times')
    }
    
    
    refs.menuToggler.addEventListener('click', function(){
            refs.body.classList.toggle('open');
            refs.closeIcon.classList.toggle('close')
    
    })
    
    // scroll reveal
    
    window.sr = ScrollReveal();
    
    sr.reveal('.animate-left', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });
    
    sr.reveal('.animate-right', {
        origin: 'right',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });
    
    sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });
    
    sr.reveal('.animate-bottom', {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });