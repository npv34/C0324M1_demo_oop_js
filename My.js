
let listStudent = [];

for (let i = 0; i < 100; i++) {
    let randomGPA = Math.floor(Math.random() * 10 + 1);
    let student = new Student(`student-${i}`, `student${i}@gmail.com`, 20, randomGPA);
    listStudent.push(student);
}

let txt = "";
listStudent.forEach((item,index) => {
    txt += "<tr>";
    txt += `<td>${index + 1}</td>`;
    txt += `<td>${item.name}</td>`;
    txt += `<td>${item.email}</td>`;
    txt += `<td>${item.age}</td>`;
    txt += `<td>${item.GPA}</td>`;
    txt += `<td>${item.getRank()}</td>`;
    txt += "<tr>"
})

document.getElementById("list-student").innerHTML = txt;