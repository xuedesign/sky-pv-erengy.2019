//Modernizr 增強性輔助語法
loadjs("../script/lib/modernizr-custom.js");

//Fontawesome 網頁圖標
loadjs(["https://kit.fontawesome.com/e1a514447c.js","https://pro.fontawesome.com/releases/v5.0.10/css/all.css"]);
//loadjs("https://kit.fontawesome.com/e1a514447c.js");

//圖片輪播
loadjs(['../css/flexslider.css','../script/lib/jquery.flexslider.js'], function() {
  $(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"});
  });
});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//wow 載入動畫
loadjs('https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js', function() {
    new WOW().init();
});  

//返回頂端
loadjs(['../script/lib/jquery.ui.totop.min.js', 'https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js'], function() {
    $(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });
    });
});

//行動版選單
loadjs("../script/lib/overlay.modernizr.custom.js");
loadjs("../script/lib/overlay-classie.js");
loadjs("../script/lib/overlay-set.js");

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