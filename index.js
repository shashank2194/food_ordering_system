'use strict';

var data_set = {
  "awesome pizza place":[
    {
      item:"pepperoni pizza",
      price:20
    },
    {
      item:"shake",
      price:5
    }
  ],
  "wild burger joint":[
    {
      item: "burger",
      price: 15
    },
    {
      item: "sandwich",
      price: 12
    }
  ]
};


function GetOrderDetails(input_item)
{    
  input_item=input_item.toLowerCase();
  let local_output="";
  let local_temp="";
  let ifFound=false;
  
  for(var outlet_name in data_set) {
    var item_list = data_set[outlet_name];
    for(var i = 0; i < item_list.length; i++) {
      if(item_list[i].item===input_item){
        local_output=outlet_name+','+item_list[i].item+',$'+item_list[i].price;
        ifFound=true;
        break;
      }
    }
    if(ifFound){
      break;
    }
  }
  if(!ifFound){
    local_output="Not found";

  }
  return local_output;
}

var readlineSync = require('readline-sync');
console.log("Food Ordering System\n\n");
var answer = readlineSync.question('Input: ');

console.log('Output: '+GetOrderDetails(answer)+'\n\n');

