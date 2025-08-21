new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    anchors:['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
    // 피그마 url 링크연결
    normalScrollElements: 'iframe',
    scrollOverflow: true
});

// 메뉴버튼과 X버튼 변동
let header = document.querySelector("header")
console.log(header)
let mbtn = document.querySelector(".m_btn")
console.log(mbtn)
mbtn.addEventListener("click",function(){
    header.classList.toggle("on")
})

// 디자인 work에 hover했을때 li 변환
// $(function(){
//     $("#section4 .projectlist li").hover(function(){
//         $("#section4 .projectlist li").removeClass("on");
//         $(this).addClass("on");
//     })
// })

$(function(){
  $(".top").click(function(){
    console.log("클릭");
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveTo(1);  // 첫 번째 섹션으로 이동(fullpage.js는 필수삽입)
    } else {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    }
  });

  // 디자인 work 슬라이드 적용
  $(function(){
    $(".projectlist_slider").slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    })
  })
});
