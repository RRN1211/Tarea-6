var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var inf = mongoose.model('Tarea 6',schema,'tarea 6');
var inf = new inf({
    title:'Mi crud',
    author:'Roman Rivera.',
    body:'mi primer programa de aplicaciones empresariales',
    comments:[{body:'primer programa',
               date:'2019-06-30'}],
    date:'2019-06-30',
    hidden:false,
    meta:{
        votes:10,
        favs:52}
});

inf.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});


inf.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});


//busqueda general
inf.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("consulta general");
    console.log(docs);
});

inf.update({_id:'5d182145ccd5d93d289a6d35'},{$set: {body:'informacion actualizada'}},
function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log("Actualizacion");
    process.exit(0);
});

inf.findByIdAndRemove({_id :'5d182145ccd5d93d289a6d37'},function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log("inf borrado con exito")
    console.log(docs);
    process.exit(0);
});