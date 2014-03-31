
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
    content2    : req.body.content2,
    content3    : req.body.content3,
    content4    : req.body.content4,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};

exports.destroy = function ( req, res ){
  Post.findById( req.params.id, function ( err, post ){
    post.remove( function ( err, post ){
      res.redirect( '/' );
    });
  });
};