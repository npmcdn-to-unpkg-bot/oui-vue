import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));
const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/o-/, ''));
  components[name] = item;
});

// published components
import Loadmore from './components/loadmore.js';
import Swipe from './components/swipe.js';
import SwipeItem from './components/swipe-item.js';
import Range from './components/range.js';
import Picker from './components/picker.js';
import Progress from './components/progress.js';

// published services
import Toast from './components/toast.js';
import Indicator from './components/indicator.js';
import MessageBox from './components/message-box.js';

// published directives
import InfiniteScroll from './components/infinite-scroll.js';
import Lazyload from './components/lazyload.js';

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Range.name, Range);
    Vue.component(Picker.name, Picker);
    Vue.component(Progress.name, Progress);
    Vue.use(InfiniteScroll);
    Vue.use(Lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox,
  Loadmore,
  Swipe,
  SwipeItem,
  InfiniteScroll,
  Lazyload,
  Range,
  Picker,
  Progress
}, components);
