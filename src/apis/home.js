import httpInstance from "@/utils/http";
//获取轮播图
export function getBannerAPI(params = {}) {
  //默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "home/banner",
    params: {
      distributionSite,
    },
  });
}
export function findNewAPI() {
  return httpInstance({
    url: "home/new",
  });
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: "home/hot",
  });
};
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
