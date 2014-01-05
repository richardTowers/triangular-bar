/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module triangularBar {
    'use strict';

    export interface IGraph {
        width: number;
        height: number;
    }

    export interface IBar {
        height: number;
        diffUp?: number;
    }

    export interface IBarScope extends IScope {
        graph: IGraph;
        bars: IBar[];
    }

    export class BarCtrl extends BaseCtrl {
        constructor(
            private $scope: IBarScope) {

                super($scope);

                $scope.graph = { width: 1000, height: 500 };
                $scope.bars = [
                    { height: 400 },
                    { height: 40, diffUp: 20 },
                    { height: 357, diffUp: 30 },
                    { height: 420 },
                    { height: 400 },
                    { height: 40, diffUp: 20 },
                    { height: 357 },
                    { height: 420 },
                    { height: 400, diffUp: 20 },
                    { height: 40, diffUp: 20 },
                    { height: 357, diffUp: 20 },
                    { height: 420 },
                    { height: 200 }
                ];
        }

        randomise() {
            this.$scope.bars.forEach((bar) => {
                bar.height = Math.floor(500 * Math.random());
                bar.diffUp = Math.floor(100 * Math.random());
            });
        }
    }
}