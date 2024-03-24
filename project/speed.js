function speedDetector(speed)
//I created a function known as speedDetector(speed) soo within the brackets whereby ive put the name speed , one would input the speed of the car in there 
//Then later on through a series of conditiona statements it will return a valid answer depending on the speed the person is travelling in
{
   if( speed <= 70 )
   // Here we have a conditional statement which enables the function to return a valid answer
// what I mean by saying a valid answer is that if the person was travelling at a speed below or equal to the speed limit then they are safe 
//by saying safe I mean that they will not be getting any demerit point  
   {
      return "Ok";
   }
   else 
   {
      const demeritPoints=Math.round((speed-70) /5)
      if 
      (demeritPoints > 12 )
      return "License suspended ";
      return demeritPoints ;

   }
      //Here I created a variable by the name demiritPoints where by I introduced a rounding off property which is supposed to round off down the 
      // difference between speed that the car was travelling in and the speed limit which in this case is 70
      //The difference is first divided by 5 before it is round off down 
      // now a good example is in the case whereby a car is travelling at a speed of about 83 soo instead of the person getting the demerit assigned to values of about 85 
      //The driver will get the same demerits as the person who was travelling at a speed of 80 
      
}
//An Example ... when one console.logs 80 it is supposed to return  2 demirit points
console.log(speedDetector(80));
console.log(speedDetector(160));//its supposed to return License suspended 
console.log(speedDetector(65));// its supposed to return Ok