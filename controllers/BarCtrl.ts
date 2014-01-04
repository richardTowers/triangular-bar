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

    export interface IBarScope extends IScope {
        graph: IGraph;
        bars: IRect[];
    }

    export class BarCtrl extends BaseCtrl {
        constructor(
            private $scope: IBarScope) {

                super($scope);

                $scope.graph = { width: 1000, height: 500 };
                $scope.bars = [
                    { height: 400 },
                    { height: 40 },
                    { height: 357 },
                    { height: 420 },
                    { height: 400 },
                    { height: 40 },
                    { height: 357 },
                    { height: 420 },
                    { height: 400 },
                    { height: 40 },
                    { height: 357 },
                    { height: 420 },
                    { height: 200 }
                ];
        }

        randomise() {
            this.$scope.bars.forEach((bar) => bar.height = Math.floor(500 * Math.random()));
        }
    }
}