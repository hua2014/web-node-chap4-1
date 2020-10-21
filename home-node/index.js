const htutil = require('../htutil')

let get = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  res.end(htutil.page("Home", htutil.navbar(), `
     <p>Welcome to here!</p>
  `));

};

exports.get = get;