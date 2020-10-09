const { Controller } = require('egg');




module.exports = DianpingController;
class DianpingController extends Controller {
  async getAlbum () {
    const { ctx } = this;
    const { query } = ctx;
    const url = `https://mapi.dianping.com/mapi/collect/getfavoralbumdetail.bin?nextstart=&type=0&albumid=${query.albumId}`;
    const body = await ctx.curl(url);
    const apiData = JSON.parse(body.data);
    ctx.body = await ctx.service.dianping.getAlbumInfo(apiData);
  };
}
