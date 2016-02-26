var content = document.getElementById("content-list");

function loadContentDomFromServer(c) {
	var req = new XMLHttpRequest();
	req.onload = function(evt){
		console.log(evt);
		c.innerHTML = this.responseText;
	};

	req.open("get", "/api/content-list");
	req.send();
};

loadContentDomFromServer(content);