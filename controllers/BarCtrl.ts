/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module triangularBar {
    'use strict';

    export interface IGraph {
        width: number;
        height: number;
    }

    export interface IRect {
        height: number;
    }

    export interface IBarScope extends ng.IScope {
        graph: IGraph;
        bars: IRect[];
    }

    export class BarCtrl {
        constructor(
            private $scope: IBarScope
        ) {
            $scope.graph = { width: 100, height: 100 };
            $scope.bars = [
                { height: 100 },
                { height: 10 },
                { height: 87 },
                { height: 42 },
                { height: 91 }
            ];
        }
    }
}