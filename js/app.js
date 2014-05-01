var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.route('about');
  this.resource('products');
  this.resource('contacts');
  this.resource('product', { path: '/products/:title' });
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});


App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
  }
})

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }
});


App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is...',
    isOnSale: true,
    image: 'images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily...',
    isOnSale: false,
    image: 'images/products/kindling.png'
  }
];

App.CONTACTS = [
  {
    name: 'The Dude',
    avatar: 'images/contacts/giamia.png',
    about: 'Likes White Russians. But he will never say'
  },
  {
    name: 'Other Dude',
    avatar: 'images/contacts/anostagia.png',
    about: 'Who cares about the other dude'
  }
];
