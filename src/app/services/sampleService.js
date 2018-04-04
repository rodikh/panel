import app from '../module';

app.factory('sampleService', ['$http', sampleService]);

function sampleService($http) {
    return {
        sample1: function () {
            return $http.get('/sample-api/sample-endpoint').then(function (resp) {
                return resp.data;
            });
        }
    }
}