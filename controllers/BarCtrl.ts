/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module triangularBar {
    'use strict';

    export interface ITest {
        passes: number;
        failures: number;
        passIncrease?: number;
        failureIncrease?: number;
    }

    export interface IBarScope extends IScope {
        tests: ITest[];
        maxPasses: number;
        maxFailures: number;
    }

    export class BarCtrl extends BaseCtrl {

        public width: number = 1000;
        public height: number = 500;
        public scale: number;

        constructor(private $scope: IBarScope) {

            super($scope);

            $scope.tests = [1,1,1,1,1,1,1,1,1,1].map(this.getRandomTest);

            // We'll also need the max failures and the max passes:
            $scope.maxPasses = Math.max.apply([], $scope.tests.map((test) => test.passes));
            $scope.maxFailures = Math.max.apply([], $scope.tests.map((test) => test.failures));

            var range = $scope.maxPasses + $scope.maxFailures;
            this.scale = this.height / range;
        }

        randomise() {
            this.$scope.tests = this.$scope.tests.map(this.getRandomTest);
        }

        private getRandomTest(_: any): ITest {
           return {
                passes: Math.floor(100 * Math.random()),
                failures: Math.floor(100 * Math.random()),
                passIncrease: Math.floor(20 * Math.random()),
                failureIncrease: Math.floor(20 * Math.random())
            };
        }
    }
}