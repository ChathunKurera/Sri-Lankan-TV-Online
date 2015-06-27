function uStream(video_id) {
document.getElementById("video").src = "http://www.ustream.tv/embed/"+ video_id +"?v=3&amp;wmode=direct&amp;autoplay=true";
}
function youtubeStream(video_id2) {
switch (video_id2) {
case 22222: video_id2 ="t19heQM2YmA";break;
}
document.getElementById("video").src = "https://www.youtube.com/embed/"+ video_id2 +"?theme=light&autoplay=1";
}

function youtubeAccUpl(video_id2) {
switch (video_id2) {
case 44545: video_user= "NewsFirstSrilanka"; break;
}
document.getElementById("video").src = "https://www.youtube.com/embed?listType=user_uploads&theme=light&list=" + video_user;
}

function externalPage(video_id3) {
switch (video_id3) {
case 1: video_id3 ="Hiru.html" ; break;
case 2: video_id3 ="Rupavahini.html" ; break;
case 3: video_id3 ="Itn.html" ; break;
case 4: video_id3 = "Derana.html"; break;
}
document.getElementById("video").src = "http://vishvvaw.github.io/Sri-Lankan-TV-Online/" + video_id3;
} 
function myFuntionIE(){
	alert("Press CTRL + D to bookmark me :D");
}
function SurveyJS(){		
	window.open("http://goo.gl/forms/FRUwrKK0Mb");
}