/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  // output: 'export',
  // basePath: '', если будут указаны пути, не забудьте проверить их в настройках вебака ниже
  // assetPrefix: '',
  images: {
    unoptimized: true
  },
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.(mp4|MP4)$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash].[ext]',
        },
      }],
    });

    return config;
  },
};

export default nextConfig;
