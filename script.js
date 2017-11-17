var students = [
"pinapple", "Erick M",
"Abraham", "Beverly ",
"RJay ", "Steven ",
"Camila ", "Jasmine ",
"Gerrod ", "Erick A ",
"Edgardo ", "Estefania ",
"Dulce ", "Jefferson ",
"Hashby ", "Lizbeth ",
"Jeder  "
]

function showWhoIsNextInLine(){
document.getElementById('next-student').innerHTML = students[0]

document.getElementById('line-length').innerHTML = students.length

document.getElementById('students').innerHTML = students
}

showWhoIsNextInLine()

function takeOffFirstInLine(){
students.shift()
showWhoIsNextInLine()
}

function pickRandomStudent(){
var randomNum = Math.floor(Math.random() * students.length)
var student = students[randomNum]
students.splice(randomNum,1)
document.getElementById('eating').innerHTML = student
showWhoIsNextInLine()
}

function letSomeoneCut(){
var newPerson = prompt("Who is cutting in line?")
students.unshift(newPerson)
showWhoIsNextInLine()
}

function putSomeoneAtTheEndOfLine(){
var newPerson = prompt("Who is going to the end of the line?")
students.push(newPerson)
showWhoIsNextInLine()
}