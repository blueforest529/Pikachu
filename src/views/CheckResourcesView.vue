<template>
      <v-data-table
        :headers="headers"
        :items="list"
        item-key="한국어"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import { getDatabase, ref, child, get, set } from "firebase/database";

  export default {
    data : ()=> ({
        headers: [
          {text: '버전', value: '버전'},
          {text: '위치', value: '위치'},
          { text: '한국어', value: '한국어' },
          { text: '영어', value: '영어' },
          { text: '일본어', value: '일어' },
          { text: '러시아어', value: '러시아어' },
          { text: '우크라이나어', value: '우크라이나어' },
        ],
        list : []
    }),
    mounted() {
        this.get()
    },
    methods: {
        get() {
            const dbRef = ref(this.$firebasedb);

            get(child(dbRef, `/volt`)).then((snapshot) => {
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
        }
    },
  }
</script>
