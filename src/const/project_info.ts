export interface ProjectInfo {
  title: string;
  type: string;
  appDescription: string;
  userCnt: number;
  workHistory: string;
  stacks: string;
  workDuration: string;
  images: string[]; // [String] 구조를 배열 타입인 string[]으로 올바르게 정비했습니다.
  imageDirection: string;
}

export const androidProjects: ProjectInfo[] = [
  {
    title: "골프랜드",
    type: "안드로이드 네이티브 앱(JAVA)",
    appDescription: "골프장 부킹을 위한 플랫폼",
    userCnt: 100000,
    workHistory: "Retrofit2를 활용하여 Resuful API를 호출하는 방식으로 게시판 기능 구현.\nPaging3를 활용하여 게시글 조회기능 구현\nCustomView를 활용하여 댓글창 및 일정표 기능 구현\nViewPager2와 CustomView 개념을 활용하여 팝업광고를 위한 롤링배너 개발",
    stacks: "React, TypeScript, Next.js, Tailwind CSS, WebSockets, Zustand",
    workDuration: "2022.06 ~ 2022.08",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEhzW6X5WLph4FeDbtSuwLvd891h9eRPpJUTSuXlu5-zkXHAW13xKEcEs_DHTqXOxlz_CVH2_LarEFD88RcLQcWhNsx_Q1IFB30Z6N6hcPTDqhNzJog6EPKLdbk8qqeOpXXcjhqBf4-N9LkJm4_7CNSCMmN_i0-AXzSSDDcx7YCh001VKqxhxqzOCiCUe6A", // 첫 번째 이미지가 액자 대표 이미지로 쓰입니다.
      "https://blogger.googleusercontent.com/img/a/AVvXsEgozjPmnWgskgwPOpQuUxIQ8j3_ZqkwCVkLZ6BC0mUMCnu4MnYOgLvO6PAlaPdb9b3okfWob8stGl4KjYVkNkiEYuA2YUA8ODU0rlfRBXJcKSjV2ZcmxoOSCNcsCkQ3MlN2FOr1s-nMZjILdr0VcghvD02mH5dK54NVyN8Do1vKu8Ets3fiU7zcxTRYE5U",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhntE4pOJ2iXvqsuypt-7S_DyheYkUc9jazB3c4oRa3-XUL6z2HpxCpITR-IFnpU3xaXq-VkQ7yAAN2ASSUehGsxMV7ik0jSy_aEQoQs58TcqZGkc705SDaNbZ1ViwHyf9WU6La2cqiWxasRywgq5REpNt7ZN3NJyTuDJiKa0R7m8sXIb0Zh-j2z1PPPcI",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhx1OlBL2_UHOTJdqnK_Q3YK2zn6vmgPluMb-Pyq93Wi3wtKu0x7LQV4czYKAucmnxY20uS10hx_hzv2dzFwEqjGV-TCdrhvjqKWw5SEaGRT9pFRKil6ByV0l4xSrTog9ZZI-dl7V1fIlpuv3gFGQLlocb8xwso28-ZN3PUeAjGwzPOHvPj4sb4MnAFN8E",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgNrgRTCKtvT_3bNMXFES5kficxaZcSpoVHPSQUDgNzM0UQOg3CnrQvwlj-0_IU3DHUKnxmHgSMGS3z3WV507TjKZARsAvep-GJx2mQ-n4chEfYtiP7DUFU9AurdnvKZmllx3tVygBcjDbbpKbT238TiW_RxIvEy-Ygkm4veZC4cwwaCM3cpVetSMZLkds",
    ],
    imageDirection:"v"
  },
  {
    title: "AntwhaleImageSlider",
    type: "Android Framework 개발",
    appDescription: "회사에서 많이 쓰이는 이미지 슬라이더를 모듈화",
    userCnt: 20,
    workHistory: "ViewPager2를 이용하여 슬라이더 기능을 구현하고 CustomView의 다양한 attribute를 추가하여 사용자가 자유롭게 커스텀할 수 있도록 구현",
    stacks: "Kotlin, Android Studio, Glide, ViewPager2, CustomView",
    workDuration: "2023.01 ~ 2023.02",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEiTI5s0XNCp1sF_NW1TwkxZEzU0Xl7uz77QxUKy_Rkw7h_8cOVxjv37YDfJ_fw8Aox-3MiZDMXHBLGYgr3Y1j8YdfmtmaGuyyZ-a4hYm4HuravNUaWXma5Gs4VEup7x2zoOC1Rjz8flD_lb_sWAbgx9F9M0YbLTUygsmiseGXoAG-l3PnGTj_Z8NiucVzk"
    ],
    imageDirection:"v"
  },
  {
    title: "맘마플래너",
    type: "안드로이드 웹앱(Kotlin)",
    appDescription: "엄마, 아빠를 위한 우리아이 이유식 관리 앱",
    userCnt: 1000,
    workHistory: "웹뷰 Interface를 통한 네이티브 기능 구현\n" +
        "SNS로그인 구현(네이버, 카카오, 구글)\n" +
        "인앱결제 구현\n" +
        "FCM 푸시 알림 구현\n" +
        "애드몹 구현",
    stacks: "MVVM패턴, LiveData, Flow, Coroutine, Billing3",
    workDuration: "2022.03 ~ 2022.03",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEgQOe6Mi8mPAOGyRsVtEe0Rv1x2Cu1gMCc7CdKX66xdR8ihUzHmIDOrSH1nX3MUMouV8923vEiYvL-u8KCV2InPk1ExHWpagSe7Hx748hCuw49XKdvRGbw-Fcp2JPH4BHh6dvfhqR8c-FCIswIFMPuqWibekzNw728F-rf49BzQtKTYdXYGMFjeDCk-K1I",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhy-6q7fy1Ndn90hp_Q1oT4l0TYmaAN1M7UsejWye4aJjEUB6T7NzK0_G3sj-WcAqdaxe25MF9vicGFgq4_vMexqoRFBqGjAO8YgVQuv0_a7Zom_1G6B9-lp7roMMVZgxcQpw80cJTSzuc01ycZqViltSLy1d02whGUw401cdlTCDel1K3EaozvPc4nbx8",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgjAN74o9kL5XUKKxyao1mantdIjHMLH9vKJM9oBu3uQczdgWyDNDJ1XrAkhF0n9lilBzRSu8MNzn3x2ZH-dKzcwq4wUZA3nyJCDq-UW8cq_stFaGA8bcEdG2PTIXD3Rb6RXP01_9AwBvlIgvf0_I9rqr1uLOrVUBc4VmmrXOobrislVjG06zzGgb3O5So",
    ],
    imageDirection:"v"
  },
  {
    title: "TADS",
    type: "안드로이드 네이티브 태블릿 앱(Kotlin)",
    appDescription: "한국전력에서 사용하는 전주 측정 차량에서 DB(MSsql)에 직접 접속하여 전주 데이터와 나의 위치를 조회하는 앱 (마켓출시x)",
    userCnt: 1000,
    workHistory: "JTDS 드라이버를 이용하여 DB 접속, 조회, 업데이트\n" +
        "현재 위치, 속도 그리고 가장 가까운 위치의 전주 데이터를 DB에 조회하여 실시간으로 보여줌\n" +
        "각종 데이터를 데이터바인딩을 활용하여 View에 노출\n" +
        "구글맵 연동\n" +
        "카카오 내비게이션 연동",
    stacks: "MVVM패턴, DataBinding, Hilt, Glide, JTDS, Crashlytics, RxKotlin, Coroutine, Flow, Paging3, LiveData, MSsql",
    workDuration: "2022.08 ~ 2022.10",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEixsbnGA9CdAr0Yipww8Vsx7IdXro-9TJkbpE6SWG0U2myvgFXjphlsMT3g5WClrR1V68jyu13UoYF6P3D2HZRHjoraFC_rbmxsYTGDc93hGhKSw_OavY3YkAO59anoz4fic9eC3eVG5pAbFS-WJ6OkFsfyqFJqm4npd_xwU_uv6pSJGD-x3kdvEbkE3wo",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhP4X446O7Y-S9oEI5BhAm-a9hvD42SBey5DR5sIZR-w1riUt_SEAshJeDPEyymTQMJWbensQcsUkScprkwAdKsQadzZXh2HaA2LZazMmS_YZwf7k8EMw6Aw4ZbbXa2ItWzE-RI-XLuecR6JZAT1CDA5XrTB74u9sT3gH-aUAVdv_zuRcf5EOTQ3ZdbESs",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjDoEy6mLGgj5cnmE_YZ01ZAwodqXePJudZkLX_3nh5s4mk-6OZJ3XwVLcgFXYTBO_St740pWjUkStfvtRgQmiKR56DHsvk_Cn59BSghJa8JnxmTQEC4AHWC5CBkj6R3A88Iz6g83OKhrlPO5v3vRmhgF2_0o51fJ0vJqWAtnMTC6KEXlg-D3IXPQHPb4A",
    ],
    imageDirection:"h"
  },
  {
    title: "Inclinometer Collector",
    type: "안드로이드 네이티브(JAVA)",
    appDescription: "㈜에이스인스트루먼트의 모델 5481 디지털 수직, 수평 경사계를 운용하는 전용 앱",
    userCnt: 1000,
    workHistory: "블루투스를 이용하여 디지털 수직, 수평 경사계로 측정 데이터 수집(RxBle)\n" +
        "SAF(Storage Access Framework)로 공유 저장소의 측정파일 가져오기, MediaStore로 공유저장소에 측정파일 저장\n" +
        "측정 데이터 그래프로 나타내기(MPAndroidChart)\n" +
        "측정 파일 이메일로 보내기 기능 개발",
    stacks: "RxBle, RxJava, MediaStore, File API, JAVA, SAF, MPAndroid",
    workDuration: "2022.10 ~ 2022.12",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEh02sePnKGrmqbMXeO9Nub_D5CXU6SE8uFLimuRaF8P4SK7o4zV9ilBZB_HlmWGFTXhdDy9MdiZrJn6dIC6GqjNhbNTkD2QTUA4UyUgOZ2ucTRbOmjhzSYFsA3qXAFFzhVUFda5i9rSOncIUSyQOrM_UrwTLdPmxwNIlouSnC_oOJpjx7rjPDY5iTzWxFo",
      "https://blogger.googleusercontent.com/img/a/AVvXsEiuQbCGqwdFIEZDkJ1GKwCQdFKmClhx2rJw1Zboe1ysEu6Le6TpcDlDQUAMzVdDTJ_4GYq4A41E35daIOjNcVHb0kbs3DHMTMTXbaHJTMYicZ-o9FrOSsK72wrINJ8yDrpjSFD4NVkNn3jxKwu4E1s9ywwux80HeZqboZZS2R1Sz_cN6nkrUXbxehT_6Cc",
      "https://blogger.googleusercontent.com/img/a/AVvXsEj0DIAs6PrZmIpUWP-E_dorCq17j3IoB9OxiJGBPRgy13lb4hItk7b5wG-ADNEpKQXgBNph-89U71hULkwDSByhZonnY-C7m9eklkmNFZG82oZY1pPFXIX8GE4SWwdvzy3QbHcv9rhNnnistGuCbO1hcRMwRCL5DKdnyearoRrabeDCrtHAsY54iHq5x5I",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjKWEjLcn1a0PK39RZb5pd_c940IccKgkCHYens38MxouyN29M8K3fW8-WohMWzSiXwo33RVONYbrxcb1cWuC1EdKQcs0Hc0cWOZ3BjjDE9Tqy2xjMql3VAiwim9Jpd5DkPAhmL7yN2YkLRk4UShdwLRMoyAPGAfc1czCLXF5k9m6-5g3jto8cBLXGv0ZQ",
      "https://blogger.googleusercontent.com/img/a/AVvXsEie1m-es90WRGcVpfajtKHcyiuESf4vlBKZaVcQ1PT2_p_0j6x_VKxKMLtJqWguvoI32muTUMIv1_YFMVdt68gXvbPqy_OYZpBzd0V74NvypX7NiZW73o1cJhZnERlpSne5qMZc6HpRe9Yobxju65N6uw8EcdN9-goivg0ToFF0QdXpddDjZwMuzU5s4uw",
    ],
    imageDirection:"v"
  },
  {
    title: "Tiltmeter Collector",
    type: "안드로이드 네이티브(JAVA)",
    appDescription: "㈜에이스인스트루먼트의 모델 5411 디지털 경사계를 운용하는 전용 앱",
    userCnt: 1000,
    workHistory: "블루투스를 이용하여 디지털 경사계로 측정 데이터 수집(RxBle)\n" +
        "SAF(Storage Access Framework)로 공유 저장소의 측정파일 가져오기, MediaStore로 공유저장소에 측정파일 저장\n" +
        "측정 데이터 그래프로 나타내기(MPAndroidChart)\n" +
        "측정 파일 이메일로 보내기 기능 개발",
    stacks: "RxBle, RxJava, MediaStore, File API, JAVA, SAF, MPAndroid",
    workDuration: "2022.10 ~ 2022.12",
    images: [
          "https://blogger.googleusercontent.com/img/a/AVvXsEjX-GI2OfL3zocFbSYaenRzwTEd-N45dtw6TEm8BODhzs2nmTEbHQqOVHCmnujv98t_NN3ym2Zfpdgx5OnEJWJULPs46foEwRqdNyvZn7ouPnwTzA5qz6Ccj9Y8jPIBCxqt48yP28L3oVkIEWttC-zE6APo7CbIeOdM9iImzAtn5N5kKVzkmZAfH6ZcXfQ",
          "https://blogger.googleusercontent.com/img/a/AVvXsEjr_vus7aPrKKQdvyCg0Ykb07-BLwqpKK37SDG_tmNlQXW0rBlv3EkzlkW-rww7dxP69s1LZd4puWW3be_39aJ2_rBvXLQZ-SH3xI1ZZRBxVvWRkdAoqUPKcMi3NuHuFakdDrKh-vYBqMjfXhXsZdbnMT1kf__DNyt4kdpv3YELoXAxzz_xNu8xLbQt798",
          "https://blogger.googleusercontent.com/img/a/AVvXsEioEPisX1vPd0BHb6Qf09idPEy6utq4FKFh_OJlSqxKoHZOBpcq2BM7u1p7Up3f0CIAAeebi_nDjhTxhgESMvFRFKtPIrG3qWJLuvoV53r8t4yA78g8x9VgD9Py5maF9Hrluuz8cSjtQz3GWrCrnzpvdtoQzICa7rlVdRTKSrstDEylF0DbwcRfkeMLBqM",
          "https://blogger.googleusercontent.com/img/a/AVvXsEgn-zmYuzfqF1CdL3s_mFzKIu4frlBxrAM7oGzCJn83pBry69NnRAjlLm0Qkd5NiYmrOzOmB4hDfKTdsh9CHH6dDSKQ9XgNKL2kHqHNDuVyQUOs6w6fzqN_APSWsw6OA_U-jf2S3x_UdRQC5E-d8Cqh1HPaajUvBy_74FGjZxxwwhh_JhQ818ujbyZYccg",
    ],
    imageDirection:"v"
  },
  {
    title: "현대모비스 지니뮤직과 멜론뮤직",
    type: "안드로이드 네이티브(JAVA)",
    appDescription: "현대기아차에 탑재되는 표준형 5세대 뮤직스트리밍앱",
    userCnt: 5000000,
    workHistory: "버그 수정 / 기능 업그레이드 / 보안 업데이트",
    stacks: "ExoPlayer, Handler, Thread, ListView, Glide, SQLite, AsyncTask, Service",
    workDuration: "2024.05 ~ 2026.11",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEjdr-ozDze7JwAOy1DHVWG9WV9_JuMiOnRf_NtSDxglQOQjwinwsA5gjs8wHhFABwqCRHZEjeF4DecIB05Pjr0QD5T6vy1UamPDvTgbd3AcN-vnuQtLMbRhCKSPipIXQjX-bYDIaxugWxdsf2dpe67tFonOq0EdTHU0FUzcav8Gp1RQXOdEHFMApTAH7NQ",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgG6RU_H7kPQQUXpU8B8_NA6SpdYhnKi_l_Fj3KkR8aXRciycqMo9R7E3l1Pck438t_g8jtEMK7dmMbcpXtSZFT9WMuO285M4cqNtbahigoKqKyXtOZvP01QxJ9tFejo3Ab-NSOq91_QoSSQ2L86N7UbRj4_R87hI4Zi_UiXBoOCEdItwiyKUKUH4z186U",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjM4tI5w91GrBGToLAeEzdQmBPAtiSpVug4ZSc1tLb7b4ys-C1YttNwgvL7_-ZG7m7Z-MemgyWKJ3FvgcHQ1EHbMCokBghNrwLeRJc5dzH7zu05Txeo_Kgd02LE_9KGUU5tlEQHNMLtzULnu6avVm9J4s1STir8uwL-tK_0i8S0ZZs5HvaYRKU15r3bvF8",
    ],
    imageDirection:"h"
  },
  {
    title: "현대모비스 큐큐뮤직",
    type: "안드로이드 네이티브(JAVA)",
    appDescription: "현대기아차에 탑재되는 표준형 5세대 중국향 뮤직스트리밍앱",
    userCnt: 500000,
    workHistory: "버그 수정 / 기능 업그레이드 / 보안 업데이트",
    stacks: "ExoPlayer, Volley, Thread, ListView, Glide, SQLite, AsyncTask, Service",
    workDuration: "2024.05 ~ 2026.11",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEit4iiffL_ZJ1u8_6JatzK_t1QbAGf48IiiFxoVdHgaOzKbzvvIyPdvtkGZc_fFiTTFdw6CdIPq2x2SMNxz4zH8nLF3hWDWOof7yc5QST5tcXfaZzSnc06WuonHb3JCOIm9RcCzyLAzKxJ-YTJeVxCEeYCosIfrfrNcUFfq8LjKardhR9RH3SZJRQH6Q88",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjaxQEUL08lOrTjlS8wm5ro6maSe-KZuH_04NBzgReOJJbCb3TcZRQt_hOIohbNe-m37qGeFZPT6EfEf1pUN8I1hn-Rq2W1r8hOGIbJNeICPEZPTBJ7aFplo_QU8qfe89mw_Dthhjad8732nTp3ZktMupG43Q8aWHSaIYKSWk1u8K9kR9ySneY04GhUBTI",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhVOEWle7Oq38DN4WkaqWsi7Hq0i6lR36RsEReRp9UtyeJoDqhQKTEMqJUuwb4cILXIlRQnTNdYXvJTOzu_Uu4OLjcOOPl1DFG_XxztI1Gy5N7-M7Hk63w_aHIM3MdcWZb2PhZdKzf0ayNyP9wHf3tp8l8Otzh_D7amqui83R-ne6r2hwYgtWPMM8_PW7k",
    ],
    imageDirection:"h"
  },
  {
    title: "닥터왓슨",
    type: "안드로이드 네이티브 앱(Kotlin)",
    appDescription: "정부과제 앱: 경찰이 사건현장의 정보를 AI 활용하여 기록하는 앱",
    userCnt: 500000,
    workHistory: "LLM AI 모델 사용한 자동 사건 정보 작성 기능 구현\n" +
        "Compose 활용한 뷰 그리기\n" + 
        "네이버 STT 활용한 음성인식 구현",
    stacks: "Compose, Hilt, Navigation, MVVM, Retrofit2, Coil, Datastore, CameraX, LLM",
    workDuration: "2023.10 ~ 2024.10",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEjjmgw2ed341i5LeZnKtbB-XZtIWZyqOleAV9H-Df2vq8P4JFbYaIt2DcdFimuj7bADqRsm69E61cYp51lyjhlK2_dgElAG2n5hzQNOLXFcg8sLgzRUecYvpwcPDaJ29UmKjmUX7sNozFQTd7iwSGe7FJ_Rz0Qd8z6rI0vXe3wqHFBEiS60A5ZDH2F9-xY",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgkbPbkSINxyaSSQlqUJarpOC1S0sacyhrmigMuqyOX_IdbekHvt81JosyA7g7fTUijKwxPvJpWRIM0D1Wzmou_PjyIg9td02KuRZ_TI3una4fMZmKhGHZ0IYGRGCBrqDzROJ36s7thld21PeNP8yYECYZj4YmfyAVz6EB9E2k8mxOoseYHOYIHA2__rcE",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgwLtKnuxkM2S2u33O4V_HxU9o00fYNaoc01AU951mGqmvbvu2V-cFBbAwLRJYpDKYMhYUUZSIIcjlaxPrP9q-c8GNpfNqgR7eOMPpnfj26J7UzESkJJAauThMfkFIEskojcRdSncmh7_8A9xeUYb7nM28d3fQ24H2_BtVyZQoPq9C3XccT4gyqTmhybOk",
    ],
    imageDirection:"v"
  },
  {
    title: "현대모비스 AI Agent POC앱 (가칭: AIMO) ",
    type: "안드로이드 네이티브 앱(Kotlin)",
    appDescription: "실서비스를 위한 POC 과정의 AI Agent 앱 개발 + 2026 CES 전시",
    userCnt: 0,
    workHistory: "차량 매뉴얼 / DTC코드 / 자동차 정비 매뉴얼 등의 사전 지식 학습 데이터로 LLM을 활용한 질의-응답 대화형 서비스 구현\n" +
        "Bge-M3 임베딩 모델과 VectorDB(ObjectBox) 활용하여 RAG 기능 구현\n" +    
        "자동차 현재 상태, 사용자의 서비스 습관 등의 이벤트를 수집하여 사용자 맞춤형 서비스를 제공하는 AI 비서 기능 구현\n" + 
        "재생되는 노래에 어울리는 DJ멘트 생성 기능 구현\n" + 
        "급가속, 급정거시 심각성에 따라 사용자에게 경고 멘트 생성 기능 구현\n" + 
        "운전자의 데이터를 분석하여 차량 온도, 내비게이션, 드라이빙모드 변경 추천 기능 구현\n" +
        "유니티를 사용하여 3D 아바타 구현",
    stacks: "STT, TTS, MAOS, ONNX, HuggingFace Tokenizer, ObjectBox, DJL, Lottie, Unity",
    workDuration: "2026.07 ~ 2026.12",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEhV2Gegh9LBeP17fpJZR71662Gqcbw8mLZtCqhiCuPvQVJk-JlmDxve12bBt19CAnJTXLnO9yQhREatdfTaCHtC-qlhSHZY1vULqt2-GQ4Vzb8WHx8tkUDtc4dwxsu9njganBQpjP15EozFr_kJFv7Ca_WhPENOqCVhqD53wI7mTdka4zl_dJ0jVfLA9Cs",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjPTAAliHgYspRqv152CaRy1O0XgfX8wVqoZ9HRjECAimVOLzDL5G_ixhxEDR6PjlJuZth2xoGR8cHSsSecGyvxJ2tUtnzVjEvYP6g746wv5JBWaZJMMtc0f4U0mBYZ46K58hxoQST2XkJ2CXz1diazpxBe7EoiGTwtiGqjdpNpjml65Z-lDZbSXv0lPrY",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhXBRXXYYj2GYXXnyB0grYILItjZ4absXbaPjFrFwmR5WSrgx-UHP6jDOCg6sWsaOSHGps5VhSFmBXYmseTjh5A8BAmAKMx8u17XGAAKQkNKtjrfecWrJ8qY6hM1N44x-goxFayp-xr2AMU0fcXdYf6b2hb5rRXaifm4pAjrAErgTz2mvR8KXmTW4NcKD8",
    ],
    imageDirection:"h"
  },
  {
    title: "현대모비스 PBV 미니플레이어",
    type: "안드로이드 네이티브 앱(Kotlin)",
    appDescription: "현재 재생중인 미디어앱의 정보를 보여주고 간단한 조작을 가능하게하는 미니플레이어 앱입니다.",
    userCnt: 0,
    workHistory: "Compose를 사용하여 FloatingView UI개발\n" +
        "미디어 세션을 사용하여 현재 재생되는 미디어 정보 추출\n" +    
        "PBV 하드키로 미디어 기능 조작할 수 있는 편리한 Interface 구현\n" + 
        "Compose 활용한 애니메이션 기능 구현\n" + 
        "MADI 활용하여 CleanArchitecture 구현",
    stacks: "Compose, Coroutine, Flow, Coil, MediaSession, MAOS",
    workDuration: "2025.02 ~ 2026.02",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEi33vpq2FiRX4wYxnfubZBVR8-dlmPRocRCvcRztkrnBXjL57fhbBqReYT8zJVe3RuZ8FSVp3eGHBh9_E5fTiePbKVsOGK1YkbiuHqNkPtO5KREMzgl5VphZFcTccoVnPv-KCBCN_83GWWAqBa3rjZTgnzo4pDwJKvo6P6xdJrfKjvF-qxdWpFu_hFH1tg",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjPTAAliHgYspRqv152CaRy1O0XgfX8wVqoZ9HRjECAimVOLzDL5G_ixhxEDR6PjlJuZth2xoGR8cHSsSecGyvxJ2tUtnzVjEvYP6g746wv5JBWaZJMMtc0f4U0mBYZ46K58hxoQST2XkJ2CXz1diazpxBe7EoiGTwtiGqjdpNpjml65Z-lDZbSXv0lPrY",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhXBRXXYYj2GYXXnyB0grYILItjZ4absXbaPjFrFwmR5WSrgx-UHP6jDOCg6sWsaOSHGps5VhSFmBXYmseTjh5A8BAmAKMx8u17XGAAKQkNKtjrfecWrJ8qY6hM1N44x-goxFayp-xr2AMU0fcXdYf6b2hb5rRXaifm4pAjrAErgTz2mvR8KXmTW4NcKD8",
    ],
    imageDirection:"h"
  },
];

export const iosProjects: ProjectInfo[] = [
    {
        title: "Inclinometer Collector",
        type: "iOS 네이티브 앱(Swift)",
        appDescription: "㈜에이스인스트루먼트의 모델 5481 디지털 수직, 수평 경사계를 운용하는 전용 앱",
        userCnt: 500,
        workHistory: "블루투스를 이용하여 디지털 수직, 수평 경사계로 측정 데이터 수집\n" +
            "FileManager 측정파일 가져오기 및 저장\n" +
            "측정 데이터 그래프로 나타내기\n" +
            "측정 파일 이메일로 보내기 기능 개발",
        stacks: "CoreBluetooth, FileManager, Charts, Swift",
        workDuration: "2023.03 ~ 2023.05",
        images: [
            "https://blogger.googleusercontent.com/img/a/AVvXsEh02sePnKGrmqbMXeO9Nub_D5CXU6SE8uFLimuRaF8P4SK7o4zV9ilBZB_HlmWGFTXhdDy9MdiZrJn6dIC6GqjNhbNTkD2QTUA4UyUgOZ2ucTRbOmjhzSYFsA3qXAFFzhVUFda5i9rSOncIUSyQOrM_UrwTLdPmxwNIlouSnC_oOJpjx7rjPDY5iTzWxFo",
            "https://blogger.googleusercontent.com/img/a/AVvXsEiuQbCGqwdFIEZDkJ1GKwCQdFKmClhx2rJw1Zboe1ysEu6Le6TpcDlDQUAMzVdDTJ_4GYq4A41E35daIOjNcVHb0kbs3DHMTMTXbaHJTMYicZ-o9FrOSsK72wrINJ8yDrpjSFD4NVkNn3jxKwu4E1s9ywwux80HeZqboZZS2R1Sz_cN6nkrUXbxehT_6Cc",
            "https://blogger.googleusercontent.com/img/a/AVvXsEj0DIAs6PrZmIpUWP-E_dorCq17j3IoB9OxiJGBPRgy13lb4hItk7b5wG-ADNEpKQXgBNph-89U71hULkwDSByhZonnY-C7m9eklkmNFZG82oZY1pPFXIX8GE4SWwdvzy3QbHcv9rhNnnistGuCbO1hcRMwRCL5DKdnyearoRrabeDCrtHAsY54iHq5x5I",
            "https://blogger.googleusercontent.com/img/a/AVvXsEjKWEjLcn1a0PK39RZb5pd_c940IccKgkCHYens38MxouyN29M8K3fW8-WohMWzSiXwo33RVONYbrxcb1cWuC1EdKQcs0Hc0cWOZ3BjjDE9Tqy2xjMql3VAiwim9Jpd5DkPAhmL7yN2YkLRk4UShdwLRMoyAPGAfc1czCLXF5k9m6-5g3jto8cBLXGv0ZQ",
            "https://blogger.googleusercontent.com/img/a/AVvXsEie1m-es90WRGcVpfajtKHcyiuESf4vlBKZaVcQ1PT2_p_0j6x_VKxKMLtJqWguvoI32muTUMIv1_YFMVdt68gXvbPqy_OYZpBzd0V74NvypX7NiZW73o1cJhZnERlpSne5qMZc6HpRe9Yobxju65N6uw8EcdN9-goivg0ToFF0QdXpddDjZwMuzU5s4uw",
        ],
        imageDirection:"v"
    },
    {
        title: "Tiltmeter Collector",
        type: "iOS 네이티브 앱(Swift)",
        appDescription: "㈜에이스인스트루먼트의 모델 5411 디지털 경사계를 운용하는 전용 앱",
        userCnt: 500,
        workHistory: "블루투스를 이용하여 디지털 경사계로 측정 데이터 수집\n" +
            "FileManager 측정파일 가져오기 및 저장\n" +
            "측정 데이터 그래프로 나타내기\n" +
            "측정 파일 이메일로 보내기 기능 개발",
        stacks: "CoreBluetooth, FileManager, Charts, Swift",
        workDuration: "2023.05 ~ 2023.07",
        images: [
          "https://blogger.googleusercontent.com/img/a/AVvXsEjX-GI2OfL3zocFbSYaenRzwTEd-N45dtw6TEm8BODhzs2nmTEbHQqOVHCmnujv98t_NN3ym2Zfpdgx5OnEJWJULPs46foEwRqdNyvZn7ouPnwTzA5qz6Ccj9Y8jPIBCxqt48yP28L3oVkIEWttC-zE6APo7CbIeOdM9iImzAtn5N5kKVzkmZAfH6ZcXfQ",
          "https://blogger.googleusercontent.com/img/a/AVvXsEjr_vus7aPrKKQdvyCg0Ykb07-BLwqpKK37SDG_tmNlQXW0rBlv3EkzlkW-rww7dxP69s1LZd4puWW3be_39aJ2_rBvXLQZ-SH3xI1ZZRBxVvWRkdAoqUPKcMi3NuHuFakdDrKh-vYBqMjfXhXsZdbnMT1kf__DNyt4kdpv3YELoXAxzz_xNu8xLbQt798",
          "https://blogger.googleusercontent.com/img/a/AVvXsEioEPisX1vPd0BHb6Qf09idPEy6utq4FKFh_OJlSqxKoHZOBpcq2BM7u1p7Up3f0CIAAeebi_nDjhTxhgESMvFRFKtPIrG3qWJLuvoV53r8t4yA78g8x9VgD9Py5maF9Hrluuz8cSjtQz3GWrCrnzpvdtoQzICa7rlVdRTKSrstDEylF0DbwcRfkeMLBqM",
          "https://blogger.googleusercontent.com/img/a/AVvXsEgn-zmYuzfqF1CdL3s_mFzKIu4frlBxrAM7oGzCJn83pBry69NnRAjlLm0Qkd5NiYmrOzOmB4hDfKTdsh9CHH6dDSKQ9XgNKL2kHqHNDuVyQUOs6w6fzqN_APSWsw6OA_U-jf2S3x_UdRQC5E-d8Cqh1HPaajUvBy_74FGjZxxwwhh_JhQ818ujbyZYccg",
        ],
        imageDirection:"v"
    },
    
]

export const reactNativeProjects : ProjectInfo[] = [
    {
        title: "일본 편의점",
        type: "ReactNative",
        appDescription: "일본 편의점 상품을 소개하는 개인 프로젝트 앱",
        userCnt: 100,
        workHistory: "일본 편의점 상품 검색기능 구현\n" +
            "일본 편의점 상품 정보 웹 크롤링 구현\n" +
            "좋아요 기능 구현\n" +
            "다국어 서비스 제공(한국어, 일본어, 영어)\n" +
            "애드몹 구현\n",
        stacks: "JavaScript, ReactNative, TypeScript, i18n, Admob, Expo, Selenium, React",
        workDuration: "2026.01 ~ 2023.02",
        images: [
            "https://blogger.googleusercontent.com/img/a/AVvXsEh02sePnKGrmqbMXeO9Nub_D5CXU6SE8uFLimuRaF8P4SK7o4zV9ilBZB_HlmWGFTXhdDy9MdiZrJn6dIC6GqjNhbNTkD2QTUA4UyUgOZ2ucTRbOmjhzSYFsA3qXAFFzhVUFda5i9rSOncIUSyQOrM_UrwTLdPmxwNIlouSnC_oOJpjx7rjPDY5iTzWxFo",
            "https://blogger.googleusercontent.com/img/a/AVvXsEjr_vus7aPrKKQdvyCg0Ykb07-BLwqpKK37SDG_tmNlQXW0rBlv3EkzlkW-rww7dxP69s1LZd4puWW3be_39aJ2_rBvXLQZ-SH3xI1ZZRBxVvWRkdAoqUPKcMi3NuHuFakdDrKh-vYBqMjfXhXsZdbnMT1kf__DNyt4kdpv3YELoXAxzz_xNu8xLbQt798",
            "https://blogger.googleusercontent.com/img/a/AVvXsEioEPisX1vPd0BHb6Qf09idPEy6utq4FKFh_OJlSqxKoHZOBpcq2BM7u1p7Up3f0CIAAeebi_nDjhTxhgESMvFRFKtPIrG3qWJLuvoV53r8t4yA78g8x9VgD9Py5maF9Hrluuz8cSjtQz3GWrCrnzpvdtoQzICa7rlVdRTKSrstDEylF0DbwcRfkeMLBqM",
            "https://blogger.googleusercontent.com/img/a/AVvXsEgn-zmYuzfqF1CdL3s_mFzKIu4frlBxrAM7oGzCJn83pBry69NnRAjlLm0Qkd5NiYmrOzOmB4hDfKTdsh9CHH6dDSKQ9XgNKL2kHqHNDuVyQUOs6w6fzqN_APSWsw6OA_U-jf2S3x_UdRQC5E-d8Cqh1HPaajUvBy_74FGjZxxwwhh_JhQ818ujbyZYccg",
        ],
        imageDirection:"v"
    },
]