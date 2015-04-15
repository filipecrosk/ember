export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.deferReadiness();

	var fbAsyncInit = function() {
    initFacebook(window.FB);
    application.advanceReadiness();
  };

  loadFacebookSDK();

  window.fbAsyncInit = fbAsyncInit;
	
	//container.injection('controller', 'FB', FB);
}

export default {
  name: 'facebook',
  initialize: initialize
};


function loadFacebookSDK() {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

function initFacebook(FB) {
  FB.init({
    appId: '404599803055772',//ENV.FB_APP_ID
    cookie: true,
    xfbml: true,
    version: 'v2.2'//ENV.GRAPH_API_VERSION
  });
}
