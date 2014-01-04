/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module triangularBar {

    export interface IScope extends ng.IScope {
        vm: BaseCtrl;
    }

    export class BaseCtrl {
        constructor($scope) {
            $scope.vm = this;
        }
    }

}