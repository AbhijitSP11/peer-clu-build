module.exports = {
  routes: [
    {
      method: "POST",
      path: "/booking/pretransaction",
      handler: "custom.create",
    },
    {
      method: "POST",
      path: "/booking/confirm",
      handler: "custom.confirm",
    },
  ],
};
