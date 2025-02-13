const sleep = async (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default sleep;
