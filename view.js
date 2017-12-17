$(document).ready(function(){
    $.getJSON("https://api.github.com/users/leapingmanx/repos", function (repos){
        for(i = 0; i < repos.length; i++){
            var repository = $("<div class='repository'>")
            var repoName = $("<h3 class='repo-name'><a href='" + repos[i].html_url + "'>"+repos[i].name+"</a></h3>");
            var repoDescription = $("<p class='repo-description'></p>").text(repos[i].description);
            //repoDetails to repoStarts is repoDetails
            var repoDetails = $("<p></p>").text(repos[i].language + "   Forks: " + repos[i].forks + "   Stars: " + repos[i].stargazers_count);
            $("body").append(repoName, repoDescription, repoDetails);
        };
    });
});