  $(document).ready(function() {
    $("#bookmarkme").click(function() {
      if (window.sidebar) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(location.href,document.title,"");
      } else if(window.external) { // IE Favorite
        window.external.AddFavorite(location.href,document.title); }
        alert("CTRL + D too bookmark this website!")
      else if(window.opera && window.print) { // Opera Hotlist
        this.title=document.title;
         alert("CTRL + D too bookmark this website!");
        return true;
  }
});
