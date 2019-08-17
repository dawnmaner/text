module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.113.117:8080',
                changeOrigin: true,
                pathRewrite: {
                    //^是开始,api开头的url改写成一个斜杠/
                    '^/api/coding/': '/'
                }
            }
        }
    }
}