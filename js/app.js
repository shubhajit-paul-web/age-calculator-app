const fields = document.querySelectorAll(".field");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const errMessages = document.querySelectorAll(".error-msg");
const submitBtn = document.querySelector(".submit-btn");
const outputElems = document.querySelectorAll(".output");

// Function to display an error message
const displayErrorMessage = (fieldIndex, message) => {
    errMessages[fieldIndex].innerText = message;
    fields[fieldIndex].classList.add("invalid");
}

// Function to clear error messages
const clearErrorMessages = () => {
    errMessages.forEach(message => message.innerText = "");
    fields.forEach(field => field.classList.remove("invalid"));
}

submitBtn.addEventListener("click", () => {
    clearErrorMessages();

    let inputDayVal = Number(inputDay.value);
    let inputMonthVal = Number(inputMonth.value);
    let inputYearVal = Number(inputYear.value);

    const birthDate = new Date(inputYearVal, inputMonthVal, inputDayVal);

    const currentDate = new Date();

    const currDay = currentDate.getDate();
    const currMonth = currentDate.getMonth() + 1;
    const currYear = currentDate.getFullYear();

    // Validate input day, month, and year
    if (inputDayVal >= 1 && inputDayVal <= 31) {
        if (inputMonthVal >= 1 && inputMonthVal <= 12) {
            if (inputYearVal >= 1850 && inputYearVal <= currYear) {
                // Calculate age
                const yearsDiff = currYear - birthDate.getFullYear();
                const monthsDiff = currMonth - birthDate.getMonth();
                const daysDiff = currDay - birthDate.getDate();

                // Display the current DOB
                outputElems[0].innerText = yearsDiff; // years
                outputElems[1].innerText = monthsDiff; // months
                outputElems[2].innerText = daysDiff; // days
            } else {
                displayErrorMessage(2, "Invalid year");
            }
        } else {
            displayErrorMessage(1, "Invalid month");
        }
    } else {
        displayErrorMessage(0, "Invalid day");
    }
});