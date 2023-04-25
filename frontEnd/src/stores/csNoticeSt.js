//공지사항 - 목록, 상세페이지

import { defineStore } from 'pinia'

export const useCsNoticeStore = defineStore('csNotice', () => {

    //목록

    const noticeList = ref([
        {
            url: '/notice/',
            children: [
                {
                    number: 0,
                    title: '소나무정보기술 본사 이전 안내',
                    date: '2022.07.15',
                },
                {
                    number: 1,
                    title: '2023년 새해가 밝았습니다.',
                    date: '2023.01.01',
                },
                {
                    number: 2,
                    title: '소나무정보기술 공휴일 휴무안내',
                    date: '2023.01.13',
                }
            ]
        }
    ])

    //상세페이지

    const noticeGroup = ref({
        url: '/notice/',
        children: [
            {
                bindIndex: 0,
                title: '소나무정보기술 본사 이전 안내',
                date: '2022.07.15',
                views: 91,
                images: '/public/image/notice_02.jpg',
                textAll: [
                    {texts: 'Pine, thank you! 소나무정보기술입니다.'},
                    {texts:'당사는 2022년 7월 15일자로 본사를 이전하게 되었음을 안내드립니다.'},
                    {texts:'기존 본사 : 부산광역시 사상구 대동로 303, 부산디지털밸리 1203호'},
                    {texts:'신규 본사 : 부산광역시 부산진구 엄광로 176, 동의대학교 산학협력관 331호'},
                    {texts:'저희 임직원 일동은 새로운 마음가짐으로 더욱 발전하는 계기가 될 수 있도록 최선을 다하겠습니다.'},
                    {texts:'앞으로도 많은 관심과 성원 부탁드리겠습니다.'}
                ]
            },
            {
                bindIndex: 1,
                title: '2023년 새해가 밝았습니다.',
                date: '2023.01.01',
                views: 87,
                images: '/public/image/newyear_2023.jpg',
                textAll: [
                    {texts: '2022년 한 해 고생많으셨습니다.'},
                ]
            },
            {
                bindIndex: 2,
                title: '설날 연휴간 소나무정보기술 휴무안내',
                date: '2023.01.10',
                views: 65,
                images: false,
                textAll: [
                    {texts: 'Pine, thank you! 소나무정보기술입니다.'},
                    {texts:'다가오는 연휴에 관하여 소나무정보기술 업무일정을 안내드립니다.'},
                    {texts:'휴무일자 : 2023.01.21 ~ 2023.01.24'},
                    {texts:'상기 일자에는 소나무정보기술의 모든 업무가 중단되오니 일정에 참고바랍니다. 감사합니다.'}
                ]
            }

        ]

    })

    return { noticeList, noticeGroup }

})