(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Welcome to the Overwatch Armory</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));