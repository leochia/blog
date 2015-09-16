var L = {};
L.core= new function(){
		 this.getparam=function(val,url){
          var uri = url||window.location.search;
    	  var re = new RegExp("" +val+ "\=([^\&\?]*)", "ig");
    	  return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
        }
	}
 