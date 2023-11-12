angular.module("VisitorApp").controller('LoginController', function($scope, $rootScope, $state, $stateParams, $firebaseAuth){

    var vm = this;

    vm.loginModel = new LoginModel();
    var auth = $firebaseAuth();


    $scope.name = "whats up ?"


    vm.firebaseAuth = function(){
        debugger

        // forcing a google
        var provider = new firebase.auth.GoogleAuthProvider();
         //provider.addScope("https://www.googleapis.com/auth/plus.login");
         provider.setCustomParameters({
            prompt: 'select_account'
        });


        
        auth.$signInWithPopup(provider).then(function(firebaseUser) {
            debugger
        //    console.log("Signed in as:", firebaseUser.uid);
        $state.go("building")
          }).catch(function(error) {
            console.log("Authentication failed:", error);

           
          });



    }




    $scope.$on('$viewContentLoaded', function() {




        // debugger
        // var loggedin = localStorage.getItem('loggedin');

        // if(loggedin){

        //     $state.go("building")

        // }

    })
     


    vm.login = function(){
     

        if(vm.loginModel.userName == "admin" && vm.loginModel.password == "admin"){



                 console.log("logged in")



                localStorage.setItem('loggedin', true);
                localStorage.setItem("role","admin")

                $state.go("building")

        }
        else{

            console.log("incorrect password")


        }



    }



})


function LoginModel(){

    this.userName = null;
    this.password = null;

}