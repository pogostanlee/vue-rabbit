import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
export function userCategory() {
  //定义接收数据模型
  const categoryData = ref({});
  //获取路由
  const route = useRoute();
  //获取路由参数
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });
  //路由变化重新请求
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
