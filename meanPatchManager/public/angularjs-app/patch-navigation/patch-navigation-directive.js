angular.module("meanPatchManager").directive("patchNavigation", PatchNavigation);

function PatchNavigation() {

    return {
        restrict: "E",
        templateUrl:"angularjs-app/patch-navigation/patch-navigation.html"
    }
}