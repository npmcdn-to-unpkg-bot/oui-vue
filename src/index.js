import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', false, /\.vue$/));
const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/o-/, ''));
  components[name] = item;
});

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
    Vue.use(InfiniteScroll);
    Vue.use(Lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload
}, components);
