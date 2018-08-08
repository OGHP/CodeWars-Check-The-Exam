function checkExam(correctAnswers, studentAnswers) {
//start with a score of 0
var score = 0;
  //loop through the array of correct answere
  for(var i = 0; i < correctAnswers.length; i++) { 
      //if the answer matches the students answer add 4 to the score
      if(correctAnswers[i] === studentAnswers[i]){
      score += 4;
      }
      //if the student has an empty string for an answer, add nothing to the score
      else if(studentAnswers[i] === ""){
      score -= 0;
      }
      //if the student has an answer that is not correct and not an empty string, deduct 1 ooint from their score
      else {
      score -= 1
      }
  }
  //if the score is a negative number (below 0), just return 0 as the score
  if(score < 0){
  score = 0;
  };
  return score;
};

//call the function
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
//answer will be 6


//checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]);
//score;
//answer will be 7


//checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]);
//score;
//answer will be 16


//checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]);
//score;
//answer will be 0
