function CreateBookmarkLink(){
var title = document.title;
var url = document.location.href;
window.external.AddFavorite(url, title);
