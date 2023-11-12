const app = angular.module("VisitorApp", [ 'ui.bootstrap', 'ui.router', "oc.lazyLoad", "firebase"])



app.config(function( $stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
   
    console.log(firebase)
    $urlRouterProvider.otherwise('/login')
      
    
    $stateProvider.state({
        name: 'login',
        url: '/login',
        templateUrl: '/html/login.html',
        controllerAs:"vm",
        controller: "LoginController",
        resolve:{

            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                    {
                        name:'controller loading...',
                        files:[
                            '/controller/loginController.js',
                        ]
                    });
            }

        }



      });



    $stateProvider.state({

        name:"building",
        url:"/building",
        templateUrl: '/html/building.html',
        controllerAs:"vm",
        controller: "BuildingController",
        // web\html\building.html
        resolve:{

            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                    {
                        name:'controller loading...',
                        files:[
                            '/controller/buildingController.js',
                        ]
                    });
            }


        }






    })
    





  });


//   app.run(['$rootScope', '$state',
//   function ($rootScope, $state) {
//     $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      
//       var state = localStorage.getItem("loggedin")
        
//       if(state == null || state == false){

//         $state.go("login");


//       }
  
  
  
//     });
//   }]
//   );
  


