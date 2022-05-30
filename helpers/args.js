const getArgs = (args) => {
  const res = {};

  const [executer, file, ...rest] = args;

  rest.forEach((element, idx, array) => {
    if(element.charAt(0) == '-') {
      if(idx == array.length - 1) {
        res[element.substring(1)] = true;
      } else if(array[idx + 1].charAt(0) != '-') {
        res[element.substring(1)] = array[idx + 1];
      } else {
        res[element.substring(1)] = true;
      }
    }
  });

  return res;
}

export {getArgs}