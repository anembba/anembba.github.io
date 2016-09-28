(function () {
    "use strict";

    angular.module("app")

        .controller("controller.main", controller);

    controller.$inject = ["dataservice", "$routeParams", "$location"];

    function controller(dataservice, $routeParams, $location) {
        var self = this;
        console.log("Start controller.main");

        function init() {
            console.log("Start initialisation function");
        };

    };
} ());        