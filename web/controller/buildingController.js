angular.module("VisitorApp").controller('BuildingController', function($scope, $rootScope, $state, $stateParams, $http, $timeout,  $firebaseAuth){

    var vm = this;

    //vm.loginModel = new LoginModel();
    vm.data = [];
    vm.currentBuilding = null;
  
    // building data model
    vm.buildingData = new BuildingModel();
    vm.visitorData = new VisitorModel();
    

    vm.singleBuildingDetails = null

     var   auth = $firebaseAuth() 

     debugger

    //  provider.setCustomParameters({
    //     prompt: 'select_account'
    //   });
    // vm.loggedin = localStorage.getItem('loggedin');


    // if(vm.loggedin == undefined || vm.loggedin == false || vm.loggedin == null){


    //     $state.go("login")

    // }

    $scope.$on('$viewContentLoaded', function() {


        


      
        

    })




    vm.logout = function(){


        auth.$deleteUser().then(res=>{
            debugger
            $state.go("login")

        }).catch(err=>{
debugger
        })

        auth.$signOut().then(e=>{

            $state.go("login")
        
            localStorage.clear()
            
           
        });

        // auth.$onAuthStateChanged().then(user => {
        //     if(user) {      
        //         window.location = '/home';
        //     }
        
        //   });




    }

    vm.getBuildings = function(){

        $http.get("http://localhost:8080/visitors-app/buildings", {
            headers: {'content-type': 'application/json'}
        }).then(res=>{
            

            $timeout(function(){

                vm.data = res.data.data;

            },0)
           


        }).catch(err=>{




        })


    }

    vm.getBuildings()


    vm.saveBuilding = function(){

        // make an api call
        
        console.log(vm.buildingData);


        $http.post("http://localhost:8080/visitors-app/building",vm.buildingData).then(e=>{
            vm.buildingData = new BuildingModel();
            vm.getBuildings()

        }).catch(err=>{

        })

    }


    vm.saveVisitor = function(buildingId){

        debugger
        var obj = {

            Name : vm.visitorData.Name,
            BuildingId : vm.currentBuilding


        }

        $http.post("http://localhost:8080/visitors-app/visitor",obj).then(e=>{

        vm.visitorData = new VisitorModel();
            vm.getBuildings()

        }).catch(err=>{

        })

        var a = 0

    }
    

    vm.getBuildingById = function(id){

        debugger

        vm.currentBuilding=id

        $http.get("http://localhost:8080/visitors-app/building"+ '/' + vm.currentBuilding, null).then(e=>{

           debugger

        $timeout(function(){
            debugger
            vm.singleBuildingDetails = e.data.data;
            vm.getBuildings()
        },0)



        }).catch(err=>{

        })


    }
     
    


})


function BuildingModel(){
    this.Name = null;
    this.Owner = null;
}

function VisitorModel(){
    this.BuildingId = null
    this.Name = null;
}
