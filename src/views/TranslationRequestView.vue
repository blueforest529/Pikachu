<<<<<<< Updated upstream
<template>
    <form v-on:submit="submitForm">
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="item"
      :counter="10"
      label="Item"
      required
    ></v-text-field>
    <button type="submit">submit</button>
  </form>
</template>

<script>
import { getDatabase, ref, child, get, set } from "firebase/database";

  export default {
    data: () => ({
      name: '',
      item: '',
      list : []
    }),
    mounted() {
        this.get()
    },
    computed: {
    },
    methods: {
        submitForm: function() {
            const db = this.$firebasedb;
            set(ref(db, '/request/0920'), {
                name: this.name,
                item: this.item
            });
        },
        get() {
            const dbRef = ref(this.$firebasedb);
            get(child(dbRef, `/request/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    this.list.push(snapshot.val());
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
=======
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
        console.log(this.$firebasedb);
        this.get()
    },
    methods: {
        get() {
            const dbRef = ref(this.$firebasedb);

            console.log(dbRef)

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
>>>>>>> Stashed changes
