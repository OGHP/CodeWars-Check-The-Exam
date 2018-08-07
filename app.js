var score = 0;

function checkExam(correctAnswers, studentAnswers) {
  
  for(var i = 0; i < correctAnswers.length; i++) { 
    
      if(correctAnswers[i] === studentAnswers[i]){
      score += 4;
      }
      else if(studentAnswers[i] === ""){
      score -= 0;
      }
      else {
      score -= 1
      }
  }
    
  if(score < 0){
  score = 0;
  };
};

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
score;
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
