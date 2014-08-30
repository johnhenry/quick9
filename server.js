var port = process.env.PORT || 80;
var connect = require('connect');connect().use(connect.static(process.argv[3] || "public")).listen(port);
