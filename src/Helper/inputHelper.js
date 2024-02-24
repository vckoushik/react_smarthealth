export const inputHelper = (
    e,
    data
  ) => {
    const tempData = {...data };
   
    tempData[e.target.name] = e.target.value;
    return tempData;
  };
