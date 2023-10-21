const Rating = require('../models/review');

exports.postRatingData = async (req,res)=>{
    try{
        
        
   const name = req.body.name;
        
    const pros = req.body.pros;
    const cons = req.body.cons;
    const ratingValue = req.body.ratingValue;
   
      
        const data = await Rating.create({name:name,pros:pros,cons:cons,ratingValue:ratingValue});
        res.status(201).json({newRatingData:data});
    }catch(e){
       
       res.status(500).json({error:e});
    }
  
}

exports.getRatingData = async (req,res)=>{
    const cname = req.body.cName;
    
    try{
       const data = await Rating.findAll({where:{name:cname}});
       res.status(200).json({ratingData:data})
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.editPlayerData = async (req,res)=>{
    try{
        
        const userId = req.params.id;
        console.log("id",userId)
       await Player.destroy({where:{id:userId}});
       res.sendStatus(200);
    



       }catch(e){
        res.status(500).json({error:e})
    }


}