export const prepareHeaders = (headers: any) => {
  headers.set("accept", "application/json");

  return headers;
};

export const PhotoPath = (path: any) =>
  process.env.NEXT_PUBLIC_API_IMAGES + path;
