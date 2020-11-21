const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://budget-buddy-296100.wm.r.appspot.com"
    : "http://localhost:3000";

export default baseUrl;
