const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));
const components = {};

modules.forEach(item => {
  components[item.name.replace(/o-/, '')] = item;
});

// published components
import Loadmore from 'mint-loadmore';
require('mint-loadmore/lib/index.css');
import Actionsheet from 'mint-actionsheet';
require('mint-actionsheet/lib/index.css');
import Popup from 'mint-popup';
require('mint-popup/lib/index.css');
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { MintRange } from 'mint-range';
require('mint-range/dist/index.css');
import Picker from 'mint-picker';
require('mint-picker/lib/index.css');
import { MintProgress } from 'mint-progress';
require('mint-progress/dist/index.css');

// published services
import Toast from 'vue-toast-mobile';
require('vue-toast-mobile/lib/index.css');
import Indicator from 'mint-indicator';
require('mint-indicator/lib/index.css');
import MessageBox from 'babel!vue-msgbox/src';
require('./style/message-box.css');

// published directives
import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    Vue.component('o-loadmore', Loadmore);
    Vue.component('o-actionsheet', Actionsheet);
    Vue.component('o-popup', Popup);
    Vue.component('o-swipe', Swipe);
    Vue.component('o-swipe-item', SwipeItem);
    Vue.component('o-range', MintRange);
    Vue.component('o-picker', Picker);
    Vue.component('o-progress', MintProgress);
    Vue.use(infiniteScroll);
    Vue.use(lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox
}, components);
