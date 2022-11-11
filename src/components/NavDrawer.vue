<template>
    <div>
        <v-navigation-drawer app>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        리소스
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list class="red_list">
                <v-list-item-group >
                    <v-list-item
                        v-for="(m, index) in menus"
                        :key="index"
                        link
                        :to="{path:m.to}"
                    >
                        <v-list-item-icon>
                        <v-icon>{{ m.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>{{ m.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data: () => ({ 
        drawer: false,
        icon : 'mdi-chevron-right',
        menus: [
            {
                icon: 'mdi-view-dashboard',
                text: '기본정보',
                to: '/'
            },
            {
                icon: 'mdi-needle',
                text: 'Volt',
                to: '/checkresourcesvolt'
            },
            {
                icon: 'mdi-needle',
                text: 'Audit',
                to: '/checkresourcesaudit'
            },
            {
                icon: 'mdi-needle',
                text: 'Msg',
                to: '/checkresourcesmsg'
            },
            {
                icon: 'mdi-needle',
                text: 'Ctrl',
                to: '/checkresourcesctrl'
            },
            {
                icon: 'mdi-file-chart',
                text: '번역요청',
                to: '/translationrequest'
            },
            {
                icon: 'mdi-alien-outline',
                text: '리소스 작성 가이드',
                to: '/howtouse'
            },
        ],
        model: [{to: '/'}],
    }),
    methods: {
       
    }
  }
</script>

<style>
.lsls {
    color:lime;
}

.red_list .v-list-item-group .v-list-item--active{
  background-color: #367fc4;
  color: white;
}
</style>