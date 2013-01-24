function getImageById(id){
	var notFound = true;
	var index =0;
	var imageFound ={};
	while(notFound){
		if(Images.listImages[index].id == id){
			imageFound =Images.listImages[index];
			notFound = false;
		}
		index ++;
	}

	return imageFound;
	
}
function getUserById(id){
	var notFound = true;
	var index =0;
	var userFound ={};
	while(notFound){
		if(users.listUsers[index].id == id){
			userFound =users.listUsers[index];
			notFound = false;
		}
		index ++;
	}
	return userFound;
	
}