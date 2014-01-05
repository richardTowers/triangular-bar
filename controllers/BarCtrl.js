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

            $scope.tests = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(this.getRandomTest);

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
            this.$scope.tests = this.$scope.tests.map(this.getRandomTest);
        };

        BarCtrl.prototype.getRandomTest = function (_) {
            return {
                passes: Math.floor(100 * Math.random()),
                failures: Math.floor(100 * Math.random()),
                passIncrease: Math.floor(20 * Math.random()),
                failureIncrease: Math.floor(20 * Math.random())
            };
        };
        return BarCtrl;
    })(triangularBar.BaseCtrl);
    triangularBar.BarCtrl = BarCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BarCtrl.js.map
