if(L==undefined){
 L = {};
}
L.blog=function(){
  return {
   getCatagory:function(name){
  //  var dataStr = '{ {% for cat in site.categories %}{% if cat[0] != site.categories.first[0] %},{% endif %}"{{ cat[0] }}":[{% for post in cat[1] %}{% if post != cat[1].first %},{% endif %}{"url":"{{post.url}}", "title":"{{post.title}}", "date":"{{post.date | date:"%d/%m/%Y"}}"}{% endfor %}]{% endfor %} }';
 ///  var data = JSON.parse(dataStr);
 //  var curTag = L.core.getparam(name);
//  return data[curTag];

   }
  }
}