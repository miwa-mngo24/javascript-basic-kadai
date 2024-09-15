// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  // h2要素を新しく作成する
  const h2 = document.createElement("h2");

  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    //h2要素を「ボタンをクリックしました」というテキストに変更する
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
