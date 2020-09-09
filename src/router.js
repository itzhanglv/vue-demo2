import VueRouter from 'vue-router'
import AddCard from './components/AddCard.vue'

var router=new VueRouter({
  routes:[
    {path:'/1',component:AddCard}
  ]
})
export default router