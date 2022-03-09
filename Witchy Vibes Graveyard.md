// Witchy Vibes Graveyard

.music-btn {
	font-family: 'Outfit', sans-serif;
	font-weight: 400;
	font-size: 1.5em;
	border: 1px solid rgba(00, 00, 00, 55%);
	background-color: #ffffff;
	padding: 1% 3%;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, 
				rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
				rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.music-btn:active {
	box-shadow: rgba(0, 0, 0, 0.4) 0px -2px 4px, 
				rgba(0, 0, 0, 0.3) 0px -7px 13px 3px, 
				rgba(0, 0, 0, 0.2) 0px 3px 0px inset;
}


======================

.clicked-btn {
	border: 1px solid rgba(00, 00, 00, 55%);
	padding: 3%;
	cursor: pointer;
	border-radius: 50%;
	background-color: rgb(82, 38, 94);
	box-shadow: rgba(65, 32, 73, 0.575) 0px 2px 4px, 
				rgba(65, 32, 73, 0.575) 0px 7px 13px -3px, 
				rgba(65, 32, 73, 0.575) 0px -3px 0px inset;
}

.clicked-icon {
	color: rgb(207, 180, 214);
}


===========================

fireplaceBtn.addEventListener('click', fireSound);
cauldronBtn.addEventListener('click', cauldronSound);
mortarBtn.addEventListener('click', mortarSound);
bgmBtn.addEventListener('click', bgmSound);