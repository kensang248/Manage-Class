let classes = [
  {
    id:0,
    name: "1A",
    teacher: 0
  },
  {
    id:1,
    name: "2A",
    teacher: 1
  },
  {
    id:2,
    name: "3A",
    teacher: 2
  },
  {
    id:3,
    name: "4A",
    teacher: 3
  },
  {
    id:4,
    name: "5A",
    teacher: 4
  }
];
let teacher = [
  {
    id: 0,
    name: "Thành",
    age: 32
  },
  {
    id: 1,
    name: "Hải",
    age: 43
  },
  {
    id: 2,
    name: "Tâm",
    age: 29
  },
  {
    id: 3,
    name: "Hương",
    age: 51
  },
  {
    id: 4,
    name: "Thảo",
    age: 34
  }
];
let students = [
  { id: 0, name: "Minh", height: 131, class: 0 },
  { id: 1, name: "Thắng", height: 122, class: 0 },
  { id: 2, name: "Hoàng", height: 124, class: 0 },
  { id: 3, name: "Nguyên", height: 133, class: 0 },
  { id: 4, name: "Tùng", height: 137, class: 0 },
  { id: 5, name: "Hùng", height: 154, class: 1 },
  { id: 5, name: "Thành", height: 151, class: 1 }
];
function countStudent(classroom) {
  let findClass = classes.find(function(x) {
    return x.name === classroom;
  });
  let filteredStudent = students.filter(function(x){
    return x.class === findClass.id;
  });
  return filteredStudent;
}
console.log(countStudent("2A").length);

