function load (){
var myEle = document.getElementById('myName')
var mydom = 'http://dbrewitz.com'
myEle.href = mydom+'/css/evanced.css'
myEle.type = 'text/css'
myEle.rel = 'stylesheet'
}
load()


document.addEventListener('DOMContentLoaded', function(){
 var clearFix = document.querySelectorAll('.item .image + .clearfix')
for (var i = 0; i < clearFix.length; i++){
    clearFix[i].style.display = 'none'
} 
}
