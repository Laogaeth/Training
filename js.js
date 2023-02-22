const toDos = [
  {
    id: 1,
    text: "Buy milk",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Gaming",
    isCompleted: true,
  },
];

//converting to json

const toDosJson = JSON.stringify(toDos);
console.log(toDosJson);
