const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema( {
   _id: {
      type: String,
      required: false
   },
    nombre: {
      type: String,
      required: false
   },

    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);