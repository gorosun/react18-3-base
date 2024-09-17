/** @type {import("prettier").Config} **/
const config = {
  semi: true, // ステートメントの最後にセミコロンを追加する
  tabWidth: 2, // インデント幅を2スペースに設定する
  singleQuote: true, // シングルクォートを使用する
  trailingComma: "es5", // ES5に準拠する箇所で末尾のカンマを追加する（配列やオブジェクト）
  printWidth: 80, // 1行あたりの最大文字数を80文字に設定する
  jsxBracketSameLine: false, // JSXの閉じタグを改行する
};

export default config;
