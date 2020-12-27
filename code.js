var username =prompt('please enter your name');
alert('Thank you for visting us '+username );

   var dish =prompt("please enter your favourite dish ");
   alert('You have agreat taste ! ' ); 

   var DishNum =checkValidation(DishNum,"please enter how many dishes you want to buy");
  
    

   //while (DishNum === '' || DishNum === null){
     //  prompt('please enter how many dishes you want to buy');
   // }

   var Stars=prompt("How do you rate our resturant from 1-5,5 is the best rate! ");

for(var i=1;i<=Stars;i++)
{document.write('<img src="stars.jpg"/>')
} 



function checkValidation(DishNum,message)
{
    while(DishNum===undefined || DishNum=== '' || DishNum===null)
    {DishNum=prompt(message);}
        return DishNum
}



