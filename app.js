/// <reference path="bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="controllers/BarCtrl.ts" />
var triangularBar;
(function (triangularBar) {
    'use strict';

    var app = angular.module('triangular', []).controller('BarCtrl', triangularBar.BarCtrl);
})(triangularBar || (triangularBar = {}));
//# sourceMappingURL=app.js.map
