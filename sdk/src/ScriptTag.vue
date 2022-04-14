<template>

    <div class="script-tag">
      

<!--         
            <template #activator>
                <Button :disclosure="false" @click="toggleActive"> Show </Button>
            </template>
            <template #content>
                <div class="popup-content">
                    <BaseLayout></BaseLayout>
                </div> -->
                <div class="collapse py-3 popup-content" id="collapseTarget">
                     <!-- This is the toggle-able content! -->
                     <BaseLayout></BaseLayout>
                </div>
                <button 
                class="btn btn-primary" 
                data-bs-target="#collapseTarget" 
                data-bs-toggle="collapse"
                >
                    LoyaltyPoint: {{customerPoint}}
                </button>
                
            
    
    </div>

</template>

<script setup>
import {ref} from 'vue';
import{AppProvider,Popover,FormLayout,Select,TextField,Button} from "@qikify/polaris-vue";
import BaseLayout from './components/BaseLayout.vue';
import axios from 'axios';
import AppConfig from './configs/app.js'

let active = ref(false);
    function  toggleActive() {
        active.value = !active.value;
        console.log(active.value);
    };
    function handleTagValueChange(value) {
        tagValue = value;
    };
    let id_customer = window.ShopifyAnalytics.meta.page.customerId;
    let shop = window.Shopify.shop;
    let customerPoint = ref(0);
    console.log("id customer: ",id_customer);
    const getCustomerInfo = () => {
        axios.get(`${window.shopUrl}/apps/oe-loyalty/customers/${id_customer}`).then(data => {
            console.log(data);
            customerPoint.value = data.data.customer.loyalty_point;
        })
    }
    const getDiscountCodeOfShop = ()=>{
        axios.get(`${AppConfig.PORTAL_SERVER}/api/discount-types?shop=${shop}`).then(data => {
            console.log("discount code:",data);
        })
    }
    
    getCustomerInfo();
    getDiscountCodeOfShop();
</script>

<style scoped>
/* @import '@qikify/polaris-vue/dist/style.css'; */
    .script-tag {
         position: fixed;
         bottom: 10px;      
         left: 100px;
         z-index: 109999999;
    }
    .popup-content {
    width: 383px;
    height: 400px;
    background-color: #a175ff;
    margin-bottom: 5px;
}
</style>
