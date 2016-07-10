var onloadfunc = window.onload || function() {};
window.onload = function()
{
	onloadfunc();

	document.body.addEventListener('mouseup',removeblock);
}

function hasClass(e,cls){
	return e.className.indexOf(cls) > -1;
}

function removeblock(e){
	var target = e.target;
	if(hasClass(target,'profile')){
		target.remove();
		e.preventDefault();
	}
}