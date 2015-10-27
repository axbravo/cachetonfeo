$(document).ready(function() {
  $.ajax({
    //url:"http://10.100.120.225:8888/publicaciones/",
    url:"http://localhost:8889/publicaciones/",
    crossDomain: true,
    dataType: "json"
    /*,function (json) {
      alert("success");
      
      $.each( json, function( key, val ) {
        $("#publicaciones").append('<p>'+val[key]+'</p>');


      });

      $("#publicaciones").listview('refresh');
    }*/
  }).done(function(json){
      var arr = jQuery.makeArray(json);
      console.log(arr[0]);

      for ( var i=1; i<arr.length; i++){
           var dato = arr[i].fechaPartida;
           var fechaPartida = dato.text; 

           var dato = arr[i].lugarEncuentro;
           var lugarEncuentro = dato.text; 

           var dato = arr[i].descripcion;
           var descripcion = dato.text; 
           

           var dato = arr[i].nombre;
           var nombre = dato.text;

           var dato = arr[i].apellidos;
           var apellidos = dato.text;
           
           var dato=arr[i].marca;
           var marca=dato.text;

           var dato=arr[i].modelo;
           var modelo=dato.text;

           var dato=arr[i].asientos;
           var asientos=dato.text;

           var dato = arr[i].lugarDestino;
           var lugarDestino = dato.text; 

           var dato = arr[i].precio;
           var precio = dato.text; 

           var dato = arr[i].codigo;
           var codigo = dato.text;

          var dato = arr[i].correo;
           var correo = dato.text;


           
           $("#publicaciones").append('<table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>'+arr[i].fechaPartida.toString()+'</td><td>'+arr[i].lugarEncuentro.toString()+'</td></tr><tr><td>'+arr[i].nombre.toString()+ '</td><td>'+arr[i].lugarDestino.toString()+'</td></tr><tr><td>'+arr[i].descripcion.toString()+'</td></tr></tbody></table>');
          $("#mispublicaciones").append('<table data-role="table" class="ui-responsive ui-shadow" ><thead><tr><th></th><th></th></tr><tbody><tr><td>'+arr[i].fechaPartida.toString()+'</td><td>'+arr[i].lugarEncuentro.toString()+'</td></tr><tr><td>'+arr[i].nombre.toString()+'</td><td>'+arr[i].lugarDestino.toString()+'</td><tr><tr><td>'+arr[i].descripcion.toString()+'</td></tr></tbody></table><div data-role="collapsible" data-collapsed="true"><h1>Detalle</h1><p>Marca:</p><p>'+arr[i].marca.toString()+'</p><p>Modelo:</p><p>'+arr[i].modelo.toString()+'</p><p>Numero de asientos:</p><p>'+arr[i].asientos.toString()+'</p></div><br>');
           $("#micarro").append('<label for="Marca:">Marca</label><h3>'+arr[i].marca.toString()+'</h3><br><label for="Modelo"> Modelo:</label><h3>'+arr[i].modelo.toString()+'</h3><label for="Asientos">Numero de asientos:</label><h3>'+arr[i].asientos.toString()+'</h3>');
      }

      $("#publicaciones").listview().listview('refresh');
      $("#mispublicaciones").listview().listview('refresh');
      $("#micarro").listview().listview('refresh');
    });
  
 }); 