const { response } = require("express");
const Building = require("../models/Building");
const Visitor = require("../models/Visitor");
//const { error } = require("jquery");



exports.getPosts = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    Building.findAll().then(response=>{
      debugger
      //console.log(response)
      var serverResponse = response.map(e=>e.dataValues)
      //console.log(serverResponse)

      serverResponse =  serverResponse?.length > 0 ? serverResponse : [];

      res.status(200).json({
        data: serverResponse
      });

    }).catch(error=>{




    })
    

   
  };
  
  exports.createPost = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    debugger
    const title = req.body.Owner;
    const content = req.body.Name;
    

    Building.create({

      Name: req.body.Name, 
      Owner: req.body.Owner

    }).then().catch(err=>{

      console.log(err)
    })


    console.log(title)
    
    debugger

    // Create post in db
    res.status(201).json({
      message: 'Building created successfully!',
    
    });
  };
  


  exports.addVisitor = (req, res, next) =>{
    res.set('Access-Control-Allow-Origin', '*');
    //console.log(req)
     Visitor.create({

      Name:req.body.Name,
      DateOfVisit: new Date(),
      BuildingId: req.body.BuildingId


     }).then().catch(err=>{

     })


     res.status(201).json({
      message:'Visitor created successfully'
     })



  }


  exports.getBuildingById = (req, res, next) =>{
    debugger
    var id  = req.params.id

    console.log(req.params.id)


    Building.findByPk(id).then(resp=>{

     var result = resp.dataValues


     result.visitors = [];


     Visitor.findAll({
                      where:{
                        BuildingId: id
                      }
                    }).then(r=>{

                      console.log(r)
                      result.visitors = r?.map(e=>e.dataValues)

                      res.status(200).json({
                        data: result
                      });


                    }


                    )
       
      console.log(result.visitors)

     



    }).catch(err=>{

      
    })

   




  }