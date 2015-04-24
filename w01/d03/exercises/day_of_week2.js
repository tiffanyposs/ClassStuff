var day = process.argv[2];

if (day === "monday" || "tuesday" || "wednesday" || "thursday" || "friday") {
  console.log("weekday")
}
else if (day === "saturday" || "sunday") {
  console.log("weekend")
}
