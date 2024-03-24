
//I created a function called studentGradeGenerator whose main function is to receive marks then throuugh a series of commands it is able to determine the grade that that specific mark translates to
// then it returns the grade that those marks translate to
function studentGradeGenerator(marks)
{
//here we have a conditional statement whereby if a person had attained a mark between 0 and 39 then the function will return a grade 'E' 
    if (marks >= 0 && marks< 40)
    {
        return "E";
    }
    // here we have another comditional statement whereby if a person had attained a mark between 40 and 49 they will automatically be given a grade 0f 'D'
    else if (marks>=40 && marks < 49)
    {
        return "D";
    }
    // here we have another comditional statement whereby if a person had attained a mark between 49 and 59 they will be assigned the grade 'C'
    else if( marks >=49 && marks <= 59 )
    {
        return "C";
    }
    //here we have another comditional statement whereby if a person had attained a mark between 60 and 78 they will automatically be assigned the grade 'B'
    else if ( marks >=60 && marks < 79)
    {
        return "B";
    }
    // here we have another comditional statement whereby if a person had attained a mark between  79 and 100 they will automatically be assigned the Grade 'A'
    else if (marks >= 79 && marks <= 100)
    {
        return "A";
    }
    // here we have another comditional statement whereby if the  marks imserted were beyond 100 or below 0 they will automatically get an 'Invalid'
    else
    {
        return "invalid marks";
    }
}
// this here is an example 
// expected answer for this prompt is C
console.log(studentGradeGenerator(55));
// expected answer for this prompt is B
console.log(studentGradeGenerator(70));
// expected answer for this prompt is A
console.log(studentGradeGenerator(90));
// expected answer to this prompt is D
console.log(studentGradeGenerator(45));
// expected answer to this prompt is E
console.log(studentGradeGenerator(35));