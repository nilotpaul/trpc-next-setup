const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.BASE_URL) return process.env.BASE_URL;
  return "http://localhost:3000";
};

export const getUrl = () => {
  return getBaseUrl() + "/api/trpc";
};
