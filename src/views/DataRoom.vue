<template>
    <SubPageHero />

    <section class="container div-main-text">

        <div id="divSearchLine">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>

            <div class="line-vr"></div>
            <input data-totalsearch-input type="text">
            <button data-search-button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>

        </div>
        <div id="divDataRoom">
            <div class="table-title">
                <div>번호</div>
                <div>제목</div>
                <div>등록일</div>
            </div>

            <div v-for="(item, index) in listPreview.slice().reverse()" id="divTextLines" :key="index">
                <div v-for="subitem in item.children">
                    <div @click="lockChk(subitem.password, subitem.number)">
                    <!-- <router-link :to="{name: 'DataRoomDetail', params: {id: subitem.number}}"> -->
                        <div class="table-text">
                            <div>{{ subitem.number + 1 }}</div>
                            <div class="board-titles-div">{{ subitem.title }}</div>
                            <div>{{ subitem.date }}</div>
                        </div>
                    <!-- </router-link> -->
            
                    </div>
                    
                    <div v-show="subitem.modals" data-pw-check-modal>
                        <div data-pw-check-body>
                            <p>비밀번호를 입력해주세요.</p>
                            <p data-pw-check-incorrect v-if="pwAlert">비밀번호가 틀렸습니다. 비밀번호를 다시 확인해주세요.</p>
                            <input type="text" ref="inputValue" :value="pwData" @input="pwData = $event.target.value">
                            <div>
                                <button type="button" @click="chkPw(subitem.number)">확인</button>
                                <!-- <button type="button" @click="subitem.modals = !subitem.modals">닫기</button> -->
                                <button type="button" @click="modalClose(subitem, subitem.modals)">닫기</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

        </div>
        
        <div class="list-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <!-- <router-link to="/dataroom/wr">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
                    <p>글쓰기</p>
                </button>
            </router-link> -->
        </div>
    </section>
    <div class="pager-set">
        <i class="pager-arrow arr-left-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        </i>
        <i class="pager-arrow arr-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg> -->
        </i>
        <ul class="pager-numbers">
            <li data-each-pager>1</li>
        </ul>
        <i class="pager-arrow arr-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg> -->
        </i>
        <i class="pager-arrow arr-right-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </i>
    </div>


</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'
    import router from '@/router';

    let pwAlert = ref(false)

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

    const input_pw = ref(null)
    const inputValue = ref(null)
    
  
    
    //e = password, f = number

    function lockChk(e, f) {
        
        
        if ( e != null ) {
        

            listPreview.value.map(function(elem) {
                elem.children[f].modals = true
            })
            console.log(f)    
            
            
        } else {
            console.log('no password')
        }
    }

    // g = number

    function chkPw(g) {

        console.log(g)
                
        listPreview.value.map(function(h) {
            let inputPass = inputValue.value[g].value
            let thisPassword = h.children[g].password

            console.log(inputPass)
            console.log(thisPassword)

            if ( thisPassword == inputPass ) {
                console.log('ok!')
                router.push({name: 'DataRoomDetail', params: {id: g}})
            } else {
                console.log('no!')
                pwAlert.value = true
            }
        })

    }

    function modalClose(a, b) {
        let thisElem = a.modals
        
        b = false
        console.log(a)
        console.log(b)
        thisElem = !thisElem

        
    }



</script>

<style lang="scss" scoped>
    /* divDataRoom */

    #divDataRoom {
        @apply w-full border-black border-t-2;

    }

   

    .table-text {
        @apply grid text-center cursor-pointer;

        grid-template-columns:6rem 1fr 10rem;
        border-bottom:1px solid rgba(0,0,0, .15);

        > div {
            @apply text-black py-3;
        }
    }

    .board-titles-div {
        @apply text-start px-2;
    }

    //비밀번호 확인창

    [data-pw-check-modal] {
        @apply top-0 left-0;

        // width: 100vw;
        // height: 100vh;
        // background-color: rgba(var(--clr-inter-shade), .85);
        z-index: 999;
    }

    [data-pw-check-body] {
        @apply fixed flex flex-col;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem 1.25rem;
        background-color: rgb(var(--clr-inter-pane));
        filter: drop-shadow(0 0 18px rgba(var(--clr-inter-shade), .05));
        border: 1px solid rgb(var(--clr-inter-shade));

        input {
            border: 1px solid rgb(var(--clr-inter-shade));
            padding: 0.25rem;
            margin-top: 0.75rem;
        }

        > div {
            @apply grid w-full;

            margin-top: 1rem;
            gap: .5rem;
            grid-template-columns: 1fr 1fr;
        }

        button {
            @apply w-full;

            background-color: rgb(var(--clr-inter-shade));
            padding: .5rem .75rem;
            color: rgb(var(--clr-inter-pane));
        }

        [data-pw-check-incorrect] {
            color: rgb(var(--clr-inter-warn));
        }
    }
</style>