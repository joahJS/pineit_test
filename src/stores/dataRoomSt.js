//자료실 - 목록, 상세페이지

import { defineStore } from 'pinia'

export const useDataRoomStore = defineStore('dataRoom', () => {
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
                    password: '더블스윗',
                    lock: true,
                    modals: false
                },
                {
                    number: 2,
                    title:'영인하이텍 APK파일 다운로드',
                    date:'2023.04.13',
                    password: '영인',
                    lock: true,
                    modals: false
                },
                {
                    number: 3,
                    title:'SNC APK파일 다운로드',
                    date:'2023.04.13',
                    password: 'SNC',
                    lock: true,
                    modals: false
                },
            ]

        },
    ])

    return { listPreview }
})