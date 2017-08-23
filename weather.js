$(document).ready(function() {
    $('form').submit(function() {
      console.log("Hey");

        // your code here (build up your url)
        $.get("http://api.openweathermap.org/data/2.5/forecast?q="+$('#city').val()+",us&APPID=2abb13f977b82d006dbc1836784430bd", function(res) {
            console.log("Hey!");
            console.log(res);
            var temp = res.list[0].main.temp- 273;
            var name = res.city.name;
            if(temp != undefined){
              $('#information').html("<p class='title'>"+name+"</p><p>Temperature:"+temp+"</p>");
            }
            else {
              $('#information').html("<p class='title'>"+$('#city').val()+"</p><p>can not be found</p>")
            }
        // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
