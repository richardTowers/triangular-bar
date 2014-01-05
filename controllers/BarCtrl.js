/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var triangularBar;
(function (triangularBar) {
    'use strict';

    var BarCtrl = (function (_super) {
        __extends(BarCtrl, _super);
        function BarCtrl($scope) {
            _super.call(this, $scope);
            this.$scope = $scope;
            this.width = 1000;
            this.height = 500;

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
            $scope.maxPasses = Math.max.apply([], $scope.tests.map(function (test) {
                return test.passes;
            }));
            $scope.maxFailures = Math.max.apply([], $scope.tests.map(function (test) {
                return test.failures;
            }));

            var range = $scope.maxPasses + $scope.maxFailures;
            this.scale = this.height / range;
        }
        BarCtrl.prototype.randomise = function () {
            var _this = this;
            this.$scope.tests.forEach(function (test) {
                test.passes = Math.floor(_this.$scope.maxPasses * Math.random());
                test.failures = Math.floor(_this.$scope.maxFailures * Math.random());
                test.passIncrease = Math.floor(5 * Math.random());
                test.failureIncrease = Math.floor(5 * Math.random());
            });
        };
        return BarCtrl;
    })(triangularBar.BaseCtrl);
    triangularBar.BarCtrl = BarCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BarCtrl.js.map
