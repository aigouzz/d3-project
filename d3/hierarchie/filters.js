/**
 * Created by guoxc on 2016/10/8.
 */
angular.module('hierarchie.filters', ['hierarchie.services'])
    .filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
angular.module('hierarchie.directives', ['hierarchie.services']);