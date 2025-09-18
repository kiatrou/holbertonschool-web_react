interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sherlock",
    lastName: "Holmes",
    age: 28,
    location: "London"
}
const student2: Student = {
    firstName: "James",
    lastName: "Moriarty",
    age: 30,
    location: "London"
}

const studentList: Student[] = [student1, student2];

const table = document.createElement("TABLE");
const body = document.body;
body.appendChild(table);

// Loop through array
studentList.forEach(function(student) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
    row.append(cell1, cell2);
    table.append(row);
})