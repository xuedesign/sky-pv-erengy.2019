//Modernizr增強性輔助語法
loadjs("script/lib/modernizr-custom.js");

//Fontawesome 網頁圖標
loadjs("https://kit.fontawesome.com/daece105d8.js");

//google map
loadjs(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDraMIrnao7HAnudMt5_LRCgwE5ypcG-9o&callback=initMap','script/lib/googlemap.js']);

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

//Lightbox
loadjs(['https://cdn.jsdelivr.net/gh/fancyapps/fancybo//x@3.5.7/dist/jquery.fancybox.min.css','https://cdn.jsd//elivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fanc//ybox.min.js'], function() {
});

//行動版選單
loadjs("script/lib/overlay.modernizr.custom.js");
loadjs("script/lib/overlay-classie.js");
loadjs("script/lib/overlay-set.js");

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;