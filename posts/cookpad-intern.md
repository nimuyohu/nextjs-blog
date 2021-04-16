---
title: 'クックパッド春インターンに参加しました'
date: '2021-03-29'
---

**にむよふ** と申します。
2021年のクックパッド春インターンに参加したので、その学んだ事と参加記録と感想をまとめました。

# インターンの出会い

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Web フロントエンドをテーマにオンラインインターンやるよ！講師は私です！ | Cookpad Online Spring Internship 2021 を開催します！ - クックパッド開発者ブログ <a href="https://t.co/DOC159iudI">https://t.co/DOC159iudI</a></p>&mdash; hokaccha (@hokaccha) <a href="https://twitter.com/hokaccha/status/1357641899864039425?ref_src=twsrc%5Etfw">February 5, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

こちらのツイートを拝見し、中身をみたらモダンフロントエンドに特化していて面白そうだったので応募してみました。

# インターン選考

書類選考とプログラミング課題がありました。プログラミング課題に関しては、競技プログラミングのような問題でした。競プロは得意では無いですが、何とか解けました。

# インターン概要

クックパッドのインターン用に用意されたAPIを用いて、Next.jsとTypeScriptを使って仕様書をもとに５日間かけてレシピサイトを作るというものでした。基本課題と応用課題に別れていて基本課題は、レシピ一覧画面、レシピ詳細画面、検索機能、次のページと前のページを表示させるものでした。応用課題は、OGP生成、CSS in JS、マイフォルダ機能、パフォーマンス最適化、無限スクロール機能等々がありました。

[詳細](https://gist.github.com/hokaccha/7003c700f7d2ad276bfb458edd862abe "詳細")

TypeScript、Next.jsでの開発は初挑戦だったたので、ワクワクしてました。


# インターン前

インターン3日前に、下の写真のようなノベルティが届きました。ハッカ油、ZERO(チョコレート)、クックパッドロゴ入りエコバッグ、パスタメジャー、ステッカーが届きました。社内ハッカソンのHackradeのハッカのハッカ油とゼロ（零度＝レード）をかけているようです。届いた時はテンション上がりました。

![クックパッドノベルティ](/images/cookpad.jpeg "novelty")
# １日目

企業説明会とインターン概要の説明を聞きました。その後、JavaScript、TypeScript、React、Next.jsの講義動画を共有されたので、それを見て学習をはじめました。この講義動画はWebフロントエンドの技術の概要を掴むには凄く分かりやすくて良かったです。Webフロントエンド開発してみたい方、ぜひ見てください！

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ieZB3NFJTa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# ２~４日目

さっそく仕様書を元に、コード書いて開発していきました。つまづいた時はTAさんにSlackで質問しながら進めました。Slackに質問を投げかけた時に爆速なレスポンスで的確な回答をもらえてメンターさんやっぱりすごいなと思いました。私は、なんとか2日半かけてなんとか基本課題が完成しました。残りの発展課題は、BootStrapの導入やOGP生成、パフォーマンス最適化、マイフォルダ機能に取り組みました。


# ５日目

午前は発展課題に取り組んで、午後からは発表資料の作成行ってその後は成果発表を行いました。参加者の中には、２日目の朝に基本課題を完成させる人や応用課題全てやり遂げる人など圧倒的に強い人がいてめちゃめちゃ圧巻されてモチベーションが上がりました。他の方々も、デザインの違いや機能のオリジナル性を追求している成果物もあって面白いなと思いました。

# 感想

TypeScriptやNext.jsは初めて挑戦しましたが、TypeScriptはリリース前にエラーの早期発見に役立つし、Next.jsはレンダリングの処理が簡単に実装できるのがすごい便利で、今後も使っていきたいと思いました。また、使ったことのない技術で短期間で開発するというのは凄い難しかったですが、新しい知見が得られること多く「新しい技術に挑戦してみる」ということは刺激的だし経験値も増えるので、同じ技術に固執せずチャレンジする事はとても大事なんだと思いました。

# 学んだ事

- わからない時に調べる事に何十分もかけるより、すぐに質問する方が効率が良い事。
- 2日の超短期間ハッカソンなら徹夜するけど、５日となると1日徹夜すると次の日の日中のパフォーマンスが下がるので、しっかり寝て日中に効率よく開発する事。
- Next.jsがすごい便利なところ。（レンダリングのタイミングが選択できる。next/imageなど最適化が強い。APIが建てられる。OGPの設定が楽にできるetc）
- 同じ言語なのでサーバーサイドの処理なのか、クライアントサイドの処理なのか困惑しました。サーバーサイドでwindowオブジェクト使おうとしていて、詰まってしまった。
- 最初に環境変数をGitHubにあげてしまったので、日頃からセンシティブなファイルにはPushする前に.gitignoreする。コミット前にはgit diffを確認する。（TAさんも間違えてpushしたらしいので大丈夫と言われた笑）
- 質問したら、すぐにリアクションが付き的確に回答を貰えて、TAさんがやっぱりすごい。こういう質問しやすい環境だと、一人で抱え込まずに周りに助けを求めやすくなるのでこういう環境づくりは入社した後でもいつでも大事だと思った。

# 最後に

インターン関係者の皆さん、大変お世話になりました。ありがとうございました。

## 成果物
<iframe width="100%" height="315" src="https://www.youtube.com/embed/8SQNbsNfu34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
