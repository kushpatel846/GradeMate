let subjects = [];

// 1. Add data to the array and update the table
function addSubject() {
    const name = document.getElementById('subject').value;
    const gradePoint = parseFloat(document.getElementById('grade').value);
    const gradeLabel = document.getElementById('grade').options[document.getElementById('grade').selectedIndex].text;
    const credit = parseFloat(document.getElementById('credit').value);

    if (name && credit) {
        subjects.push({ name, gradeLabel, gradePoint, credit });
        renderTable();
        clearInputs();
    } else {
        alert("Please fill in all fields");
    }
}

// 2. Render the table rows dynamically
function renderTable() {
    const tbody = document.getElementById('subjectList');
    tbody.innerHTML = subjects.map((s, i) => `
        <tr>
            <td>${s.name}</td>
            <td>${s.gradeLabel}</td>
            <td>${s.credit}</td>
            <td>
                <button class="btn action-btn btn-green">Edit</button>
                <button class="btn action-btn btn-red" onclick="deleteSubject(${i})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// 3. Calculate CGPA: (Sum of GradePoint * Credit) / (Total Credits)
function calculateCGPA() {
    let totalPoints = 0, totalCredits = 0;
    subjects.forEach(s => {
        totalPoints += (s.gradePoint * s.credit);
        totalCredits += s.credit;
    });
    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById('cgpaValue').innerText = result;
}

// 4. Delete and Reset functions
function deleteSubject(index) {
    subjects.splice(index, 1);
    renderTable();
}

function clearInputs() {
    document.getElementById('subject').value = '';
    document.getElementById('credit').value = '';
}
