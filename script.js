const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
const resultDiv = document.querySelector("#result");
const totalUnitLoad = document.querySelector("#total-unit-load");
const gpaDisplay = document.querySelector("#gpa");
const classDiv = document.querySelector("#class-div");
const toggleTheme = document.querySelector("#toggle-theme");

let gpArry = [];
let isDarkMode = true;

// Function to determine class based on CGPA
function determineClass(cgpa) {
    if (cgpa >= 4.50) return "First Class";
    if (cgpa >= 3.50) return "Second Class Upper Division (2:1)";
    if (cgpa >= 2.40) return "Second Class Lower Division (2:2)";
    if (cgpa >= 1.50) return "Third Class";
    return "Fail";
}

add.addEventListener("click", () => {
    if (
        courseCode.value === "" ||
        unitLoad.value <= 0 ||
        grade.selectedIndex === 0
    ) {
        alert("Wrong input, check and try again ...");
    } else {
        const tr = document.createElement("tr");
        const tdCourseCode = document.createElement("td");
        tdCourseCode.innerHTML = courseCode.value;
        const tdUnitLoad = document.createElement("td");
        tdUnitLoad.innerHTML = unitLoad.value;
        const tdGrade = document.createElement("td");
        tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
        tr.appendChild(tdCourseCode);
        tr.appendChild(tdUnitLoad);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
        table.classList.remove("display-none");
        calcGp.classList.remove("display-none");
        clear.classList.remove("display-none");
        gpArry.push({
            unitLoad: unitLoad.value,
            grade: grade.options[grade.selectedIndex].value,
        });
        courseCode.value = "";
        unitLoad.value = "";
        grade.selectedIndex = "0";
    }
});

calcGp.addEventListener("click", () => {
    let unitLoads = 0,
        sumOfProductOfUnitLoadsAndGrades = 0;

    gpArry.forEach((result) => {
        unitLoads += parseInt(result.unitLoad);
        sumOfProductOfUnitLoadsAndGrades += parseInt(result.unitLoad) * parseInt(result.grade);
    });
    
    const cgpa = sumOfProductOfUnitLoadsAndGrades / unitLoads;
    
    totalUnitLoad.innerHTML = `Your Total Unit Load is : ${unitLoads}`;
    gpaDisplay.innerHTML = `Your CGPA is : ${cgpa.toFixed(2)}`;
    classDiv.innerHTML = `Your Class Division is: ${determineClass(cgpa)}`;
    
    resultDiv.classList.remove("display-none");

    // Clear the footer before adding new result
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
});

clear.addEventListener("click", () => {
    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    table.classList.add("display-none");
    calcGp.classList.add("display-none");
    clear.classList.add("display-none");
    resultDiv.classList.add("display-none");
});

// Theme switching functionality
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    isDarkMode = !isDarkMode;
    toggleTheme.innerText = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
});
