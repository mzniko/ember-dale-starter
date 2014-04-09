App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
      return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend ({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});



var posts = [{
  id: '1',
  title: "Rails is Omakase",
  author: { name: "d2h" },
  date: new Date('12-27-2012'),
  excerpt: "Things things things and a couple of more things that are interesting",
  body: "Dum doo doo dee, Ember is interesting for me"
}, {
  id: '2',
  title: "The Parley Letter",
  author: { name: "d2h" },
  date: new Date('12-29-2012'),
  excerpt: "Dumblebum a fooley-foo",
  body: "Hamana hamana hamana haaaaaaaaa....aaa...a."
}];
