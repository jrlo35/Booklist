

var app;

app={
  server: //'http://127.0.0.1:8080/',


  send: function(url){
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(url),
      contentType: 'application/JSON',
      success: function(){
        console.log('Url sent');
      },
      error: function(){
        console.log('Error');
      }
    })
  }
}

$(document).ready(function(){
  $('#input').keypress(function(e){
    var inputUrl= $('#input').val()
    if(e.which===13){
      app.send(inputUrl);
      $('#input').val('');
    }
  })
});