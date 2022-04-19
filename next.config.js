const theme = require('shiki/themes/github-light.json')
const { remarkCodeHike } = require('@code-hike/mdx')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]]
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})

module.exports = nextConfig
