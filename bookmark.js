<script type="text/javascript">
  $(document).ready(function() {
    $("#bookmarkme").click(function() {
      if (window.sidebar) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(location.href,document.title,"");
      } else if(window.external) { // IE Favorite
        window.external.AddFavorite(location.href,document.title); }
      else if(window.opera && window.print) { // Opera Hotlist
        this.title=document.title;
        return true;
  }
});
function createBookmark(sURL,sTitle) {
 if (document.all && window.external) {
  window.external.AddFavorite (sURL,sTitle);
 }
 else if (window.sidebar) { 
   window.sidebar.addPanel(sTitle,sURL,'');
 } 
 else {
  alert (''
   +'Cannot programmatically add bookmarks!\n'
   +'Please press Ctrl+D to bookmark this page.'
  );
 }
}
