const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

// Array to store course info
let gpArry = [];

// Function to add a course to the table
add.addEventListener("click", () => {
    if (courseCode.value === "" || unitLoad.value <= 0 || grade.selectedIndex === 0) {
        alert("Please fill out all fields correctly.");
    } else {
        const tr = document.createElement("tr");
        
        const tdCourseCode = document.createElement("td");
        tdCourseCode.innerHTML = courseCode.value.toUpperCase();

        const tdUnitLoad = document.createElement("td");
        tdUnitLoad.innerHTML = unitLoad.value;

        const tdGrade = document.createElement("td");
        tdGrade.innerHTML = grade.options[grade.selectedIndex].text;

        const tdDelete = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("btn-danger");
        tdDelete.appendChild(deleteBtn);

        tr.appendChild(tdCourseCode);
        tr.appendChild(tdUnitLoad);
        tr.appendChild(tdGrade);
        tr.appendChild(tdDelete);

        tbody.appendChild(tr);
        table.classList.remove("display-none");
        calcGp.classList.remove("display-none");
        clear.classList.remove("display-none");

        gpArry.push({
            unitLoad: unitLoad.value,
            grade: grade.options[grade.selectedIndex].value
        });

        // Delete button functionality
        deleteBtn.addEventListener("click", () => {
            const index = [...tbody.children].indexOf(tr);
            gpArry.splice(index, 1);
            tr.remove();
        });

        // Clear inputs
        courseCode.value = "";
        unitLoad.value = "";
        grade.selectedIndex = 0;
    }
});

// Function to calculate CGPA
calcGp.addEventListener("click", () => {
    let unitLoads = 0,
        productOfUnitLoadsAndGrades = 0,
        sumOfProductOfUnitLoadsAndGrades = 0;

    gpArry.forEach((result) => {
        unitLoads += parseInt(result.unitLoad);
        productOfUnitLoadsAndGrades = parseInt(result.unitLoad) * parseInt(result.grade);
        sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
    });

    const tr = document.createElement("tr");

    const tdTotalUnitLoad = document.createElement("td");
    tdTotalUnitLoad.innerHTML = `Your Total Unit Load is: ${unitLoads}`;
    tdTotalUnitLoad.colSpan = 2;

    const tdGpa = document.createElement("td");
    tdGpa.innerHTML = `Your CGPA is: ${(sumOfProductOfUnitLoadsAndGrades / unitLoads).toFixed(2)}`;
    tdGpa.colSpan = 2;

    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);

    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
    tfoot.appendChild(tr);
});

// Clear button functionality
clear.addEventListener("click", () => {
    gpArry = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }

    table.classList.add("display-none");
    calcGp.classList.add("display-none");
    clear.classList.add("display-none");
});
