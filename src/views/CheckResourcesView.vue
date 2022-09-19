<template>
      <v-data-table
        :headers="headers"
        :items="list"
        item-key="한국어"
        hide-default-footer
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import { getDatabase, ref, child, get, set } from "firebase/database";

  export default {
    data : ()=> ({
        headers: [
          {
            text: '버전',
            value: '버전',
          },
          { text: '키 값', value: '키 값' },
          { text: '한국어', value: '한국어' },
          { text: '영어', value: '영어' },
          { text: '일본어', value: '일어' },
          { text: '러시아어', value: '러시아어' },
        ],
        list : []
    }),
    mounted() {
        // this.list = this.resource_list
        // console.log(this.list)
        this.get()
    },
    methods: {
        get() {
            const dbRef = ref(this.$firebasedb);

            get(child(dbRef, `/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.val().forEach(v => {
                        this.list.push(v);
                    });
                    console.log(this.list)
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });


            // const snapshot = this.$firebase.firestore().collection('/').get();
            
            // snapshot.forEach(v => {
            //     this.list.push(v.data())
            // });
            
            
        }
    },
  }
</script>
