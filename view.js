$(document).ready(function(){
    fetchRepos('leapingmanx');
});

function fetchRepos(user){
    $("#github-username").text(user + "'s Repositories");
    $.getJSON("https://api.github.com/users/" + user + "/repos", function (repos){
        for(i = 0; i < repos.length; i++){
            var repoNumber = "repo" + i.toString();
            var repoName = $("<h3 class='repo-name clear " + repoNumber + "'><a href='" + repos[i].html_url + "'>"+repos[i].name+"</a></h3>");
            var repoDescription = $("<p class='repo-description clear " + repoNumber +"'></p>").text(repos[i].description);
            var repoDetails = $("<p class='clear " + repoNumber + "'></p>").text(repos[i].language + "   Forks: " + repos[i].forks + "   Stars: " + repos[i].stargazers_count);
            $("body").append(repoName, repoDescription, repoDetails);
            $("." + repoNumber).wrapAll("<div class='repo-div'/>")
        };
    });
};

function update(){
    var user = document.getElementById("user-search").value;
    $(".clear").remove();
    fetchRepos(user);
}