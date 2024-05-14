const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema( {
   
    nombre: {
      type: String,
      required: false
   },

    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);