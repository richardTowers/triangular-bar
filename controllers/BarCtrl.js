/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var triangularBar;
(function (triangularBar) {
    'use strict';

    var BarCtrl = (function () {
        function BarCtrl($scope) {
            this.$scope = $scope;
            $scope.graph = { width: 1000, height: 1000 };
            $scope.circles = [
                { x: 150, y: 200, r: 150, fill: '#ff0000' },
                { x: 500, y: 700, r: 200, fill: '#00ff00' },
                { x: 800, y: 100, r: 100, fill: '#0000ff' }
            ];
        }
        return BarCtrl;
    })();
    triangularBar.BarCtrl = BarCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BarCtrl.js.map
