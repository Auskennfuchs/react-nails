const path = require("path");

module.exports = async ({ config }) => {
    config.module.rules.unshift({
        test: /\.stories\.js?$/,
        include: path.resolve(__dirname, "../src"),
        loaders: [
            {
                loader: require.resolve("@storybook/source-loader"),
                options: {
                    prettierConfig: {
                        tabWidth: 2,
                        trailingComma: "es5",
                    },
                },
            },
        ],
        enforce: "pre",
    });

    return config;
};