/** @format */

$(function () {
  // スクロールの方向（-1の時には左、1の時には右）
  let dir = -1;

  // スクロールのインターバル（何秒ごとにスクロールさせるか）
  let interval = 3000; // 3000ミリ秒 = 3秒

  // スクロールのアニメーションの時間
  let duration = 700; // 700ミリ秒 = 0.7秒

  // タイマー用の変数
  let timer;

  // liの順番を変更（3番目を1番目にする）
  $("#slide ul").prepend($("#slide li:last-child"));

  // スライドの位置を設定（画像1枚分左にずらす）
  $("#slide ul").css("left", -1000);

  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    // スクロールの方向の判断
    if (dir == -1) {
      // スライドを左に移動
      $("#slide ul").animate({ left: "-=1000px" }, duration, function () {
        // liの順番を変更（1番目を3番目にする）
        $(this).append($("#slide li:first-child"));
  
        // liの位置を変更
        $(this).css("left", -1000);
      });
    } else {
      // スライドを右に移動
      $("#slide ul").animate({ "left": "+=1000px" }, duration,
        function() {
          // liの順番を変更（3番目を1番目にする）
          $(this).prepend($("#slide li:last-child"));
  
          // liの位置を変更
          $(this).css("left", -1000);

          // スクロールの方向を元に戻す
          dir = -1;
        }
      );
    }
  }

  // 前へ戻るボタン
  $("#prevBtn").click(function () {
    // スクロールの方向の切り替え（左）
    dir = 1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });

  // 次へ進むボタン
  $("#nextBtn").click(function () {
    // スクロールの方向の切り替え（右）
    dir = -1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });
});
