/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of marks 
            *   Each mark has properties `subject` and `value`        
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**/  

function solve(){   
	
  return function (students) { 
	  
	  var studentWithMaxScore = _.chain(students)
	  .map(function(student){
		student.fullName = student.firstName + " " + student.lastName;
		student.score = _.reduce(student.marks, function(sum, mark){ 
		return sum+mark; 
		})/(student.marks.length === 0 ? 1 : student.marks.length);
		student.score.toFixed(2);
		return student;  
	  })  
	  .max(function(student) { 
		return student.score;
	  }).value(); 
	  
	  console.log(studentWithMaxScore.fullName + ' has an average score of ' + studentWithMaxScore.score);
  };
}

module.exports = solve;