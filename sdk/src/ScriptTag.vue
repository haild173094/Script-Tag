<template>
<AppProvider>
    <div class="script-tag">
      
        <Popover
            :active="active"
            aria-haspopup="false"
            sectioned
            @close="toggleActive"
        >
            <template #activator>
                <Button :disclosure="false" @click="toggleActive"> Show </Button>
            </template>
            <template #content>
                <div class="popup-content">
                    <BaseLayout></BaseLayout>
                </div>
               
            
            <!-- <FormLayout>
                <Select :options="options" v-model="selectedValue">
                <template #label>Show all customers where:</template>
                </Select>
                <TextField :value="tagValue" @change="handleTagValueChange" autoComplete="off">
                <template #label>Tags</template>
                </TextField>
                <Button size="slim">Add filter</Button>
            </FormLayout> -->
            </template>
        </Popover>
        <!-- <router-view></router-view> -->
        ~
    </div>
</AppProvider>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import{AppProvider,Popover,FormLayout,Select,TextField,Button} from "@qikify/polaris-vue";
import BaseLayout from './components/BaseLayout.vue';

let active = ref(false);
let options = ref([
    {
        label: ('label'), 
        value: ('value')
    },
    {
        label: ('label2'), 
        value: ('value2')
    },
    {
        label: ('label3'), 
        value: ('value3')
    }
    
    ]);
let selectedValue = ref('');
let tagValue = ref('');

//   data() {
//     return {
//       active: true,
//       options: [{label: 'Tagged with', value: 'Tagged with'}],
//       selectedValue: 'Tagged with',
//       tagValue: '',
//     };
  
    function  toggleActive() {
        active.value = !active.value;
        console.log(active);
    };
    function handleTagValueChange(value: any) {
        tagValue = value;
    };
</script>

<style scoped>
    .script-tag {
         position: fixed;
         bottom: 10px;      
         left: 100px;
         z-index: 109999999;
    }
    .popup-content {
    height: 400px;
}
</style>
