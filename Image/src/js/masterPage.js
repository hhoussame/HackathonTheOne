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

function fetchInterests(userId) {
	var interests = [];
	var user = users.listUsers[userId];
	for (i; i<user.interestList.length; i++) {
		interests.push(user.interestsList[i]);
	}
	return interests;
}

function displayImgRow() {
	var browserWidth = getWidth();
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

function createImage(src) {
	var imgHeight = "";
	var imgWidth = "";
	var css = "";
	var imgHtml="<li>" +
					"<a>" +
						"<img src='" + src +
					"</a>" +
				"</li>";
	return imgHtml;
}

function fetchImgDetails(imgId) {
	
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