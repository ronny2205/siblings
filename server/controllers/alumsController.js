var models = require('../models/index');

//GET all alums
const getAlumni = function() {
 let data = [];

 return models.Alums.findAll({}).then((alums) => {
   alums.forEach((element, index, array) => {
     data.push({
       id: element.id,
       firstName: element.firstName,
       lastName: element.lastName,
       email: element.email,
                track: element.track,
       cohort: element.cohort,
                city: element.city
     });
   });

   return data;
 });
};

//GET alum by id
const getAlumById = function(alumId) {
 let data = {};

 return models.Alums.find({
   where: {
         id: alumId
       }
 }).then((alum) => {
     data = {
       id: alum.id,
       firstName: alum.firstName,
       lastName: alum.lastName,
       email: alum.email,
                track: alum.track,
       cohort: alum.cohort,
                city: alum.city
     }
     return data;
   });
};

//POST create new alum record
const createAlum = function(alum) {

 return models.Alums.create({
   id: alum.id,
   firstName: alum.firstName,
   lastName: alum.lastName,
   email: alum.email,
   track: alum.track,
   cohort: alum.cohort,
   city: alum.city
 });

};

module.exports = {
 getAlumni,
 getAlumById,
 createAlum
};








// var models = require('../models/index');

// // Get all alums
// const getAlumni = function() {
//  let data = [];
//  //console.log("lulu");
// //console.log(queryParams);


// // if (Object.keys(queryParams) === 0) {
  
// //   console.log("zero params");

//  return models.Alums.findAll({}).then((alums) => {
//    alums.forEach((element, index, array) => {
//      data.push({
//        id: element.id,
//        firstName: element.firstName,
//        lastName: element.lastName,
//        email: element.email,
//        track: element.track,
//        cohort: element.cohort,
//       city: element.city
//      });
//    });

//    return data;
//  });

// // } else if (queryParams.track) {
// //   console.log("yes");
// // } 
// };


// // Get all alum by id
// const getAlumnById = function(alumId) {
//  let data = {};

//  return models.Alums.find({
//   where : {
//     id: alumId
//   }


//  }).then((alum) => {
// //console.log("hello1");
//       data = {
//        id: alum.id,
//        firstName: alum.firstName,
//        lastName: alum.lastName,
//        email: alum.email,
//        track: alum.track,
//        cohort: alum.cohort,
//       city: alum.city
//      }
//      //console.log(data);
//      return data;
//    });
//  //console.log("hello");

//    //return data;
// };


// //POST create new alum record
// const createAlum = function(alum) {
 
//  return models.Alums.create({
//    id: alum.id,
//    firstName: alum.firstName,
//    lastName: alum.lastName,
//    email: alum.email,
//    track: alum.track,
//    cohort: alum.cohort,
//    city: alum.city
//  });

// };


// module.exports = {
//  getAlumni, getAlumnById, createAlum
// };

