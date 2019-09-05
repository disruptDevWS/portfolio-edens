const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://mattedens.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://mattedens.herokuapp.com",
  "process.env.CLIENT_ID": "ZUZKPfQK153aIWM5KBcAcl4uzlCeQo0X"
};
