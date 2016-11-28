console.log('Im working')

function injectCSS(link){
 var head = document.getElementsByTagName('head')[0]
 var myCSS = document.createElement('link')
 myCSS.href = link
 myCSS.rel = 'stylesheet'
 myCSS.type = 'text/css'
 head.appendChild(myCSS) 
}
injectCSS('https://dbrewitz.github.io/css/ITsp.css')

document.addEventListener('DOMContentLoaded', addHamburger())

function addHamburger() {
    var menu = document.getElementById('contentRow')
    var menuC = '<div id="nav-icon1" class="open"><span></span><span></span><span></span></div>'
    if(menu){
    menu.insertAdjacentHTML('beforebegin', menuC);
    }
    var d = document.getElementById('nav-icon1');
    var a = document.getElementById('sideNavBox')
    var m = document.getElementById('contentBox')

    // un comment to to close column by default
    // a.classList.add('close')
    //  m.classList.add('fillUp')

    d.addEventListener('click', function () {
        a.classList.toggle('close');
        m.classList.toggle('fillUp');
        d.classList.toggle('open');
    });
}

// hide alert on washnet home
if (document.getElementById('washco-alert') !== null) {
    setTimeout(function() {
        document.getElementById('washco-alert').style.display = "none";
    }, 3000);
}


// add Washnet Hyperlink to replace branding text
if (document.querySelector('.ms-core-brandingText') !== null) {
    var _new = document.querySelector('.ms-core-brandingText');
    _new.innerHTML = '<a style="color:white !important;font-size: 1.5em" href="//washnet.co.washington.mn.us">Washnet</a>';
}
// mysite img change - replace my face
if (document.getElementById('ctl00_PictureUrlImage') !== null) {
    var d = document.getElementById('ctl00_PictureUrlImage');
    if (d.src.indexOf('dtbrewi') > -1) {
        d.src = '/personal/dtbrewi/Documents/Icons/World.jpg';
    }
}

// New attempt works with start.aspx page links
function createMobile(lin) {
    let a = document.createElement('a');
    let linkText = document.createTextNode("MobileView");
    a.appendChild(linkText);
    a.href = lin;
    a.className = 'ms-core-suiteLink-a';
    link = document.querySelector('#DeltaSuiteLinks');
    link.appendChild(a);
}

let _loc = document.location.pathname;
let _sPhash = window.location.hash.replace('#', '');
let sPstr = '/_layouts/15/start.aspx';
let sPpage = '/SitePages/'
let mobilize = '/_layouts/15/mobile/mblwikia.aspx?Url=';
let _host = document.location.host;
let _end = '%2Easpx&mobile=1';
let _end2 = '&mobile=1';

if (_loc.indexOf(sPstr) == -1 && _loc.indexOf(sPpage) > -1) {
    let loc = _loc.split(sPpage, 1);
    let myMobile = 'https://' + _host + loc + mobilize + _loc + _end2;

    console.log(myMobile)
    createMobile(myMobile);
}
// MDS pages (minDownloadStrategy)
if (_loc.indexOf(sPstr) > -1) {
    let loc = _loc.replace(sPstr, mobilize)
    _sPhash = _sPhash.split(".aspx", 1);
    _sPhash = encodeURIComponent(_sPhash);
    _path = _loc.split('/_layouts/', 1);
    _path = encodeURIComponent(_path);
    let myMobile = 'https://' + _host + loc + _path + _sPhash + _end;
    console.log(myMobile);
    createMobile(myMobile);
}
