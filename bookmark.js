var ios = Components.classes["@mozilla.org/network/io-service;1"]
                    .getService(Components.interfaces.nsIIOService);
var uri = ios.newURI("http://google.com/", null, null);
var newBkmkId = bmsvc.insertBookmark(newFolderId, uri, bmsvc.DEFAULT_INDEX, "");
