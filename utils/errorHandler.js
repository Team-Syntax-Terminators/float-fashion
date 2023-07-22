export const errorHandler = (error) => {
  const { request, response } = error;
  if (response) {
    return response.data;
  } else if (request) {
    // request sent but no response received
    return {
      status: 503,
      message: "Server time out",
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return { message: "oops! something went wrong while setting up request" };
  }
};
