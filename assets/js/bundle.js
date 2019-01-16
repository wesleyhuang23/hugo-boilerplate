var app = {
  props: {
    scope: $('body').data('scope') || $('body').attr('id'),
    host: window.location.origin,
  },
  init: function() {
    // test to see if a scoped object for the current page exists
    var pageScope = eval('app.' + this.props.scope);
    // if so, initialize it
    if (pageScope) {
      pageScope.init();
    }

    this.lazyLoad();
  },
  lazyLoad: () => {
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy"
    });
  }
}
// JavaScript manifest file, initialize scoped functions here.
$(function(){
  app.init();
});
app.contact = {
  init: function() {
    console.log('initialize contact page scripts');
    
  },
}
app.homepage = {
  init: function() {
    console.log('initialize home page scripts');
    
  },
}