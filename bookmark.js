function CreateBookmarkLink(){
var title = document.title;
var url = document.location.href;
 
if(window.sidebar){
/* Mozilla Firefox Bookmark */
window.sidebar.addPanel(title, url, "");
}else if(window.external){
/* IE Favorite */
window.external.AddFavorite(url, title);
}else if(window.opera && window.print) {
/* Opera Hotlist */
alert("Press Control + D to bookmark");
return true;
}else{
/* Other */
alert("Press Control + D to bookmark");
}
}
