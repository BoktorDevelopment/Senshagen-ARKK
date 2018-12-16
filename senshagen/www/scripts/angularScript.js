var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "./routes/home.html"
        })
        .when("/meldingen", {
            templateUrl : "./routes/meldingen.html"
        })
        .when("/settings", {
            templateUrl : "./routes/settings.html"
        });
});