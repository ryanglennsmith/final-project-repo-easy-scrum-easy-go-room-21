module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },

  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};
