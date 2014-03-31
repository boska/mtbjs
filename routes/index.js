
var mongoose = require( 'mongoose' );
var Post     = mongoose.model( 'Post' );

exports.index = function ( req, res ){
  Post.find( function ( err, posts, count ){
    res.render( 'index', {
        title : 'mathebumbler.js',
        posts : posts
    });
  });
};
exports.create = function ( req, res ){
  new Post({
    content    : req.body.content,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};