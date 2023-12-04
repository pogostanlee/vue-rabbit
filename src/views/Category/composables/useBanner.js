import { ref } from "vue";
import { getBannerAPI } from "@/apis/home";
import { onMounted } from "vue";
export function useBanner() {
  //轮播图
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    console.log(res);
    bannerList.value = res.result;
  };
  onMounted(() => {
    getBanner();
  });
  return {
    bannerList,
  };
}
