function creatImageLike(i) {
	var image = getImageById(i);
	var imageSrc = image.src;
	var numberLikers = image.likes.numberLikes;
	return "<div style=\"width: 50%;margin-left:25% ;margin-top:1%;height: 50px;background-color: blue;border-style: solid;border-bottom-style:none ;border-color: red;\">"
//	-moz-border-radius: 100px / 160px; -webkit-border-radius: 100px / 160px; border-radius: 100px / 160px;
	+"<table border=\"0\"width=\" 100%\"; height=\"100%\">"
	+"<tr>"
	+"<td width = \"45%\">"
	+"<img style=\"height:40px; position:relative  \" src=\""+imageSrc+"\">"
	+"</td>"
	+"<td width = \"5%\">"
	+"<img style=\"height:75%;  position:relative\" src=\"img/like.png\">"
	+"</td>"
	+"<td width = \"45%\">"
	+"<input type=\"text\" value=\""+ numberLikers +"\" style=\"border:none;background-color:transparent; height:75%;\">"
	+"</td>"
	+"<td width = \"5%\">"
	+"<button onclick= \"{expandImageLike("+i+")}\" style=\" height:30px; position:relative; background-image:url('./img/minusicone.png')\" >"
	+"</button>"

	+"</td>"

	+"</tr>"
	+"</table>" 
	+"</div>";
}

function createImageLikexpanded(i){
	var image = getImageById(i);
	var owner = getUserById(image.ownerId);
	
	return "<div id=\"profile-div"+i+"\" style=\"width: 50%;margin-left:25% ;height: 0px;border-style: solid ;border-color: red; border-bottom-style: solid;border-top-style:none;transition:width 2s;-moz-transition:height 2s; /* Firefox 4 */;-webkit-transition:height 2s; /* Safari and Chrome */;-o-transition:height 2s; /* Opera */\">"
	+"<div style=\"height : 10%; border: medium;border-style: none;border-bottom-color: red;\" >"

	+"<img  style=\"position: relative;height : 90%;left: 0.5%;top: 5%\" src=\""+owner.portrait+"\">"
+"<input type=\"text\" value=\""+owner.name +"\" style=\"border:none;background-color:transparent; position: relative;height:75%;width:50%; left: 0%;bottom: 25%\">"
        				
+"</div>"
+"<div style=\"height : 50%; border: medium;border-bottom-style: none;border-bottom-color: red;\" >"

+"<img  style=\"position: relative;height:75%;width:50%; left: 25%;top: 20%\" src=\""+ image.src+"\">"
+"</div>"
+"<div style=\"height : 40%; border: medium;border-bottom-style: none;border-bottom-color: red;\" >"
+"<input type=\"text\" value=\"Story\" style=\"border:none;background-color:transparent;color: #888; position: relative;height:15%;width:50%; left: 2%;top: 2%\">"
+"<br>"
+"<div  style=\"border:none;-moz-appearance:none;position: relative; overflow: auto;height:75%;width:50%; left: 25%;top: 20%;width:50%;background-repeat: no-repeat; background-size:100%;background-image:url('./img/cadre_4.png')\">"
+"<textarea rows=\"5\" cols=\"50\" style=\"border:none;-moz-appearance:none;position: relative;background: transparent; overflow: auto;height:75%;width:50%; left: 25%;top: 20%\"> "
+image.story
   +"</textarea> "
   +"</div>"   
+"</div>";
}

function expandImageLike(i) {
	var div2 = document.getElementById('profile-div' + i);
	if(div2.style.height=="0px"){
	div2.style.height="400px";
	// div2.style.border ="solid";
	}else{
		div2.style.height="0px";
		// div2.style.border ="none";
	}

}
