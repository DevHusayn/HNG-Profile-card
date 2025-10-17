function greet() {
  if (new Date().getHours() < 12) {
    document.getElementById("greeting").innerText = "Good Morning, Husayn!";
  }
  else {
    document.getElementById("greeting").innerText = "Good Afternoon, Husayn!";
  }
}




function checkAge() {

  let age = 20;
  let text = "You're marriageable.";
  if (age >= 20) {
    document.getElementById("test").innerText = text;
  }
  else {
    text = "You're not marriageable.";
    document.getElementById("test").innerText = text;
  }
}
class School {
  constructor(name) {
    this.schoolName = name
  }
}
const mySchool = new School("University of Ibadan");
document.getElementById("test3").innerText = (mySchool.schoolName);

hello = (greeting) => greeting + "hello world";
document.getElementById("test2").innerText = hello("Here" + " ");