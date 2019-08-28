window.onload = function(){

var input = document.getElementById('user-item');
var button =document.getElementById('add');
var list = document.getElementById('list');
var counter = 1;

//button event listener
button.addEventListener('click', addItem);

	function addItem(){
		if(input.value === ""){
			alert('You must enter to-do item!')
		}else{
		list.innerHTML += `<li><input id="box-${counter}" type="checkbox" class:"checkboxes">${counter} ${input.value}</li>`;
		counter++;
		} //+= sign is for appending new stuff to existing elements
	}
	var checkbox = document.querySelectorAll('.checkboxes');
	for(i = 0; i < checkbox.length; i++){
		checkbox[i].addEventListener('change', boxChecked);
	}
	function boxChecked(element){
		if(element.target.nodeName == 'INPUT'){
			element.target.classList.add("active");
		}
	}

	// function boxChecked(event){
	// 	const element = event.target;
	// 	if (element.type === 'checkbox'){
	// 		element.parentNode.style.textDecoration = 'line-through';
	// 	}
	// }

}
	

	
