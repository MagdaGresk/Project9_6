
var list = document.getElementById('list'),
	add = document.getElementById('addElem')

add.addEventListener('click', function() {
	var element = document.createElement('li'),
		items = document.getElementsByTagName('li').length

	element.innerHTML = 'item ' + items
	list.appendChild(element)

	console.log(element)
});

console.log(list)
console.log(add)