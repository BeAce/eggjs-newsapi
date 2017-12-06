exports.keys = "shiminbeace";
exports.apiKey = "fd4ed877fd994b3698164cd5cf7c523c";

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  },
}

exports.news = {
  pageSize: 5,
  serverUrl: "https://newsapi.org/v2"
}


exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
