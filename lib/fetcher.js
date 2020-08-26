const fetcher = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          reject("issue fetching data");
        }
        if (response.status === 204) return resolve();
        const json = response.json();
        resolve(json);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export default fetcher;
