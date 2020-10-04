import path from 'path';

const config = {
    server: {
        port: process.env.PORT || 3000,
        host: 'localhost'
    },

    client: path.resolve(__dirname, '../render'),
    assets: path.resolve(__dirname, '../render/assets'),
    dist: path.resolve(__dirname, '../dist'),
};

export default config;
