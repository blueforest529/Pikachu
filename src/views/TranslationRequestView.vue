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
