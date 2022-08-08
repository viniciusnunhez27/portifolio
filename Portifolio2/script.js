const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabPane = document.querySelectorAll ('.js-tab-pane');


navTabs.forEach((nav,index) =>{
  nav.addEventListener('click', (e)=>{
    e.preventDefault();
   nav.classList.add('active');

  navTabs.forEach(itemNav => {
    itemNav.classList.remove('active');
  })

  tabPane.forEach(tab => {
    tab.classList.remove('active')
  })

  nav.classList.add('active');

 tabPane[index].classList.add('active');
  })  
})