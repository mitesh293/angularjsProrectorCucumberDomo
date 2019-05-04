angular.
module('myApp').
component('addUser', {
    templateUrl: '/add-user/add-user.template.html',
})
.controller('AddUserController', ['$scope', function($scope) {
        $scope.email;
        $scope.name;
        $scope.surname;
        $scope.gender;

        $scope.userList = [{'name':'Juliya','surname':'Wastson','email':'Joily.Wastan@gmail.com','gender':false},
                            {'name':'Michal','surname':'clark','email':'micky.clarl@hotmail.com','gender':true}];

    $scope.submit = function() {
        var JsonString = {'name':$scope.name,'surname':$scope.surname,'email':$scope.email,'gender':$scope.gender};
       // console.log(JsonString);
        if ($scope.email && $scope.name && $scope.surname && $scope.gender) {
            $scope.userList.push(JsonString);
            this.clearValues();
        }
        console.log($scope.userList);
    };

    $scope.clearValues = function () {
        $scope.email="";
        $scope.name="";
        $scope.surname="";
        $scope.gender="";
    }
    $scope.checkAll = function () {
        angular.forEach($scope.userList, function(user){
            user.selected = $scope.selectedAll;
        });
    }
}
]);