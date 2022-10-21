const score = 65;

const grade = score >= 95 ? 'A+' :
              score >= 90 ? 'A' :
              score >= 85 ? 'B+' :
              score >= 80 ? 'B' :
              score >= 75 ? 'C+' :
              score >= 70 ? 'C' : 'F';

console.log({score, grade});