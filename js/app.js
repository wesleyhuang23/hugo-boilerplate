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