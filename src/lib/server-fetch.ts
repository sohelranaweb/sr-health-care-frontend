// const BACKEND_API_URL =
//   process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5000/api/v1";

// const serverFetchHelper = async (
//   endpoint: string,
//   options: RequestInit,
// ): Promise<Response> => {
//   const { headers, ...restOptions } = options;
//   const accessToken = await getCookie("accessToken");

//   const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
//     headers: {
//       Cookie: accessToken ? `accessToken={accessToken}` : "",
//       ...headers,
//     // },
//     ...restOptions,
//   });
//   return response;
// };
