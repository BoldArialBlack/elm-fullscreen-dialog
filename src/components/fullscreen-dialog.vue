<template>
  <el-dialog
    ref="dialog"
    :visible.sync="dialogVisible"
    :show-footer="false"
    v-bind="$attrs"
    class="elm-fullscreen-dialog"
    v-on="$listeners"
    @open="handleOpen"
    @close="handleClose"
  >
    <template slot="title">
      <slot name="title">
        <!-- <gs-icon
          name="arrow-left-o"
          type="button"
          class="return-btn"
          @click="(e) => { dialog && dialog.cancel(e) }"
        />
        <span class="seperator" />
        <span
          v-if="title"
          class="title"
        >
          {{ title }}
        </span> -->
        <el-page-header @back="handleBack" :content="title" />
      </slot>
    </template>
    <slot />
    <template
      v-if="hasFooterSlot"
      slot="footer"
    >
      <slot name="footer" >
      </slot>
    </template>
  </el-dialog>
</template>


<script>
import { Dialog, PageHeader } from 'element-ui';
export default {
  components: {
    [Dialog.name]: Dialog,
    [PageHeader.name]: PageHeader
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dialogVisible: this.value,
      dialog: null
    };
  },

  computed: {
    title() {
      return this.$attrs['title'];
    },
    hasFooterSlot() {
      return this.$slots['footer'];
    }
  },

  watch: {
    value(v) {
      this.dialogVisible = v;
    }
  },

  mounted() {
    this.dialog = this.$refs.dialog;
    console.log(this.dialog, 'dialog')
  },

  methods: {
    handleBack() {
      this.dialog && this.dialog.handleClose();
      console.log(this.dialog.handleClose, 'handle')
    },

    handleOpen(...rest) {
      this.$emit('open', rest);
      // console.log('open')
      this.visibleChange(true);
    },

    handleClose(...rest) {
      this.$emit('close', rest);
      // console.log('close')
      this.visibleChange(false);
    },

    visibleChange(visible) {
      this.$emit('input', visible);
      this.$emit('update:value', visible);
      this.$emit('update:visible', visible);
      this.$emit('visible-change', visible);
    }
  }
};
</script>
