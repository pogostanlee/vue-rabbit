import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layout";

export const useCategoryStore = defineStore('category', () => {
    //导航列表
    //获取业务数据
    //数据赋值
    const categoryList = ref([]);
    const getCategory = async () => {
        const res = await getCategoryAPI();
        console.log(res);
        categoryList.value = res.result;
    };
    return{
        categoryList,
        getCategory
    }

})
