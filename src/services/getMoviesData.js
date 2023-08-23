// Service method to get all the trailers data.
export const getMockData = async () => {
  return new Promise((resolve, reject) => {
    fetch("https://in.bmscdn.com/m6/static/interview-mock/data.json")
      .then((response) => {
        let trailers = response.json();
        resolve(trailers);
      })
      .catch((error) => {
        //handle the error here
        console.log("Error fetching trailers", error);
        reject(error);
      });
  });
};
