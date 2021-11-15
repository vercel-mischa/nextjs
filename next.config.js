module.exports = {
    async redirects() {
    return [
      {
        source: '/vercel',
        destination: 'https://vercel.com',
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
}
