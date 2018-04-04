import app from '../module';

app.controller('SampleCtrl', ['$scope', 'sampleService', SampleCtrl]);

function SampleCtrl($scope, sampleService) {

    $scope.pageLayout = [
        [
            {
                type: 'value',
                widgetClass: 'col-lg-3 col-md-6 col-xs-12',
                name: 'Widget 1',
                source: sampleService.sample1(),
                icon: 'fa-dollar',
                color: 'green'
            },{
                type: 'value',
                widgetClass: 'col-lg-3 col-md-6 col-xs-12',
                name: 'Widget 2',
                source: Promise.resolve(2),
                icon: 'fa-star',
                color: 'blue'
            },{
                type: 'value',
                widgetClass: 'col-lg-3 col-md-6 col-xs-12',
                name: 'Widget 3',
                source: Promise.resolve(3),
                icon: 'fa-dollar',
                color: 'red'
            },{
                type: 'value',
                widgetClass: 'col-lg-3 col-md-6 col-xs-12',
                name: 'Widget 4',
                source: Promise.resolve(4),
                icon: 'fa-star',
                color: 'yellow'
            }
        ]
    ];

}
