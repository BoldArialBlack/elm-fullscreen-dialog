export const sourcecodeA = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <el-button @click="value = true">open dialog</el-button>
    <elm-fullscreen-dialog
      :title="title"
      v-model="value"
      class="test-dialog"
      @visible-change="visibleChange"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. Arcu felis bibendum ut tristique
        et egestas quis. Elit pellentesque habitant morbi tristique senectus et. Libero enim sed faucibus turpis
        in eu. Non tellus orci ac auctor augue. Et netus et malesuada fames ac. Vitae auctor eu augue ut.
        Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Faucibus in ornare quam viverra
        orci. Mi in nulla posuere sollicitudin aliquam.</p>
      <p>Ornare suspendisse sed nisi lacus sed viverra. Proin libero nunc consequat interdum. Laoreet id donec
        ultrices tincidunt arcu non sodales. Quisque non tellus orci ac. Fusce id velit ut tortor pretium viverra
        suspendisse potenti. Iaculis nunc sed augue lacus viverra. Hac habitasse platea dictumst vestibulum. Metus
        dictum at tempor commodo ullamcorper a lacus vestibulum sed. Id consectetur purus ut faucibus pulvinar
        elementum integer enim. Felis eget nunc lobortis mattis aliquam. Odio facilisis mauris sit amet massa
        vitae tortor condimentum.</p>
      <p>
        Malesuada proin libero nunc consequat interdum varius. Est ullamcorper eget nulla facilisi etiam dignissim
        diam quis enim. Ultricies integer quis auctor elit sed. Sit amet nulla facilisi morbi tempus iaculis urna
        id volutpat. Placerat in egestas erat imperdiet sed euismod nisi porta. Odio facilisis mauris sit amet
        massa vitae tortor condimentum. Sed risus ultricies tristique nulla aliquet enim tortor at. Consequat
        mauris nunc congue nisi vitae suscipit tellus mauris. Diam sit amet nisl suscipit adipiscing bibendum est
        ultricies. Mauris pharetra et ultrices neque ornare aenean euismod elementum.
      </p>
      <p>
        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Lorem mollis aliquam ut
        porttitor leo. Enim sit amet venenatis urna cursus. Amet luctus venenatis lectus magna fringilla urna. Mi
        ipsum faucibus vitae aliquet nec ullamcorper. Hac habitasse platea dictumst quisque sagittis purus. Turpis
        massa sed elementum tempus. Augue interdum velit euismod in pellentesque. Tellus integer feugiat
        scelerisque varius morbi enim. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Enim diam
        vulputate ut pharetra. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Sit amet nulla
        facilisi morbi. Sed vulputate mi sit amet mauris. Eu scelerisque felis imperdiet proin fermentum leo vel.
        In mollis nunc sed id semper risus in. Vulputate mi sit amet mauris commodo. Vitae et leo duis ut diam
        quam nulla. Eleifend donec pretium vulputate sapien.
      </p>
      <p>
        Sed cras ornare arcu dui vivamus. Duis convallis convallis tellus id. Eget est lorem ipsum dolor sit amet
        consectetur. Urna nunc id cursus metus aliquam eleifend mi in nulla. Consectetur adipiscing elit
        pellentesque habitant morbi tristique. Mi sit amet mauris commodo quis. Tellus orci ac auctor augue mauris
        augue neque. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Consequat id porta nibh
        venenatis cras sed. Varius vel pharetra vel turpis nunc eget. Ultrices in iaculis nunc sed. Mi eget mauris
        pharetra et. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Sit amet porttitor eget
        dolor morbi.
      </p>
      <template slot="footer">
        <el-button @click="value = false">close</el-button>
      </template>
    </elm-fullscreen-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'FullScreenModal',
        value: false
      }
    },
    methods: {
      close() {
        console.log('before-close');
      },
      visibleChange(v) {
        console.log('change', v);
      }
    }
  }
</script>`

export const sourcecodeB = `<template>
  <div class="vd-demo__block vd-demo__block-2">
  <elm-fullscreen-dialog
    v-model="filters"
    :options="filterOptions"
    multiple
    @change="handleFilter"
  />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        filters: [],
        filterOptions: [{
          label: '公开项',
          value: 'public',
          disabled: true
        }, {
          label: '未公开项',
          value: 'private'
        }, {
          label: '租户内',
          value: 'within'
        }, {
          label: '租户外',
          value: 'outside',
          className: 'class-name-test'
        }]
      }
    },
    methods: {
      handleFilter(value) {
        console.log(value);
      }
    }
  }
</script>`

export const sourcecodeC = `<template>
<div class="vd-demo__block vd-demo__block-2">
  <elm-fullscreen-dialog
    v-model="filter"
    :options="filterOptions"
    disabled
    @change="handleFilter"
  />
</div>
</template>

<script>
  export default {
    data () {
      return {
        filter: '',
        filterOptions: [{
          label: '公开项',
          value: 'public',
          disabled: true
        }, {
          label: '未公开项',
          value: 'private'
        }, {
          label: '租户内',
          value: 'within'
        }, {
          label: '租户外',
          value: 'outside',
          className: 'class-name-test'
        }]
      }
    },
    methods: {
      handleFilter(value) {
        console.log(value);
      }
    }
  }
</script>`

export const sourcecodeD = `<template slot="source">
<div class="vd-demo__block vd-demo__block-2">
  <elm-fullscreen-dialog
    v-model="filter"
    :options="filterOptions"
    @change="handleFilter"
  >
    筛选
  </elm-fullscreen-dialog>
</div>
</template>
<script>
  export default {
    data () {
      return {
        filter: '',
        filterOptions: [{
          label: '公开项',
          value: 'public',
          disabled: true
        }, {
          label: '未公开项',
          value: 'private'
        }, {
          label: '租户内',
          value: 'within'
        }, {
          label: '租户外',
          value: 'outside',
          className: 'class-name-test'
        }]
      }
    },
    methods: {
      handleFilter(value) {
        console.log(value);
      }
    }
  }
</script>`

export const sourcecodeE = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <elm-fullscreen-dialog
      v-model="filter"
      :options="filterOptions"
      :render-content="renderContent"
      @change="handleFilter"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        filter: '',
        filterOptions: [{
          label: '公开项',
          value: 'public',
          disabled: true
        }, {
          label: '未公开项',
          value: 'private'
        }, {
          label: '租户内',
          value: 'within'
        }, {
          label: '租户外',
          value: 'outside',
          className: 'class-name-test'
        }]
      }
    },
    methods: {
      handleFilter(value) {
        console.log(value);
      },
      renderContent(h, data) {
        return (<span>自定义渲染_{data.label}</span>);
      }
    }
  }
</script>
`