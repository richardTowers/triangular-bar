/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module triangularBar {
    'use strict';

    export interface IGraph {
        width: number;
        height: number;
    }

    export interface ICircle {
        x: number;
        y: number;
        r: number;
        fill: string;
    }

    export interface IBarScope extends ng.IScope {
        graph: IGraph;
        circles: ICircle[];
    }

    export class BarCtrl {
        constructor(
            private $scope: IBarScope
        ) {
            $scope.graph = { width: 1000, height: 1000 }
            $scope.circles = [
                { x: 150, y: 200, r: 150, fill: '#ff0000' },
                { x: 500, y: 700, r: 200, fill: '#00ff00' },
                { x: 800, y: 100, r: 100, fill: '#0000ff' },
            ]
        }
    }
}