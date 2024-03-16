import axios from "axios";

// export const callExternalApi = async (options) => {
//   try {
//     const response = await axios(options.config);
//     const { data } = response;

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error;

//       const { response } = axiosError;

//       let message = "http request failed";

//       if (response && response.statusText) {
//         message = response.statusText;
//       }

//       if (axiosError.message) {
//         message = axiosError.message;
//       }

//       if (response && response.data && response.data.message) {
//         message = response.data.message;
//       }

//       return {
//         data: null,
//         error: {
//           message,
//         },
//       };
//     }

//     return {
//       data: null,
//       error: {
//         message: error.message,
//       },
//     };
//   }
// };

export const callMercariApi = async () => {
  const url =
    "https://postalservice-flask-api.vercel.app/?site=mercari&keyword=junya&size=XL";

  try {
    const response = await axios.request(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
