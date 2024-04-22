
window.addEventListener('scroll', function() {
    
    // ------------- body navigation bar scrolling effect --------

   // ------------- information: li class is abc this abc li class use to perform this functions
  
    let sections = document.querySelectorAll('section');
    let Links = document.querySelectorAll('.abc a');
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height){
          Links.forEach((linksdata) =>{
              linksdata.classList.remove('active');
              document.querySelector('.abc a[href*=' + id + ']').classList.add('active');
          });
      };  
    });
    // ---- book menu sticking --------
    let sidebar = document.querySelector('.bookmenupages');
    let container = document.querySelector('.bookchapterinformation');
    let containerRect = container.getBoundingClientRect();
    if (containerRect.top <= 0) {
      sidebar.classList.add('fixed');
    } else {
      sidebar.classList.remove('fixed');
    }   
    // ----selective scrolling effect -------- 
    let bookMenuLinks = document.querySelectorAll('.def a');
    let bookmenusection = document.querySelectorAll('span');   
    bookmenusection.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');
        if(top >= offset && top < offset + height){
            bookMenuLinks.forEach((booklinksdata) =>{
                booklinksdata.classList.remove('active');
                document.querySelector('.def a[href*=' + id + ']').classList.add('active');
            });
        };  
    }); 
});
