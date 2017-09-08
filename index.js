var instagram = require('instagram');

var instagramTimelineMiddleware = function(options) {
  var client = instagram.createClient({
    client_id: options.clientId,
    client_secret: options.clientSecret
  });

  return function(req, res, next) {
    client.users.media('self', {access_token: options.accessToken, count: 10}, function(images, error, pagination) {
      if (error) return next(error);
      res.send({data: images});
    });
  };
};

module.exports = instagramTimelineMiddleware;
