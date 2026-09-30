const students = [
    { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
    { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
    { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
    { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
    { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
    { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
    { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
    { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
    { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
    { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
    { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
    { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
    { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
    { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
    { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
    { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
    { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
    { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
    { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 }
];

// Yêu cầu số 1


students.forEach( (student) => {
    console.log(`ID : ${student.id}`);
    console.log(`Tên : ${student.name}`);
    console.log(`Tuổi : ${student.age}`);
    console.log(`Điểm : ${student.age}`);
    console.log(`-----------------------------------------`);
});

// Yêu cầu số 2
function isPassed(score){
    return score >= 5;
}

students.forEach( (student) => {
    const text = isPassed(student.score) ? `Đạt` : `Không đạt`;
    console.log(`ID: ${student.id} | Name: ${student.name} | ${text}` );
});

// Yêu cầu số 3
const passedStudent = students.filter( (student) => isPassed(student.score));
console.log(passedStudent);


// Yêu cầu số 4
const failedStudent = students.filter( (student) => !isPassed(student.score));
failedStudent.forEach( (student) => {
    console.log(`${student.name} - ${student.score} điểm`);
});

// Yêu cầu số 5
const danhSachSinhVienLonHon21Tuoi = students.filter(
    (student) => student.age >= 21
);
danhSachSinhVienLonHon21Tuoi.forEach( (student) => {
    console.log(`${student.name} - ${student.age} tuổi`);
})

// Yêu cầu số 6
const sinhVienDiemCao = students.filter( (student) => student.score >= 8)
const yeuCau6 = sinhVienDiemCao.map( (student) => `${student.name} - Học sinh giỏi`);
console.log(yeuCau6);


// Yêu cầu số 7

const getClassification = (score) => {
    if(score >= 8) return `Giỏi`;
    if(score >= 6.5) return `Khá`;
    if(score >= 5) return `Trung bình`;
    return `Yếu`;
}

const yeuCau7 = students.map( (student) => 
    `${student.name} - ${getClassification(student.score)}`
)

console.log(yeuCau7);

// Yêu cầu số 8

const result = students
.filter((student) => student.score >= 6.5)
.map( (student) => `${student.name} - ${student.score} điểm`);

console.log(result);
