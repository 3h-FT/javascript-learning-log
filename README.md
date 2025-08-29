# 📘 JavaScript学習ログ & ミニプロジェクト集

> JavaScriptの基礎から応用を体系的に学び、自作アプリケーションの開発へと繋げるための学習ログ・進捗管理用リポジトリです。

---

## 📚 目次
- [🎯 このリポジトリの目的](#-このリポジトリの目的)
- [🔧 使用ツール](#-使用ツール)
- [🚀 学習の流れと進捗状況](#-学習の流れと進捗状況)
  - [🔰 ステップ1：基礎学習](#-ステップ1基礎学習ドットインストール)
  - [🛠 ステップ2：過去作品のリメイク](#-ステップ2過去作品のリメイク)
  - [🎮 ステップ3：オリジナルアプリ開発](#-ステップ3オリジナルアプリ開発)
- [📌 注意](#-注意)
- [💬 おわりに](#-おわりに)

---

## 🎯 このリポジトリの目的

Ruby on RailsでWebアプリを開発する中で、フロントエンドのUI/UX改善にはJavaScriptの理解が不可欠だと実感しました。

このリポジトリでは、JavaScriptの文法や構造を体系的に学習し、小規模なアウトプットを重ねながら、最終的にはゲーム風のアプリケーション開発を目指します。

---

## 🔧 使用ツール

- [ドットインストール](https://dotinstall.com/)（※有料教材のためコードは非公開）
- GitHub Projects（進捗管理）
- GitHub Issues（学習ログ記録）
- Visual Studio Code（エディタ）
- ターミナル（WSL：Windows上でLinux環境を利用）

---

## 🚀 学習の流れと進捗状況

### 🔰 ステップ1：基礎学習（ドットインストール）

**目的：** JavaScriptの基礎をハンズオン形式で学ぶ  
🔗 URL：[ドットインストール](https://dotinstall.com/)

> ※記録は別リポジトリにて管理。有料教材のため、コードは公開しません。

**進捗状況：**
- [x] 第1章：JavaScriptを体験しよう（小題1）
- [x] 第2章：JavaScriptの基礎を習得しよう（小題1～4）
- [x] 第3章：もっと詳しくJavaScriptを学ぼう（小題1～7）
- [x] 第4章：よく見るUIを作ってみよう（小題1～5）
- [x] JavaScriptでミニアプリを作ってみよう（全6項目）
- [x] JavaScriptでもっと高度なミニアプリを作ろう（全6項目）

---

### 🛠 ステップ2：過去作品のリメイク

#### 🎓 大学時代に制作したバス時刻表Webページ（2016年）

**目的：**  
大学時代（2016年）に、HTMLに初めて触れたときに作成したWebページをリメイクします。
当時はHTMLを始めとしたWEB制作に関する知識がまったくなく、構造も今見ると荒削りだったため、現在のスキルを活かしてコードの整理や機能追加、デザインの改善に取り組みます。

**補足：**
- 現在時刻の表示は`bustime.js`という提供素材を使用していましたが、リメイクでは使用しません。(提供素材ではなく自作する予定)
- バス画像はフリー素材、それ以外のコードは当時のネットから情報を得て作った自作です。
- デプロイは行わず、このリポジトリ内でコードを管理予定です。
- 学習のアウトプット目的なのでできるだけReact等使わずに自作してみる

**リメイクでの目標：**
- [ ] JavaScriptで現在時刻の表示処理を実装（外部ライブラリ不使用）
- [ ] 指定時刻までのカウントダウン機能を追加
- [ ] UIデザインを現代風に改善（レスポンシブ対応）
※状況によって追加変更あり

📸 **スクリーンショット（ビフォー・アフター）予定**  
ビフォー（2016年当時の実装）

[![Image from Gyazo](https://i.gyazo.com/c2a1633b1bd716522a3317b2b987e31b.gif)](https://gyazo.com/c2a1633b1bd716522a3317b2b987e31b)

<details>
<summary>📄 旧HTMLコード抜粋（タブ切替と時刻表示）</summary>

```html
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="index.jp.css" type="text/css" />
		<script src="bustime.js"></script>
		
		<script type="text/javascript"><!--
			function ChangeTab(tabname) {
				// 全部消す
				document.getElementById('tab1').style.display = 'none';
				document.getElementById('tab2').style.display = 'none';
				// 指定箇所のみ表示
				document.getElementById(tabname).style.display = 'block';
			}
			// --></script>
	</head>
	<body>
			<div id="background">
			<div id="jikoku">現在時刻</div>
			<div id="clock" class="clock">
			<span data-type="clock" data-format="hh:mm:ss">読み込み中</span>
			</div>
			<p class="tabs">
			<a href="#tab1" class="tab1" onclick="ChangeTab('tab1'); return false;">○○○○行き</a>
			<a href="#tab2" class="tab2" onclick="ChangeTab('tab2'); return false;">××行き</a>
			</p>
			<div class="tabbox">
				<p class="tabs">
				</p>
				<div id="tab1" class="tab">
					<p><span id="day">土曜・祝日ダイヤ<a href="index_jp.html">→平日ダイヤはこちら</a></p></span>
						<p id="now"><img src="images/seian_stu.png" /></p>
				</div>
				<div id="tab2" class="tab">
						<p><span id="oneday">土曜・祝日ダイヤ<a href="index_jp.html">→平日ダイヤはこちら</a></p></span>
						<p id="now"><img src="images/ogoto_stu.png" /></p>
				</div>
				</div>
			
			<script type="text/javascript"><!--
			// デフォルトのタブを選択
			ChangeTab('tab1');
			// --></script>
			
	</body>
</html>
```
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="index_jp.css" type="text/css" />
		<script src="bustime.js"></script>
		
		<script type="text/javascript"><!--
			function ChangeTab(tabname) {
				// 全部消す
				document.getElementById('tab1').style.display = 'none';
				document.getElementById('tab2').style.display = 'none';
				// 指定箇所のみ表示
				document.getElementById(tabname).style.display = 'block';
			}
			// --></script>
	</head>
	<body>
			<div id="background">
			<div id="jikoku">現在時刻</div>
			<div id="clock" class="clock">
			<span data-type="clock" data-format="hh:mm:ss">読み込み中</span>
			</div>
			<p class="tabs">
			<a href="#tab1" class="tab1" onclick="ChangeTab('tab1'); return false;">○○○○行き</a>
			<a href="#tab2" class="tab2" onclick="ChangeTab('tab2'); return false;">××行き</a>
			</p>
			<div class="tabbox">
				<p class="tabs">
				</p>
				<div id="tab1" class="tab">
					<p><span id="day">平日ダイヤ<a href="index.jp.html">→土曜・祝日ダイヤはこちら</a></p></span>
						<p id="now"><img src="images/seian_hei.png" /></p>
				</div>
				<div id="tab2" class="tab">
						<p><span id="oneday">平日ダイヤ<a href="index.jp.html">→土曜・祝日ダイヤはこちら</a></p></span>
						<p id="now"><img src="images/ogoto_hei.png" /></p>
				</div>
				</div>
			
			<script type="text/javascript"><!--
			// デフォルトのタブを選択
			ChangeTab('tab1');
			// --></script>
	</body>
</html>
```
```css
@charset "utf-8";

* {
	margin: 0px;
	padding: 0px;
}

html {
	background-color: #dddddd;
}
	
body {
	width: 1110px;
	height: 90%;
	margin-left: auto;
	margin-right: auto;
	padding: 20px;
	background-color: #ffffff;
	
	font: 16px sans-serif;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}

/* 背景の設定 */
#background {
	/* 横幅と高さの指定 */
	width: 1110px;
	height: 670px;
	margin-right: 10%;
	background-image: url("images/bus.png");
	background-size: cover;
	/*border: 1px solid white;*/
}

span {
	color: #FF367F;
}

#day {
	font-size: 20px; 
	margin: 20px 0px 0px 350px; width: 25em; padding: 8px;
	border: 0px solid blue; background-color: #FFA500;
	text-align: center;
	 }

#oneday {
	 font-size: 20px;
	margin: 20px 0px 0px 350px; width: 25em; padding: 8px;
	border: 0px solid blue; background-color: #00BFFF;
	text-align: center;
	 }

#jikoku {
	font-size: 35px;
	width: 80%;
	margin-left: 35%;
}

#clock {
	font-size: 70px;
	width: 80%;
	margin-left: 37%;
}

#link {
	margin-top: 25px;
	margin-left: 80%;
}
<style type="text/css"><!--
/* ▼(A)表示領域全体 */
div.tabbox { margin: 0px; padding: 0px; width: 400px; }

/* ▼(B)タブ部分 */
p.tabs { margin: 0px 0px 0px 400px; padding: 0px; }
p.tabs a {
	/* ▼(B-2)リンクをタブのように見せる */
	display: block; width: 8em; float: left;
	margin: 20px 0px 0px 0px; padding: 10px;
	text-align: center;
}
/* ▼(B-3)各タブの配色 */
p.tabs a.tab1 { background-color: #cecece;  color: white; }
p.tabs a.tab2 { background-color: #BBBBBB; color:white;}
p.tabs a:hover { color: yellow; }

/* ▼(C)タブ中身のボックス */
div.tab {
	font-size: 30px;
	/* ▼(C-2)ボックス共通の装飾 */
	height: 400px; overflow: auto; clear: left;
}

	#now {
	margin-left: 15%;
	}
	

/* ▼(C-3)各ボックスの配色 */
div#tab1 { border: 0px solid blue; background-color: #cecece; }
div#tab2 { border: 0px solid #aaaa00; background-color: #BBBBBB; }
div.tab p { margin: 0.5em; }
--></style>

```
※JSは提供素材のため非公開
</details>

アフター
出来上がり次第添付

Figma：(https://www.figma.com/design/TD64AvRf7tlBDGfRjwwYMN/%E3%83%90%E3%82%B9%E3%81%AE%E6%99%82%E5%88%BB%E8%A1%A8?node-id=0-1&t=LiHB6ZzTHcKvfQHr-1)

### 🎮 ステップ3：オリジナルアプリ開発

現在構想中：

> **“ゲーム風アプリ”**

- JavaScriptを用いたUI開発
- バックエンド構成はNode.js または Javaも学習中なのでアウトプットもかねてJAVAにするか開発スピードを考えてRuby on Railsにするかは検討中

リポジトリは分離して新たに作成予定です。

---

## 📌 注意

- ドットインストールの教材内容・コードは有料会員限定コンテンツに該当するため、著作権保護の観点から**一切公開していません**。
- 本リポジトリは**学習の証明・過程を可視化する目的**で構成されています。

---

## 💬 おわりに

今後もこのリポジトリを通じて、以下を継続予定です：

- 学習記録の追記（Issues に日々投稿）
- 古いコードのアップデート＆レビュー
- JavaScriptを用いたUIパターンの習得

ReactやAPI連携などにも挑戦していく予定です！

---
