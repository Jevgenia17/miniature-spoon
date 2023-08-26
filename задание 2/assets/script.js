const grades = [];

for (let i = 0; i < 12; i++) {
    const randomGrade = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrade);
}
console.log(grades);

const getAverage = (grades) => {
    const sum = grades.reduce((acc, number) => acc + number, 0);
    const length = grades.length;
    return sum / length;
  };

console.log(getAverage(grades));

const maxScore = grades.sort((a, b) => b - a)[0];
console.log(maxScore);

const minScore = grades.sort((a, b) => a - b)[0];
console.log(minScore);

const positiveGrades = grades.filter(grade => grade > 60);
console.log("Количество студентов с положительными оценками:", positiveGrades.length);
const stayGrades = grades.filter(grade => grade < 60);
console.log("Количество оставшихся оценок:", stayGrades.length);


const negativeGrades = grades.filter(grade => grade < 60);
console.log('Количество негативных оценок:', negativeGrades.length);

const letterGrades = grades.map(grade => {
    if (grade >= 80 && grade <= 100) {
          return 'A';
     } else if (grade >= 60 && grade <= 79) {
        return 'B';
     } else if (grade >= 40 && grade <= 59) {
        return 'C';
     } else if (grade >= 20 && grade <= 39) {
        return 'D';
     } else {
        return 'E';
     }

    });

console.log('Буквенные оценки студентов:', letterGrades);

