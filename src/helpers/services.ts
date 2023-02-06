const getData = async (url: string): Promise<any> => {
  const res = await fetch(url);

  return await res.json();
};

const postData = async (url: string, data: object): Promise<any> => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return await res.json();
};

export { getData };
export { postData };
