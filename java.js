document
  .getElementById("calculate-btn")
  .addEventListener("click", ageCalculator);

function ageCalculator() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1; // Months are 0-based
  const currentYear = today.getFullYear();

  if (!day || !month || !year || day > 31 || month > 12 || year > currentYear) {
    alert("Please enter valid numbers");
    return;
  }

  let calculatedYear = currentYear - year;
  let calculatedMonth = currentMonth - month;
  let calculatedDay = currentDay - day;

  if (calculatedDay < 0) {
    calculatedMonth -= 1;
    calculatedDay += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (calculatedMonth < 0) {
    calculatedYear -= 1;
    calculatedMonth += 12;
  }

//   document.getElementById(
//     "result"
//   ).textContent = `You are ${calculatedYear} years,<br> ${calculatedMonth} months,<br> and ${calculatedDay} days old.`;
// }

document.getElementById("result").innerHTML = `
    <span style=" color: steelblue;">Years: ${calculatedYear}</span><br>
    <span style=" color: steelblue;">Months: ${calculatedMonth}</span><br>
    <span style=" color: steelblue;">Days: ${calculatedDay}</span>
  `;
}