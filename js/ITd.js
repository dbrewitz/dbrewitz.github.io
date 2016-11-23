console.log('Im working')

function injectCSS(link){
 var head = document.getElementsByTagName('head')[0]
 var myCSS = document.createElement('link')
 myCSS.href = link
 myCSS.rel = 'stylesheet'
 myCSS.type = 'text/css'
 head.appendChild(myCSS) 
}
injectCSS('../css/ITd.css')
