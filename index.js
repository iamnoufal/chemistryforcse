if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var deferredPrompt;
function a2hs(){
  btnAdd.style.display="none",deferredPrompt.prompt(),deferredPrompt.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),deferredPrompt=null})
}
window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt"),e.preventDefault(),deferredPrompt=e,btnAdd.style.display="block"}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")});
