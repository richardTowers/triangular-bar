/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var triangularBar;
(function (triangularBar) {
    'use strict';

    var BarCtrl = (function () {
        function BarCtrl($scope) {
            this.$scope = $scope;
            $scope.graph = { width: 100, height: 100 };
            $scope.bars = [
                { height: 100 },
                { height: 10 },
                { height: 87 },
                { height: 42 },
                { height: 91 }
            ];
        }
        return BarCtrl;
    })();
    triangularBar.BarCtrl = BarCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BarCtrl.js.map
