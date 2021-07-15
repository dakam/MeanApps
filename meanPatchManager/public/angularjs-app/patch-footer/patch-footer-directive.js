angular.module("meanPatchManager").directive("patchFooter", PatchFooter);

function PatchFooter() {

    return {
        retrict: "E",
        templateUrl:"angularjs-app/patch-footer/patch-footer.html",
    }

}