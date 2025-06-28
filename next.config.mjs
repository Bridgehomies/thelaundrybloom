const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // if you're using the /app directory
  },
  swcMinify: true,
}

const createConfig = async () => {
  const nextPwa = await import('next-pwa')
  const withPWA = nextPwa.default

  return withPWA({
    ...baseConfig,
    pwa: {
      dest: 'public',
      disable: isDev,
      register: true,
      skipWaiting: true,
    },
  })
}

export default createConfig()
