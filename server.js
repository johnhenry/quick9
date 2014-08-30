var port = process.env.PORT || 80;
var connect = var connect = require('connect');
connect()
.use(require("serve-static")("."))
.listen(port || 8080 );
