/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var triangularBar;
(function (triangularBar) {
    var BaseCtrl = (function () {
        function BaseCtrl($scope) {
            $scope.vm = this;
        }
        return BaseCtrl;
    })();
    triangularBar.BaseCtrl = BaseCtrl;
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=BaseCtrl.js.map
