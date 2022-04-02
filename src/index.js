import Tree from './el-tree/tree.vue';
import './theme-chalk/index.scss';

/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
