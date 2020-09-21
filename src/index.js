import ElmFullscreenDialog from './components/fullscreen-dialog.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component('ElmFullscreenDialog', ElmFullscreenDialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('ElmFullscreenDialog', ElmFullscreenDialog)
}

ElmFullscreenDialog.install = install

export default ElmFullscreenDialog
