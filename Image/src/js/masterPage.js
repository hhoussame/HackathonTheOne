//user scenario

// user logs in: 

// 	if for the first time ---> store the user information and find a way to
// create a relationship between the user's facebook account and the id given to him.

// 	if the user already used the website (but is not connected to the webite)
// use the connection created between the facebook account and the id stored in database

//once the user's interests are known (either freshly stored or deduced from the
// information previously stored about the user), fetch the apropriate images
// using fetchInterestImgs(), this function returns a list of images ids that
// corresponds to an interest of the users interests.
//once all the interests are skimmed, we should have a list of all the images
// corresponding to all of the interests of the user.
//after that we need to show the collected images by using the drawing functions.

//the following 3 functions concern users interests and related images
function fetchInterests(userId) {
	var interests = [];
	var user = users.listUsers[userId];
	for (i; i<user.interestList.length; i++) {
		interests.push(user.interestsList[i]);
	}
	return interests;
}

function fetchInterestImgs(inter) {
	var imgIdList = [];
	var allImgs = Images.listImages;
	for (var i=0; i<allImgs.length; i++) {
		var interests = allImgs[i].interestsList;
		for (var j=0; j<interests.length; j++) {
			if (interests[j] == inter) { //maybe a switch here is better
				imgList.push(allImgs[i].id);
			} else {
				//something to learn and 
				//not to go through this image for the same interest again.
			}
		}
	}
	return imgIdList;
}

function fetchImgDetails(imgId) {
	var img = Images.listImages[imgId];
	var id = img.id;
	var src = img.src;
	var story = img.story;
	var title = img.title;
	var ownerId = img.ownerId;
	var likes = img.likes;
	var comments = img.comments;
	var interestsList = img.interestsList;
	var imgDetList = [id,src,story,title,ownerId,likes,comments,interestsList];
	return imgDetList;
}
// end first section functions

//the following 2 function concern the nbr of images per row to display
function DecideNbrImgsPerRow() {
	var browsWidth = getWidth();
	var canvas = (80 / 100) * browsWidth;
	var imgWidth = 200;
	if (canvas < 500) {
		return 3;
	} else {
		return Math.floor(canvas / imgWidth);
	}
}

function getWidth() {
    if (self.innerWidth) {
       return self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight){
        return document.documentElement.clientWidth;
    }
    else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}
// end 2 functions

//the following 2 functions concern the html canvas for an image and a row 
function createImgsForRow(src) {
//	var imgHeight = "";
//	var imgWidth = "";
	
	var css = "";
	var imgsHtml = "";
	for (var i=0; i<src.length; i++) {
		imgsHtml +="<li style:'" + css + "'>" +
						"<a>" +
							"<img src='" + src[i] +
						"</a>" +
					"</li>";
	}
	
	return imgsHtml;
}

function createRow(imgsHtml) {
	var css = "";
	var rowHtml = "<ul style='" + css + "'>" +
					imgsHtml +
					"</ul>";
	return rowHtml;
				
}
// end 2 functions

// the following function concerns the html of the whole page, might need to be broken down to
// several functions
function createPageHtml(userId) {
	var interests = fetchInterests(userId);
	var imgsId = []; 
	var imgsSrc = [];
	for (var i=0; i<interests.length; i++) {
		imgsId.push(fetchInterestImgs[i]);
		var imgDet = fetchImgDetails(imgsId[i]);
		imgsSrc.push(imgDet[1]);
	}
	var src = [];
	var nbrImgsRow = DecideNbrImgsPerRow();
	var nbrOfRows = 0;
	var imgsHtml = "";
	var rowHtml = "";
	var imgsIdLength = imgsId.length;
	if (imgsIdLength >= nbrImgsRow) {
		var division = imgsSrc.length / nbrImgsRow;
		var integerPart = Math.floor(division);
		nbrOfRows = (division == integerPart) ? division : integerPart + 1;
		for (var l=0;l<nbrOfRows;l++) {
			for (var j=0; j< nbrImgsRow; j++) {
				var imgId = j + (l * nbrImgsRow);
				src.push(imgsSrc[imgId]);
			}
			imgsHtml += createImgsForRow(src);
			rowHtml += createRow(imgsHtml);
		}
	} else {
		for (var j=0; j< imgsIdLength; j++) {
			src.push(imgsSrc[j]);
		}
		imgsHtml += createImgsForRow(src);
		rowHtml += createRow(imgsHtml);
	}
	displayPage(rowHtml);
}

function displayPage(htmlToDiplay){
	var newElt= document.createElement("div");
	newElt.innerHTML= htmlToDiplay;
	document.getElementById("content").appendChild(newElt);
}
