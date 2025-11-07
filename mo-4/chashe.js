const expensiveTask = (id) => {
  console.log("runt the expensive for:", id);
  return {
    id: id,
    data: "some data for id:${id}",
    timestamp: new Date().getTime(),
  };
};

//call
const getData = (id) => {
  return expensiveTask(id);
};
console.log(getData(123));
