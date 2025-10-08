// jQueryでスクロール時にフェードイン
function fadeInOnScroll() {
  $('.fade-in').each(function() {
    var elemTop = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    // 画面内に入ったらshowクラスを付与
    if (scrollPos + windowHeight > elemTop + 0) { // 0に変更して手前でなく即表示
      $(this).addClass('show');
    }
  });
}

// ページ読み込み時に実行
$(window).on('load', fadeInOnScroll);

// スクロール時に実行
$(window).on('scroll', fadeInOnScroll);