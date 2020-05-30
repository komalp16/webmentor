$("ul").on("click" ,"li", function(){
	$(this).toggleClass("completed");
});



$("ul").on("click" ,"span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

function todoList(){
	var item=document.getElementById("todoInput").value;
	var text=document.createTextNode(item);
	var newItem=document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	document.getElementById("todoInput").value=" ";
	
}