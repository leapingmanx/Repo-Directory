$(document).ready(function(){
    $.getJSON("https://api.github.com/users/leapingmanx/repos", function(json){
        $(".repo-list").html(JSON.stringify(json));
        //testing to make sure api call is successful will change later
    });
});