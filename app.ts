/// <reference path="bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="controllers/BarCtrl.ts" />

module triangularBar {
    'use strict';

    var app = angular
        .module('triangular', [])
        .controller('BarCtrl', BarCtrl);
}