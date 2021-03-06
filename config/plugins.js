if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.PROVIDER_CLOUD_NAME,
        api_key: process.env.PROVIDER_API_KEY,
        api_secret: process.env.PROVIDER_API_SECRET,
      },
    },
  });

  // module.exports = {
  //   provider: "cloudinary",
  //   providerOptions: {
  //     cloud_name: process.env.PROVIDER_CLOUD_NAME,
  //     api_key: process.env.PROVIDER_API_KEY,
  //     api_secret: process.env.PROVIDER_API_SECRET,
  //   },
  //   actionOptions: {
  //     upload: {},
  //     delete: {},
  //   },
  // };
} else {
  // to use the default local provider you can return an empty configuration
  module.exports = {};
}
