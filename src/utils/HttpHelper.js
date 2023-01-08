const HttpHelper = async (url, request) => {
   let finalResponse = "";
   let statusCode = 0;
   if (request) {
      const response = await fetch(url, request);
      if (response) {
         statusCode = response.status;
         finalResponse = await response.json();
      }
   }
   return { status: statusCode, response: finalResponse };
};

export default HttpHelper;
