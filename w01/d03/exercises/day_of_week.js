var day = process.argv[2];

if ((day === "monday") || (day === "tuesday") || (day === "wednesday") || (day === "thursday") || (day === "friday")) {
  console.log("weekday")
}
else if ((day === "saturday") || (day === "sunday")) {
  console.log("weekend")
}
