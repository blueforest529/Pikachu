import Vue from "vue";
import Router from "vue-router";
import AboutView from '../views/AboutView.vue'
import CheckResourcesVolt from '../views/CheckResourcesVolt.vue'
import CheckResourcesAudit from '../views/CheckResourcesAudit.vue'
import CheckResourcesCtrl from '../views/CheckResourcesCtrl.vue'
import CheckResourcesMsg from '../views/CheckResourcesMsg.vue'
import HowToUseView from '../views/HowToUseView.vue'
import TranslationRequestView from '../views/TranslationRequestView.vue'

Vue.use(Router);

const redirectAuth = () => (from, to, next) => {
    if (store.state.auth.isAuth) return next();
    next("/login");
};

export default new Router({
    routes: [
          {
            path: '/',
            name: 'about',
            component: AboutView
          },
          {
            path: '/checkresourcesvolt',
            name: 'checkresourcesvolt',
            component: CheckResourcesVolt
          },
          {
            path: '/checkresourcesaudit',
            name: 'checkresourcesaudit',
            component: CheckResourcesAudit
          },
          {
            path: '/checkresourcesctrl',
            name: 'checkresourcesctrl',
            component: CheckResourcesCtrl
          },
          {
            path: '/checkresourcesmsg',
            name: 'checkresourcesmsg',
            component: CheckResourcesMsg
          },
          {
            path: '/howtouse',
            name: 'howtouse',
            component: HowToUseView
          },
          {
            path: '/translationrequest',
            name: 'translationrequest',
            component: TranslationRequestView
          },
    ]
});
