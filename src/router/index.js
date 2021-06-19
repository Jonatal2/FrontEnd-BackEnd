import { createRouter, createWebHistory } from 'vue-router';
import Tugas from '../views/transaksi/tugas.vue';
import HelloWorld from '../components/HelloWorld.vue';
import sarim from '../views/transaksi/sarimie.vue'

const routes = [
    // {
    //     path : '/tugas2',
    //     name : 'transaksi.tugas2',
    //     component:()=> import('../views/transaksi/tugas2.vue')
    // },
    {
        path : '/tugas',
        name : 'transaksi.tugas',
        component:Tugas
    },
    {
        path : '/bebas',
        name : 'transaksi.bebas',
        component:HelloWorld
    },
    {
        path : '/mie',
        name : 'transaksi.mie',
        component:sarim
    },
    // {
    //     path : '/tugas4',
    //     name : 'transaksi.tugas4',
    //     component:()=> import('../views/transaksi/tugas4.vue')
    // }
];
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router;