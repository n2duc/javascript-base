// 1. Declaration
// const name = "Anh Tuan";
// const age = "20";
// const school = "Ton Duc Thang University";
// const car = "BWM";
// const classSchool = "CKC";
/*
const variableName = {
  property: value(primitive values, object, array, function)
};
*/
// const student1 = new Object({
//   name: "tuan",
// });
// object literal
const student = {
  name: "Anh Tuan",
  age: 20,
  school: "Ton Duc Thang University",
  car: "BWM",
  classSchool: "CKC",
  scores: [9, 10, 9, 8, 7],
  information() {
    return `My name is ${this.name} and I am studying at ${this.school}`;
  },
  extra: {
    reason: "Attack teacher",
  },
  "my-girl-friend": "Alone",
};
// Object.freeze(student);
console.log(student);
// ACCESS
// 1. dot notation
console.log(student.name); // 'Anh Tuan'
console.log(student.information()); // `My name is Anh Tuan and I am studying at TDT U`
// 2. square bracket []
console.log(student["car"]); // BMW
console.log(student["my-girl-friend"]); // Alone
// ADDING
student.sport = "Badminton";
// UPDATING
student.age = 30;
// student.name = "Evondev";
// delete student.name;
console.log(student);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));
// console.log(student.hasOwnProperty("age"));
// const cloneStudent = Object.assign({}, student);
// const cloneStudent = { ...student };
const cloneStudent = JSON.parse(JSON.stringify(student));
// console.log("cloneStudent:", cloneStudent === student);
cloneStudent.extra.reason = "Attack other student";
console.log("student:", student.extra.reason);
console.log("cloneStudent:", cloneStudent.extra.reason);
{
  const student = {
    name: "Anh Tuan",
    age: 20,
    school: "Ton Duc Thang University",
    car: "BWM",
    classSchool: "CKC",
    scores: [9, 10, 9, 8, 7],
    information() {
      return `My name is ${this.name} and I am studying at ${this.school}`;
    },
    extra: {
      reason: "Attack teacher",
    },
    "my-girl-friend": "Alone",
  };
  // const name = student.name;
  // const age = student.age;
  // const school = student.school;
  // const car = student.car;
  // const classSchool = student.classSchool;
  // const { name, age, school, car, classSchool } = student;
  const { name, ...rest } = student;
  console.log("name:", name);
  console.log("rest:", rest);

  function showStudentInformation({ name, age, school, car, classSchool }) {
    console.log(`${name} ${age} ${school} ${car} ${classSchool}`);
  }
  const obj = {
    name: "",
    age: "",
    school: "",
    car: "",
    classSchool: "",
  };
  showStudentInformation({
    age: "",
    classSchool: "",
    school: "",
    name: "",
    car: "",
  });
  // if(student && student.myFather && student.myFather.age) {}
  // if(student?.myFather?.age) {}
  // value ?? other-value
  const hobby = "Volleybal" ?? "Badminton";
  console.log("hobby:", hobby);
  // Nullis corc
  console.log(student?.myFather?.age); // undefined.age
  // myFather: undefined.age

  for (const p in student) {
    console.log(`${p}: ${student[p]}`);
  }
}
{
  // Problems
  const student = {
    name: "evondev",
    age: 30,
    school: "",
  };
  const student2 = student;
  student2.school = "TDT";
  // Function construction
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.school = "CKC";
    this.information = function () {
      return `Hello my name is ${this.name}`;
    };
  }
  const evondev = new Student("Evondev", 29);
  console.log(evondev.information());
  console.log("evondev:", evondev);
  const hieu = new Student("Tri Hieu", 10);
  hieu.school = "TDT";
  console.log(hieu.information());
  // console.log("hieu:", hieu);
}
