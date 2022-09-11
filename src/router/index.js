import Vue from "vue";
import Router from "vue-router";
import AboutView from '../views/AboutView.vue'
import CheckResourcesView from '../views/CheckResourcesView.vue'
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
            path: '/checkresources',
            name: 'checkresources',
            component: CheckResourcesView
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
