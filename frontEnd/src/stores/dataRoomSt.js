//자료실 - 목록, 상세페이지

import { defineStore } from 'pinia'

export const useDataRoomStore = defineStore('dataRoom', () => {

    // 목록

    const listPreview = ref([
        {
            url: '/dataroom/',
            children: [
                
                {
                    number: 0,
                    title:'고객용 원격지원 설치파일 다운로드',
                    date:'2022.11.12',
                    password: null,
                    lock: false,
                    modals: false
                },
                {
                    number: 1,
                    title:'더블스윗 APK파일 다운로드',
                    date:'2023.04.13',
                    password: '2',
                    lock: true,
                    modals: false
                },
                {
                    number: 2,
                    title:'영인하이텍 APK파일 다운로드',
                    date:'2023.04.13',
                    password: '3',
                    lock: true,
                    modals: false
                },
                {
                    number: 3,
                    title:'SNC APK파일 다운로드',
                    date:'2023.04.13',
                    password: '4',
                    lock: true,
                    modals: false
                },
                {
                    number: 4,
                    title:'한동산업 APK파일 다운로드',
                    date:'2023.04.19',
                    password: '5',
                    lock: true,
                    modals: false
                },
            ]

        },
    ])

    //상세페이지

    const dataGroup = ref([
        
        {
            bindIndex: 0,
            title: '고객용 원격지원 설치파일 다운로드 ',
            date: '2022.11.12',
            views: 175,
            texts: '고객용 원격지원 설치파일 다운로드',
            uploaded: [
                {fileName:'/public/client.exe', name:'고객용 원격지원 설치파일.exe'}
            ],
            password: null,
            lock: false,
            modals: false
        },
        {
            bindIndex: 1,
            title: '더블스윗 APK파일 다운로드',
            date: '2023.04.13',
            views: 3,
            texts: '더블스윗 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/public/더블스윗.apk', name:'더블스윗.apk'},
            ],
            password: 'db',
            lock: true,
            modals: false            
        },
        {
            bindIndex: 2,
            title: '영인하이텍 APK파일 다운로드',
            date: '2023.04.13',
            views: 4,
            texts: '영인하이텍 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/public/영인하이텍.apk', name:'영인하이텍.apk'},
            ],
            password: 'yi',
            lock: true,
            modals: false
        },
        {
            bindIndex: 3,
            title: 'SNC APK파일 다운로드',
            date: '2023.04.13',
            views: 3,
            texts: 'SNC APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/public/SNC.apk', name:'SNC.apk'},
            ],
            password: 'sn',
            lock: true,
            modals: false
        },
        {
            bindIndex: 4,
            title: '한동산업 APK파일 다운로드',
            date: '2023.04.19',
            views: 4,
            texts: '한동산업 APK파일을 업로드하오니 업무에 활용바랍니다.',
            uploaded: [
                {fileName:'/public/한동산업.apk', name:'한동산업.apk'},
            ],
            password: 'ha',
            lock: true,
            modals: false
        },
    ])


    return { listPreview, dataGroup }
})

