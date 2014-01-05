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
        BarCtrl.prototype.randomise = function () {
            this.$scope.bars.forEach(function (bar) {
                bar.height = Math.floor(500 * Math.random());
                bar.diffUp = Math.floor(100 * Math.random());
            });
        };
        return BarCtrl;
    })(triangularBar.BaseCtrl);
    triangularBar.BarCtrl = BarCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BarCtrl.js.map
