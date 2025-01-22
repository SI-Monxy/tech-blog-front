---
title: "Go言語でREST API開発：CRUD操作を実装"
date: "2025-01-22"
description: "本記事では、Goを使って基本的なCRUD操作を行うREST APIを構築する方法を説明します。この記事を読み終えると、Go言語で簡単なREST APIを作成し、CRUD（Create、Read、Update、Delete）操作を実装する方法が理解できます。"
---

# はじめに
こんにちは、Webエンジニアの岩田史門([@SI_Monxy](https://x.com/SI_Monxy))です！
今回は気になっていたGo言語に入門してみたのでREST APIの実装について記事を書いてみました！
改善点や修正点があれば、コメントにて優しくご指導いただけると嬉しいです！

# 概要
この記事では、Goを使って基本的なCRUD操作を行うREST APIを構築する方法を説明します。この記事を読み終えると、Go言語で簡単なREST APIを作成し、CRUD（Create、Read、Update、Delete）操作を実装する方法が理解できます。

# プロジェクトのセットアップ
まず、プロジェクトディレクトリを作成し、go modを初期化します。
``` bash
mkdir go-rest-api
cd go-rest-api
go mod init go-rest-api
```

次に、必要なパッケージをインストールします。ここでは、HTTPルーティングにgorilla/muxを使用します。

``` bash
go get -u github.com/gorilla/mux
```

# メインアプリケーションファイルの作成
main.goファイルを作成し、基本的なセットアップを行います。

``` go
package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	
	// ルートを設定
	router.HandleFunc("/api/items", getItems).Methods("GET")
	router.HandleFunc("/api/items/{id}", getItem).Methods("GET")
	router.HandleFunc("/api/items", createItem).Methods("POST")
	router.HandleFunc("/api/items/{id}", updateItem).Methods("PUT")
	router.HandleFunc("/api/items/{id}", deleteItem).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", router))
}
```

# モデルの作成
データを表すモデルを作成します。ここでは簡単なアイテムモデルを作成します。

``` go
package main

type Item struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}
```

# ハンドラ関数の実装
CRUD操作を行うためのハンドラ関数を実装します。ここではメモリ内のデータ構造を使用しますが、実際にはデータベースを使用することが一般的です。

``` go
package main

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
)

var items []Item

func getItems(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
}

func getItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, item := range items {
		if item.ID == params["id"] {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	http.NotFound(w, r)
}

func createItem(w http.ResponseWriter, r *http.Request) {
	var item Item
	_ = json.NewDecoder(r.Body).Decode(&item)
	item.ID = "1" // ここでは簡単のためIDを固定していますが、実際にはユニークなIDを生成する必要があります
	items = append(items, item)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(item)
}

func updateItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range items {
		if item.ID == params["id"] {
			items = append(items[:index], items[index+1:]...)
			var newItem Item
			_ = json.NewDecoder(r.Body).Decode(&newItem)
			newItem.ID = params["id"]
			items = append(items, newItem)
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(newItem)
			return
		}
	}
	http.NotFound(w, r)
}

func deleteItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range items {
		if item.ID == params["id"] {
			items = append(items[:index], items[index+1:]...)
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	http.NotFound(w, r)
}
```

# サーバの起動と動作確認
すべてのファイルを保存した後、サーバを起動します。

``` bash
go run main.go
``` 

ブラウザやPostmanなどのツールを使って、APIエンドポイントにアクセスし、正しく動作するか確認します。

- GET /api/items - すべてのアイテムを取得
- GET /api/items/{id} - 指定したIDのアイテムを取得
- POST /api/items - 新しいアイテムを作成
- PUT /api/items/{id} - 指定したIDのアイテムを更新
- DELETE /api/items/{id} - 指定したIDのアイテムを削除

# まとめ
この記事では、Goを使って基本的なCRUD操作を行うREST APIを構築する方法を紹介しました。

# 参考
- [Gorilla Mux](https://github.com/gorilla/mux)
- [Goの公式ドキュメント](https://go.dev/doc/)
- [Postman](https://www.postman.com/)

