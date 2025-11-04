module.exports = (config, options) => {
    // Ensure fallbacks are empty — removes node polyfills
    config.resolve.fallback = {
        ...config.resolve.fallback,
        global: false,
        process: false,
        buffer: false
    };

    // Remove NodePolyfillPlugin and ProvidePlugin — not needed
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'NodePolyfillPlugin' && plugin.constructor.name !== 'ProvidePlugin');

    // Optional: Enable Hot Module Replacement (only in dev)
    if (options.configuration !== 'production' && options.configuration !== 'web-production') {
        config.devServer = {
            ...config.devServer,
            hot: true,
            liveReload: true
        };
    }

    return config;
};
