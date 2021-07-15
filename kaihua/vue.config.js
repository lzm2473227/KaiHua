const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            // 别名
            alias: {
                '@': path.resolve(__dirname, './src'),
                // assets: path.resolve(__dirname, './src/assets'),
                // components: path.resolve(__dirname, './src/components'),
                // style: path.resolve(__dirname, './src/style'),
                // utils: path.resolve(__dirname, './src/utils')
            }
        }
    },
    //   css: {
    //     loaderOptions: {
    //       sass: {
    //         prependData: `
    //           @import "~@/style/variables.scss";
    //           @import "~@/style/mixin.scss";
    //         `
    //       }
    //     }
    //   }
};