---
title: "Docker,Laravel,ReactのSPA開発【開発編】"
date: "2025-01-07"
description: "本記事では、Dockerを使用してLaravelバックエンドとReactフロントエンドの環境を構築し、SPA（Single Page Application）を開発する手法を解説します。Docker Composeを使用して複数のサービスを簡単に管理し、効率的な開発環境を整えます。"
---

# はじめに
こんにちは、Webエンジニアの岩田史門([@SI_Monxy](https://x.com/SI_Monxy))です！
今回はDocker、Laravel、Reactを用いたSPA開発のハンズオンについて記事を書いてみました！
改善点や修正点があれば、コメントにて優しくご指導いただけると嬉しいです！

# 概要
本記事では、Dockerを使用してLaravelバックエンドとReactフロントエンドの環境を構築し、SPA（Single Page Application）を開発する手法を解説します。Docker Composeを使用して複数のサービスを簡単に管理し、効率的な開発環境を整えます。

# 開発
## Laravel APIの作成
routes/api.php ファイルを編集し、APIルートを追加します。

``` php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from Laravel!']);
});
```

## Reactフロントエンドの作成
frontend/src/App.js ファイルを編集し、Laravel APIと通信するコードを追加します。

``` typescript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
```

# 実行
すべてのサービスを起動するには、以下のコマンドを実行します。

``` bash
docker-compose up --build
```

ブラウザで http://localhost:3000 を開くと、ReactアプリケーションがLaravelのAPIからデータを取得してデータを表示します。

# 参考
- [React ドキュメント](https://ja.react.dev/)
- [Laravel ドキュメント](https://laravel.com/docs/11.x)
- [Docker ドキュメント](https://www.docker.com/)