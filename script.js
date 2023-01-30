let idNumber;
let idNumberShort;
let urlBeginning = "http://flightrising.com/main.php?dragon=";
let url;

getRandom();
getId();
getFull350();
getFull100();
getAvatar();
getBattleSprite();
getColiPortrait();

function getAll() {
	getId();
	getFull350();
	getFull100();
	getAvatar();
	getBattleSprite();
	getColiPortrait();
}

document.getElementById("id-number").addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("submit-button").click();
	}
});

function getRandom() {
	let idNumberRandom = Math.floor(Math.random()*83880723) + 1;
	document.getElementById("id-number").value = idNumberRandom;
}

function getId() {
	idNumber = document.getElementById("id-number").value;
	idNumberShort = parseInt(idNumber/100) + 1;
	url = urlBeginning + idNumber;
	for (i = 0; i < 5; i++) {
			document.getElementsByClassName("dragon-url")[i].href = url;
		}
	if (isNaN(idNumber) || !idNumber) {
		document.getElementById("error").innerHTML = "Please enter a valid dragon ID, numbers only.";
	} else {
		document.getElementById("error").innerHTML = "";
	}
}

function getFull350() {
	let imgFull350 = "http://www1.flightrising.com/rendern/350/" + idNumberShort + "/" + idNumber + "_350.png";
	document.getElementById("dragon-img-full350").src = imgFull350;
	document.getElementById("dragon-img-full350-url").value = imgFull350;
	document.getElementById("dragon-img-full350-linked-bbcode").value = "[url=" + url + "][img]" + imgFull350 + "[/img][/url]";
}

function getFull100() {
	let imgFull100 = "http://www1.flightrising.com/rendern/avatars/" + idNumberShort + "/" + idNumber + ".png";
	document.getElementById("dragon-img-full100").src = imgFull100;
	document.getElementById("dragon-img-full100-url").value = imgFull100;
	document.getElementById("dragon-img-full100-linked-bbcode").value = "[url=" + url + "][img]" + imgFull100 + "[/img][/url]";
}

function getAvatar() {
	let imgAvatar = "http://www1.flightrising.com/rendern/portraits/" + idNumberShort + "/" + idNumber + "p.png";
	document.getElementById("dragon-img-avatar").src = imgAvatar;
	document.getElementById("dragon-img-avatar-url").value = imgAvatar;
	document.getElementById("dragon-img-avatar-linked-bbcode").value = "[url=" + url + "][img]" + imgAvatar + "[/img][/url]";
}

function getBattleSprite() {
	let imgBattleSprite = "http://www1.flightrising.com/rendern/coliseum/battlesprites/" + idNumberShort + "/" + idNumber + ".png";
	document.getElementById("dragon-img-battlesprite").src = imgBattleSprite;
	document.getElementById("dragon-img-battlesprite-url").value = imgBattleSprite;
	document.getElementById("dragon-img-battlesprite-linked-bbcode").value = "[url=" + url + "][img]" + imgBattleSprite + "[/img][/url]";
}

function getColiPortrait() {
	let imgColiPortrait = "http://www1.flightrising.com/rendern/coliseum/portraits/" + idNumberShort + "/" + idNumber + ".png";
	document.getElementById("dragon-img-coliportrait").src = imgColiPortrait;
	document.getElementById("dragon-img-coliportrait-url").value = imgColiPortrait;
	document.getElementById("dragon-img-coliportrait-linked-bbcode").value = "[url=" + url + "][img]" + imgColiPortrait + "[/img][/url]";
}

function copy(target) {
	let content = document.getElementById(target);
	let contentSibling = content.nextElementSibling;
	content.select();
	navigator.clipboard.writeText(content.value);
	contentSibling.querySelector("span").innerHTML = "Copied to clipboard!";
	function reset() {
		contentSibling.querySelector("span").innerHTML = "Copy to clipboard";
	}
	setTimeout(reset, 2000);
}