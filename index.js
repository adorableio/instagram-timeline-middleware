var instagram = require('instagram-node');

var instagramTimelineMiddleware = funtion(options) {
  var client = new instagram.instagram({
    client_id: options.client_id,
    client_secret: options.client_secret
  });

  return function(req, res, next) {
    client.user_media_recent('adorableio', [10], function(err, medias, pagination, remaining, limit) {
      console.log(this);
    });
  };
};

module.exports = instagramTimelineMiddleware;
