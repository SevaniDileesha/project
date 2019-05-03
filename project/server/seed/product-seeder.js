var AddProduct = require('../models/product');
var mongoose=require('mongoose');
//mongoose.connect('localhost:27017/project');

var products=new AddProduct({
    product_name:'Rose',
    //product_img:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjb6qKh_ujhAhW28HMBHZCcBaAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.homedepot.com%2Fp%2FGlobalrose-50-Pink-Roses-Fresh-Flower-Delivery-50-birthday-pink-roses%2F302884884&psig=AOvVaw1OBeCyncNyWimHMrBCODAW&ust=1556204110954688',
    product_description:'Awesome',
    product_price:'12',
    product_Category:'seed'

});

var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
