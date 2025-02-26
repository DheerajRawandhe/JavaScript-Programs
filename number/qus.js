 let score = 40;
 let grade;
 if(score >= 90 && score <=100){
    grade ="A+";
 }else if(score >= 70 && score <= 89){ 
    grade="B";
 }
 else if(score >= 60 && score <= 69 ){ 
    grade="C";
 }
 else if(score >= 50 && score <= 59){
    grade="D";
 }
 else if(score >= 0 && score <=49){
    grade="(F) You are Fail?";
 }
 console.log("student =",grade);