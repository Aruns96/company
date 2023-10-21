const Sequelize = require("sequelize");

const sequelize = require("../utils/database");


const Rating = sequelize.define("rating",{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:Sequelize.STRING
  },
  pros:{
    type:Sequelize.STRING,
    allowNull:false
   
  },
  cons:{
    type:Sequelize.STRING,
    allowNull:false
    
  },
  ratingValue:{
    type:Sequelize.STRING,
    allowNull:false
   
  }
  


  
})

module.exports = Rating;