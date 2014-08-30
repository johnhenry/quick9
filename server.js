var port = process.env.PORT || 80;
var connect = require('connect');
connect()
.use(require("serve-static")("."))
.listen(port || 8080 );
