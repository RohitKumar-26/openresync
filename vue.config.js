const config = require('./lib/config').buildUserConfig()

module.exports = {
  devServer: {
    port: 3461,
    host: 'openresync.test',
    proxy: {
      '.*': {
        target: 'http://openresync.test:' + config.server.port,
        ws: true,
      },
    },
  },
}
