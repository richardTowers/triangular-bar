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

            $scope.tests = [
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5, passIncrease: 2 },
                { passes: 10, failures: 5, passIncrease: 3 },
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5, passIncrease: 2 },
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5, passIncrease: 2 },
                { passes: 10, failures: 5, passIncrease: 2 },
                { passes: 10, failures: 10, passIncrease: 2 },
                { passes: 10, failures: 5 },
                { passes: 10, failures: 5 }
            ];

            // We'll also need the max failures and the max passes:
            $scope.maxPasses = Math.max.apply([], $scope.tests.map((test) => test.passes));
            $scope.maxFailures = Math.max.apply([], $scope.tests.map((test) => test.failures));

            var range = $scope.maxPasses + $scope.maxFailures;
            this.scale = this.height / range;
        }

        randomise() {
            this.$scope.tests.forEach((test) => {
                test.passes = Math.floor(this.$scope.maxPasses * Math.random());
                test.failures = Math.floor(this.$scope.maxFailures * Math.random());
                test.passIncrease = Math.floor(5 * Math.random());
                test.failureIncrease = Math.floor(5 * Math.random());
            });
        }
    }
}