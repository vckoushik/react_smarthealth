export const inputHelper = (
    e,
    data
  ) => {
    const tempData = { ...data };
    if(e.target.value)
        tempData[e.target.name] = e.target.value;
    return tempData;
  };
