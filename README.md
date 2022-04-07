# vue-element-tree

## 简介

`vue-element-tree` 是从 [element-ui](https://element.eleme.cn/#/zh-CN/component/tree) 拆出来的一款独立的树形图组件

## 安装

```
npm i vue-element-tree -S
```

## 引入

```
import ElTree from 'vue-element-tree';
import 'vue-element-tree/dist/vue-element-tree.css';

export default {
  components: {
    ElTree
  }
}
```

## 示例

```
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

<script>
import ElTree from 'vue-element-tree';
import 'vue-element-tree/dist/vue-element-tree.css';

export default {
  components: {
    ElTree
  },
  data() {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
```

## API

[文档](https://element.eleme.cn/#/zh-CN/component/tree#attributes)
