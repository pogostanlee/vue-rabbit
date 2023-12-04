//插件全局处理
import Sku from "@/components/XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    app.component("XtxSku", Sku);
  },
};
