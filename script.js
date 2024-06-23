function calculateCGPA() {
    const subjects = [];
    const subjectInputs = document.querySelectorAll('.subject-input');

    subjectInputs.forEach((input, index) => {
        const name = input.querySelector('.subject-name').value.trim();
        const credit = parseInt(input.querySelector('.subject-credit').value);
        const score = parseFloat(input.querySelector('.subject-score').value);

        if (name !== '' && !isNaN(credit) && credit > 0 && !isNaN(score)) {
            subjects.push({ name, credit, score, index });
        }
    });

    let totalCreditPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const grade = calculateGrade(subject.score);
        const credit = subject.credit;

        if (grade !== "-" && !isNaN(credit)) {
            const gradePoint = getGradePoint(grade);
            totalCreditPoints += gradePoint * credit;
            totalCredits += credit;
        }

        document.getElementById(`subject${subject.index + 1}Grade`).textContent = grade;
    });

    const cgpa = totalCredits === 0 ? 0 : totalCreditPoints / totalCredits;
    document.getElementById("cgpa").textContent = cgpa.toFixed(2);

    const studentClass = determineClass(cgpa);
    document.getElementById("studentClass").textContent = studentClass;
    document.getElementById("classSection").style.display = "block";
}

function calculateGrade(score) {
    const gradeScale = [
        { score: 75, grade: 'A1' },
        { score: 70, grade: 'B2' },
        { score: 65, grade: 'B3' },
        { score: 60, grade: 'C4' },
        { score: 55, grade: 'C5' },
        { score: 50, grade: 'C6' },
        { score: 45, grade: 'D7' },
        { score: 40, grade: 'E8' },
        { score: 0, grade: 'F9' },
    ];

    for (const scale of gradeScale) {
        if (score >= scale.score) {
            return scale.grade;
        }
    }
    return "-";
}

function getGradePoint(grade) {
    const gradeScale = {
        'A1': 4.0,
        'B2': 3.6,
        'B3': 3.2,
        'C4': 2.8,
        'C5': 2.4,
        'C6': 2.0,
        'D7': 1.6,
        'E8': 1.2,
        'F9': 0.0
    };
    return gradeScale[grade] || 0.0;
}

function determineClass(cgpa) {
    if (cgpa >= 3.5) {
        return "First Class";
    } else if (cgpa >= 3.0) {
        return "Second Class Upper";
    } else if (cgpa >= 2.0) {
        return "Second Class Lower";
    } else if (cgpa >= 1.0) {
        return "Third Class";
    } else {
        return "Fail";
    }
}
