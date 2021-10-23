function leapYear(year) {
  if (year % 400 == 0) {
    return "うるう年";
  }
  else if (year % 4 == 0 && year % 100 != 0) {
    return "うるう年";
  }
  else
    return "うるう年ではない";
}

console.log("--------Question 2--------");
console.log("2020年は" + leapYear(2020));
console.log("2021年は" + leapYear(2021));

