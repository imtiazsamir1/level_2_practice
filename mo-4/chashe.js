const dataCache = new Map();

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
  if (dataCache.has(id)) {
    console.log("cache hit,Id:", id);
    return dataCache.get(id);
  }
  //if no find
  console.log("cache misss,Id:", id);
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};
console.log(dataCache);
console.log(getData(1245));
console.log(getData(1245));
console.log(dataCache);
