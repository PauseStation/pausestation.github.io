const navItems = document.querySelectorAll('nav .item');

document.querySelector('#center').addEventListener('click',function(){
	for(let i=0;i<navItems.length;i++){
		navItems[i].classList.toggle('opened')
	}
	document.querySelector('#center').classList.toggle('close')
})