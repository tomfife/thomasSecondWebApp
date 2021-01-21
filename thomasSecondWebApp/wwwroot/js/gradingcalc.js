var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {

    // Calculate the grade percentage 
    finalScore = Number(document.getElementById("assignments").value) * .5 +
        Number(document.getElementById("groupProjects").value) * .1 +
        Number(document.getElementById("quizzes").value) * .1 +
        Number(document.getElementById("exams").value) * .2 +
        Number(document.getElementById("intex").value) * .1

    letterGrade = ""

    // Calculate the letter Grade
    if (finalScore >= 93) {
        letterGrade = "A"
    } else if (finalScore >= 90) {
        letterGrade = "A-"
    } else if (finalScore >= 87) {
        letterGrade = "B+"
    } else if (finalScore >= 83) {
        letterGrade = "B"
    } else if (finalScore >= 80) {
        letterGrade = "B-"
    } else if (finalScore >= 77) {
        letterGrade = "C+"
    } else if (finalScore >= 73) {
        letterGrade = "C"
    } else if (finalScore >= 70) {
        letterGrade = "C-"
    } else if (finalScore >= 67) {
        letterGrade = "D+"
    } else if (finalScore >= 63) {
        letterGrade = "D"
    } else if (finalScore >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    document.getElementById("finalScore").innerHTML = ("Final Score: " + String(finalScore)
        + "%")
    document.getElementById("letterGrade").innerHTML = ("Letter Grade: " + letterGrade)
   })