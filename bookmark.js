function CreateBookmarkLink(){
var title = document.title;
var url = document.location.href;
window.external.AddFavorite(url, title);}
$(function() {
$('#bookmarkme').click(function() {
if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
window.sidebar.addPanel(document.title,window.location.href,'');
} else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
window.external.AddFavorite(location.href,document.title);
} else if(window.opera && window.print) { // Opera Hotlist
this.title=document.title;
return true;
} else { // webkit - safari/chrome
alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
}
});
});
function LYbookmarksite()
{
try
{
var Location = window._content.document.location.href;
var Title = window._content.document.title;
var bmsvc = Components.classes["@mozilla.org/browser/nav-bookmarks-service;1"].getService(Components.interfaces.nsINavBookmarksService);
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
var uri = ios.newURI(Location, null, null);
if (!bmsvc.isBookmarked(uri))
{bmsvc.insertBookmark(bmsvc.toolbarFolder, uri, bmsvc.DEFAULT_INDEX, Title);}
}
catch(ee){}
}
