export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.deferReadiness();

  loadGooglePlus();
  
  application.advanceReadiness();
}

export default {
  name: 'googleplus',
  initialize: initialize
};


function loadGooglePlus() {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//apis.google.com/js/client.js?onload=googleApiLoaded";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'));
}

// setup Google+ API
function googleApiLoaded() {
  gapi.client.setApiKey('vvpwM5tzj3Sj9ovXVTgvO2Sc');
}