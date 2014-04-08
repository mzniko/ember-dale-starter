App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
  this.resource('post', { path: ':post_id' });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
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
