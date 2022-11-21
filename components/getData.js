const getdata = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
//   append(data);
  // console.log(data);
  return data;
};
export{getdata};
