/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
            test: /\.+(js|jsx)$/,
            include: /node_modules[\\/]iconview/,
            use: defaultLoaders.babel,
        });
        return config;
    },
}

module.exports = nextConfig
