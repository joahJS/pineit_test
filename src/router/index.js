import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'


const routes = [

    {
        path: '/',
        name: 'Main',
        component: Main
    }, // Nomal Route
    {
        path: '/uc',
        name: 'UnderConstruction',
        component: () => import( /* webpackChunkName: 'UnderConstruction' */ '@/views/UnderConstruction.vue' )
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import( /* webpackChunkName: 'Portfolio' */ '@/views/Portfolio.vue' )
    },
    {
        path: '/portfolio/:category/:id',
        name: 'PortfolioDetail',
        component: () => import( /* webpackChunkName: 'PortfolioDetail' */ '@/views/PortfolioDetail.vue' )
    },
    {
        path: '/solutiondev',
        name: 'SolutionDev',
        component: () => import( /* webpackChunkName: 'SolutionDev' */ '@/views/SolutionDev.vue' )
    },

    {
        path: '/sitedev',
        name: 'SiteDev',
        component: () => import( /* webpackChunkName: 'SiteDev' */ '@/views/SiteDev.vue' )
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import( /* webpackChunkName: 'Map' */ '@/views/Map.vue' )
    },
    {
        path: '/certificate',
        name: 'Certificate',
        component: () => import( /* webpackChunkName: 'Certificate' */ '@/views/Certificate.vue' )
    },
    {
        path: '/history',
        name: 'History',
        component: () => import( /* webpackChunkName: 'History' */ '@/views/History.vue' )
    },

     // 고객센터

    {
        path: '/notice',
        name: 'Notice',
        component: () => import( /* webpackChunkName: 'Notice' */ '@/views/CsNotice.vue' )
    },
    {
        path: '/dataroom',
        name: 'Dataroom',
        component: () => import( /* webpackChunkName: 'Dataroom' */ '@/views/DataRoom.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import( /* webpackChunkName: 'News' */ '@/views/News.vue')
    },
    {
        path: '/reportdata',
        name: 'ReportData',
        component: () => import( /* webpackChunkName: 'ReportData' */ '@/views/ReportData.vue')
    },

    {
        path: '/notice/:id',
        name: 'NoticeDetail',
        component: () => import( /* webpackChunkName: 'NoticeDetail' */ '@/views/CsNoticeDetail.vue' )
    },
    {
        path: '/dataroom/:id',
        name: 'DataRoomDetail',
        component: () => import( /* webpackChunkName: 'DataRoomDetail' */ '@/views/DataRoomDetail.vue' ),
    },
    {
        path: '/news/:id',
        name: 'NewsDetail',
        component: () => import( /* webpackChunkName: 'NewsDetail' */ '@/views/NewsDetail.vue' )
    },
    {
        path: '/reportdata/:id',
        name: 'ReportDetail',
        component: () => import( /* webpackChunkName: 'ReportDetail' */ '@/views/ReportDetail.vue')
    },

    {
        path: '/dataroom/wr',
        name: 'DataRoomWr',
        component: () => import( /* webpackChunkName: 'DataRoomWr' */ '@/views/DataRoomWr.vue' )
    },
    {
        path: '/news/wr/',
        name: 'NewsWr',
        component: () => import( /* webpackChunkName: 'NewsWr' */ '@/views/NewsWr.vue' )
    },
    {
        path: '/notice/wr',
        name: 'NoticeWr',
        component: () => import( /* webpackChunkName: 'NoticeWr' */ '@/views/CsNoticeWr.vue' )
    },
    {
        path: '/reportdata/wr/',
        name: 'ReportWr',
        component: () => import( /* webpackChunkName: 'ReportWr' */ '@/views/ReportWr.vue' )
    },

    // 고객센터 끝


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach(function (to, from, next) {
//     if ( to.meta.authRequired ) {
//         // alert('않되!!!!' + to.params.id)
//         next();
        
//     } else {
//         next();
//     }
// })

export default router