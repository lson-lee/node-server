'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/login', 'home.login');
  router.get('/getUrl', 'home.getUrl');
  router.get('/dianping/getAlbum', controller.dianping.getAlbum);
};
