Posts = new Mongo.Collection('posts')

Meteor.methods({
  addPost() {
    Posts.insert({title: 'Post ' + Random.id()})
  },
})