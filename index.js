const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8089

const app = express()

app.use(history())
app.use(serveStatic(__dirname + '/target/dist'))
app.listen(port)