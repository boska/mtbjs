var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Post = new Schema({
    user_id     : String,
    content     : String,
    content2    : String,
    content3    : String,
    content4    : String,

    updated_at : Date
});

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/express-post';

mongoose.model( 'Post', Post );
mongoose.connect( mongoUri );


