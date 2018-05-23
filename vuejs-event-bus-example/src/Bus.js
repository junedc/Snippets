let Bus = {}

Bus.install = (Vue, options) =>  {
    Vue.prototype.$bus = new Vue()
}

export default Bus
