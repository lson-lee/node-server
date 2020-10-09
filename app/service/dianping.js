const { Service } = require('egg');

class DianpingService extends Service {

  getAlbumInfo (data) {
    const {
      records, // 记录,对应app里的两个tab
      favorNavItemList, // 收藏类型,标记有哪些类型的收藏
      favorAlbumItem, // 专辑基本信息
    } = data;
    const shopList = this.getShopList(records);
    const albumInfo = this.getAlbumBasic(favorAlbumItem);
    return {
      shopList,
      albumInfo,
    };
  }

  // 从接口信息中获取店铺列表
  getShopList (records) {
    const shopList = [];
    records.map(record => {
      const { collectItemList } = record;
      if (Array.isArray(collectItemList) && record.showType === 1) {
        // 处理有数据的商家收藏情况
        collectItemList.map(collect => {
          const { shopId, distance, argPrice, title, image, lat, lng, shopPowerNum, shopUuid } = collect;
          shopList.push({ shopId, distance, argPrice, title, image, lat, lng, shopPowerNum, shopUuid });
        });
      }
      // TODO: 评论收藏还没处理哦
    });
    return shopList;
  }

  // 从接口信息中获取专辑信息
  getAlbumBasic (favorAlbumItem) {
    const { albumId, title, shopCount, contentCount, basicImage, authorInfo } = favorAlbumItem;
    return { albumId, title, shopCount, contentCount, basicImage, authorInfo };
  }
}

module.exports = DianpingService;
