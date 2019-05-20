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
        $scope.toggleModel;

        $scope.userList = [{'name':'Juliya','surname':'Wastson','email':'Joily.Wastan@gmail.com','gender':false},
                            {'name':'Michal','surname':'clark','email':'micky.clarl@hotmail.com','gender':true}];

        $scope.secondGrid=[];
        $scope.firstGrid;
        $scope.submitDisable=true;
        $scope.firstGridData=[{id:'1',name:'Dealer'},{id:'2',name:'Model Year'},{id:'3',name:'Manufacturer'},{id:'4',name:'Collaterial'}];

    $scope.submit = function() {
        var JsonString = {'name':$scope.name,'surname':$scope.surname,'email':$scope.email,'gender':$scope.gender};
       // console.log(JsonString);
        if ($scope.email && $scope.name && $scope.surname && $scope.gender) {
            $scope.userList.push(JsonString);
            this.clearValues();
        }
        console.log($scope.userList);
    };
    $scope.onUpdateChange = function(){
        $scope.submitDisable= !$scope.submitDisable;
    }

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
    $scope.shiftLeft = function(){
        $scope.temp=[];
        $scope.firstGridData.forEach(element => {
            if($scope.firstGrid.includes(element.id)){
                $scope.secondGrid.push(element);
                $scope.temp.push(element);
            }
        });
        $scope.temp.forEach(element =>{
            $scope.firstGridData.splice($scope.firstGridData.indexOf(element),1);
        });
    }
    $scope.shiftLeftAll = function(){
        $scope.firstGridData.forEach(element => {
                $scope.secondGrid.push(element);
        });
        $scope.firstGridData=[];
    }
}
]);