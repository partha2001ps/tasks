
//  1.Find all the information about each products
  
  //  query:
        //  use product
        //     switched to db product
            db.detalies.find();
       
            // All products in product.detalies.json file upload
 
//  2.Find the product price which are between 400 to 800

//    query :
        db.detalies.find({product_price:{$gte:400,$lte:800}});
                 

//  3.Find the product price which are not between 400 to 600
   
//    query:
       db.detalies.find({ product_price: { $not: { $gte: 400, $lte: 600 } } });

//  4.List the four product which are grater than 500 in price     

//    query:
        db.detalies.find({product_price:{$gte:500}}).limit(4);

//  5.Find the product name and product material of each products

//    query:
        db.detalies.find({},{product_name:1, product_material:1,_id:0});

//  6.Find the product with a row id of 10

//      query:
         db.detalies.find({id:"10"});

//  7.Find only the product name and product material

//      query:
         db.detalies.find({},{product_name:1,product_material:1,_id:0});

//  8.Find all products which contain the value of soft in product material 

//      query:
         db.detalies.find({  product_material: 'Soft'});

//   9.Find products which contain product color indigo  and product price 492.00  

//      query:
          db.detalies.find({product_color: 'indigo'});
          db.detalies.find({product_price: '492.00'});

//          to given json  product color indigo  and product price 492.00 no product if case to givenm prodect to below quary use
           db.detalies.find({product_color: 'indigo',  product_price: 492});

//    10.Delete the products which product price value are same

//       query:
             db.detalies.aggregate([{ $group: { _id:'$product_price',dprodects:{$push:'$_id'},count:{$sum:1}}},{$match:{count:{$eq:1}}}])
             db.detalies.deleteMany({ product_price: { $eq: 32 } });

            //  db.detalies.deleteMany({ product_price: { $eq: <same_product_price >} });