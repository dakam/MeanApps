angular.module("meanPatchManager", ['ngRoute', 'angular-jwt']).config(config);

function config($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");

    $routeProvider.when("/", {

        templateUrl:"angularjs-app/welcome/welcome.html",
        access: {restricted: false}
       
    }).when("/patches", {

        templateUrl:"angularjs-app/patchesList/patches.html",
        controller:"patchesController",
        controllerAs:"vm",
        access: {restricted: false}
    }).when("/patches/:id", {
        templateUrl:"angularjs-app/singlePatch/singlepatch.html",
        controller:"singlePatchController",
        controllerAs:"vm",
        access: {restricted: false}

    }).when("/patch/add", {

        templateUrl:"angularjs-app/patchAdd/addpatch.html",
        controller:"addpatchController",
        controllerAs:"vm",
        access: {restricted: false}
    }).when("/users/register", {
        templateUrl:"angularjs-app/register/register.html",
        controller:"RegisterController",
        controllerAs:"vm",
        access: {restricted: false}
    }).when("/users/login", {
        templateUrl:"angularjs-app/login/login.html",
        controller:"LoginController",
        controllerAs:"vm",
        access: {restricted: false}
    }).when("/users/profile", {
        templateUrl:"angularjs-app/profile/profile.html",
        access: {restricted: true}
    }).otherwise({
        redirectTo: "/"
    })

}

function run($rootScope,  $location, $window, AuthFactory) {
    $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
        if(nextRoute.access !== undefined && 
            nextRoute.access.restricted && 
            !AuthFactory.auth && !$window.sessionStorage.token) { 
            event.preventDefault();
            $location.path("/");
        }
    })
}