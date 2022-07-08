const getFromApi = async (url) => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then(res)
      .catch(rej);
  });
};

// EndPoints

const getAllArticles = async () => {
  let data = await getFromApi(
    "https://api.github.com/repos/AryaDev-js/aryadev-js.github.io/contents/articles/"
  );
  return data.map((el) => ({
    name: el.name,
    path: `https://aryadev-js.github.io/${el.path}`,
  }));
};
