// 자동 스크롤 JS : jquery-autoScroll-1.0.js //

/**************** 전역변수구역 ****************/
// 1. 현재 페이지번호
let pno = 0;
// 2. 전체 페이지수
const totnum = 7;
// 3. 광스크롤 상태변수
let prot_sc = 0; //0-허용, 1-불허용
// 4. 스크롤애니메이션 시간
const dur_sc = 600;
// 광스크롤 금지 시간, 스크롤애니시간
// 5. 스크롤이징
const easing_sc = "easeInOutQuint";
///////////////////////////////////////////////////

////////////////// 로딩구역 ////////////////////

$(function () { ////// jQB //////////////////////
    // 3D 모델의 회전 상태를 다룰 변수
    let rotationAngle = 0; // 회전 각도를 저장하는 변수

    // 페이지에 맞는 회전각도 및 속도 설정 (페이지 번호에 따른 회전값 설정)
    const pageRotationConfig = { // 새로 추가된 객체: 각 페이지에 맞는 회전 각도와 속도 설정
        0: {
            angle: 0
        }, // 첫 페이지 (회전각 0도)
        1: {
            angle: 90
        }, // 두 번째 페이지 (회전각 45)
        2: {
            angle: 90
        }, // 세 번째 페이지 (회전각 90)
        3: {
            angle: 135
        }, // 네 번째 페이지 (회전각 135)
        4: {
            angle: 180
        }, // 다섯 번째 페이지 (회전각 180)
        5: {
            angle: 225
        }, // 여섯 번째 페이지 (회전각 252)
        6: {
            angle: 270
        } // 일곱 번째 페이지 (회전각 270)
    };

    const pageStyleConfig = {
        0: {
            square1: { width: '50vw', height: '100vh', top: '0', right: '0' },
            square2: { width: '50vw', height: '100vh', top: '0', left: '0' }
        },
        1: {
            square1: { width: '60vw', height: '90vh', top: '10%', right: '0' },
            square2: { width: '40vw', height: '80vh', top: '5%', left: '0' }
        },
        2: {
            square1: { width: '70vw', height: '80vh', top: '20%', right: '0' },
            square2: { width: '30vw', height: '70vh', top: '10%', left: '0' }
        },
        // 다른 페이지에 대해서도 설정 가능
        // 예시로 추가한 페이지들
        3: {
            square1: { width: '80vw', height: '70vh', top: '30%', right: '0' },
            square2: { width: '20vw', height: '60vh', top: '15%', left: '0' }
        },
        4: {
            square1: { width: '100vw', height: '60vh', top: '40%', right: '0' },
            square2: { width: '0', height: '0', top: '50%', left: '0' }
        },
        5: {
            square1: { width: '50vw', height: '50vh', top: '50%', right: '0' },
            square2: { width: '50vw', height: '50vh', top: '50%', left: '0' }
        },
        6: {
            square1: { width: '100vw', height: '100vh', top: '0', right: '0' },
            square2: { width: '0', height: '0', top: '0', left: '0' }
        }
    };


    //////////////// 자동스크롤 구현 ////////////////////
    $(document).on("mousewheel DOMMouseScroll",
        function (e) { // e - 이벤트 전달값

            // 광스크롤 금지 /////////
            if (prot_sc) return; //돌아가
            prot_sc = 1; //잠금
            setTimeout(() => prot_sc = 0, dur_sc);
            //////////////////////////////
            //-> 지정시간동안 스크롤막기
            //-> 지정시간은 dur_sc 상수로 관리함!

            // e.preventDefault();
            // return false;
            // 스크롤막기를 쓰면 에러 나므로 
            // html,body에 overflow:hidden설정으로
            // 스크롤바를 숨기고 스크롤이 안되게 한다!!!

            // e 이벤트 전달변수 처리하기
            e = window.event || e;
            // 뒤의 값 2개중 유효값이 e에 재할당된다!
            // window.event 는 오리지널 이벤트임

            //***************************
            // 1. 마우스 휠 방향 알아내기!
            // 휠델타값으로 방향을 알아낸다!
            // e.wheelDelta는 일반 브라우저용 방향정보
            // e.detail은 파이어폭스용 방향정보
            let delta = e.wheelDelta || e.detail;
            // console.log("휠델타값:" + delta);

            //********************************/
            // 2. 방향에 따른 페이지 번호증감하기 ////
            if (delta < 0) { // 음수면 스크롤 아랫방향(다음페이지)
                pno++;
                if (pno === totnum) pno = totnum - 1; //끝번호에 고정
            } //////// if ////////////
            else { // 양수면 스크롤 윗방향(이전페이지)
                pno--;
                if (pno === -1) pno = 0; //첫번호에 고정
            } //////// else //////////


            // 페이지 번호에 따른 회전 각도 설정
            rotationAngle = pageRotationConfig[pno].angle; // 페이지에 맞는 회전 각도 설정

            // 각도 변경: model-viewer의 camera-orbit을 설정
            $("model-viewer").attr("camera-orbit", `${rotationAngle}deg 75deg 100%`);


                    // 페이지 번호에 맞춰 square1과 square2의 애니메이션 변경
        let square1Styles = pageStyleConfig[pno].square1;
        let square2Styles = pageStyleConfig[pno].square2;

        // square1 애니메이션
        $(".square1").stop().animate({
            width: square1Styles.width,
            height: square1Styles.height,
            top: square1Styles.top,
            right: square1Styles.right
        }, dur_sc, easing_sc);

        // square2 애니메이션
        $(".square2").stop().animate({
            width: square2Styles.width,
            height: square2Styles.height,
            top: square2Styles.top,
            left: square2Styles.left
        }, dur_sc, easing_sc);



            //***************************
            // 3. 페이지번호를 높이값에 곱하여 스크롤 이동하기
            // 이동높이값
            let pos = $(window).height() * pno;
            // console.log("이동값:", pos);
            // 이동애니메이션
            $("html,body").animate({
                scrollTop: pos + "px"
            }, dur_sc, easing_sc);
            // dur_sc 상수에 공통시간설정


        }); //////////// mousewheel //////////////////////
    ///////////////////////////////////////////////////

}); ////////////// jQB /////////////////////////
////////////////////////////////////////////////