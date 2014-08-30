var port = process.env.PORT || 80;
var connect = require('connect');
connect()
.use(require("serve-static")("public"))
.listen(port);
