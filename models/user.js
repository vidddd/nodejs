var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// conectamos abase de datos de prueba
mongoose.connect("mongodb://localhost/prueba");

/* Tipo de datos mongodb
 * String
 * Number
 * Date
 * Buffer
 * Boolean 
 * Mixed
 * Object 
 * Array
 */

var user_schema = new Schema({
   name: String,
   username: String,
   password: String,
   age: Number,
   email: String,
   date_of_birth: Date
});

var User = mongoose.model("User", user_schema); // la coleccion pasa a plural Users

// Los modelos es la forma de interactuar ocn la base de datos
// exportamos el model para que se pueda utilizar en otras partes del codigo
module.exports.User = User;