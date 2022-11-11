<template>
  <div style="display: flex; flex-wrap: wrap; flex-direction: row; align-content: flex-start; ">
    <v-card class="mr-1 mt-2" outlined max-width = "400px" v-for="i in items" >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title v-html="i.title" class="text-h6">
        </v-list-item-title>
        <v-list-item-subtitle v-html="i.contents" class="">
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </div>
  
</template>
  
<script>
  export default {
    name: 'Howtouse',
    data : () => ({
      items : [
        {
          title : 'WAPPLES 읽는 방법',
          contents : 'O) 와플  X) 와플스, 와플즈 <br> EX) WAPPLES을 선택하세요.'
        },
        {
          title : '"연결 상태가 올바르지 않다"는 <br> a + b의 의미를 모두 포함',
          contents : 'a. {특정 장비(WAPPLES)}에 접속할 수 없는 경우 <br> b. 네트워크 상태가 원활하지 않을 경우'
        },
        {
          title : 'HA 및 동기화 설정 시 용어 통일',
          contents : 'O) WCC: 기준/대상 <br> X) WMC: 기준/상대'
        },
        {
          title : '"기준 장비"로 통일',
          contents : 'O) 기준 장비 <br> X) 기준 WAPPLES 장비'
        },
        {
          title : '"WAPPLES"로 통일',
          contents : 'O) WAPPLES <br> X) WAPPLES 장비, WAPPLES 항목'
        },
        {
          title : '"WAPPLES Control Center"로 통일',
          contents : 'O) WAPPLES Control Center <br> X) WAPPLES CC, WCC'
        }
      ]
    })
  }
</script>
<style>

</style>