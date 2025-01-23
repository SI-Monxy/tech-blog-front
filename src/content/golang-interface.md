---
title: "Go言語の構造体とインターフェースについてまとめてみた"
date: "2025-01-23"
description: "Go言語は、オブジェクト指向プログラミング（OOP）の概念をサポートしており、構造体とインターフェースを使用することで実現できます。この記事では、Goにおける構造体とインターフェースの基本を理解し、オブジェクト指向のプログラミング方法について学びます。"
---

# はじめに
こんにちは、Webエンジニアの岩田史門([@SI_Monxy](https://x.com/SI_Monxy))です！
今回はずっと気になっていたGo言語に入門してみたので、構造体とインターフェースについて記事を書いてみました！
改善点や修正点があれば、コメントにて優しくご指導いただけると嬉しいです！

# 概要
Go言語は、オブジェクト指向プログラミング（OOP）の概念をサポートしており、構造体とインターフェースを使用することで実現できます。この記事では、Goにおける構造体とインターフェースの基本を理解し、オブジェクト指向のプログラミング方法について学びます。

# 構造体とは
構造体（struct）は、フィールドの集まりを定義するための型です。構造体は、データをカプセル化し、関連するデータを一つの単位として扱うことができます。

# 構造体の定義と使用
以下の例では、Person構造体を定義し、そのインスタンスを作成します。

``` go
package main

import "fmt"

// Person構造体の定義
type Person struct {
    Name string
    Age  int
}

// メソッドの定義
func (p Person) Greet() {
    fmt.Printf("Hello, my name is %s and I am %d years old.\n", p.Name, p.Age)
}

func main() {
    // Person構造体のインスタンス化
    p := Person{Name: "Alice", Age: 30}
    p.Greet()
}
```

このコードでは、Person構造体を定義し、Greetメソッドを追加しています。main関数でPersonのインスタンスを作成し、メソッドを呼び出しています。

# インターフェースとは
インターフェース（interface）は、メソッドのシグネチャ（名前、引数、戻り値）を定義する型です。インターフェースを実装することで、異なる型に共通の動作を持たせることができます。

# インターフェースの定義と使用
以下の例では、Greeterインターフェースを定義し、それをPerson構造体に実装します。

``` go
package main

import "fmt"

// Greeterインターフェースの定義
type Greeter interface {
    Greet()
}

// Person構造体の定義
type Person struct {
    Name string
    Age  int
}

// Person構造体にGreeterインターフェースを実装
func (p Person) Greet() {
    fmt.Printf("Hello, my name is %s and I am %d years old.\n", p.Name, p.Age)
}

func main() {
    var g Greeter

    // Person構造体のインスタンス化
    p := Person{Name: "Alice", Age: 30}

    // GreeterインターフェースにPerson構造体のインスタンスを代入
    g = p
    g.Greet()
}
```

このコードでは、Greeterインターフェースを定義し、Person構造体がそのインターフェースを実装しています。main関数では、Greeter型の変数にPersonインスタンスを代入し、メソッドを呼び出しています。

# 構造体とインターフェースの組み合わせ
構造体とインターフェースを組み合わせることで、柔軟で再利用可能なコードを作成できます。以下の例では、複数の構造体が同じインターフェースを実装し、それぞれ異なる動作を持たせています。

``` go

package main

import "fmt"

// Greeterインターフェースの定義
type Greeter interface {
    Greet()
}

// Person構造体の定義
type Person struct {
    Name string
}

// Person構造体にGreeterインターフェースを実装
func (p Person) Greet() {
    fmt.Printf("Hello, my name is %s.\n", p.Name)
}

// Robot構造体の定義
type Robot struct {
    ID string
}

// Robot構造体にGreeterインターフェースを実装
func (r Robot) Greet() {
    fmt.Printf("Greetings, I am robot ID %s.\n", r.ID)
}

func main() {
    var greeters []Greeter

    // PersonとRobotのインスタンスを作成し、Greeterインターフェースのスライスに追加
    greeters = append(greeters, Person{Name: "Alice"})
    greeters = append(greeters, Robot{ID: "R2D2"})

    // Greeterインターフェースを実装する全てのインスタンスのGreetメソッドを呼び出し
    for _, greeter := range greeters {
        greeter.Greet()
    }
}
```

このコードでは、PersonとRobot構造体がそれぞれGreeterインターフェースを実装しています。main関数でそれらのインスタンスをGreeter型のスライスに追加し、全てのインスタンスのGreetメソッドを呼び出しています。

# まとめ
この記事では、Go言語における構造体とインターフェースを使用したオブジェクト指向プログラミングの基本について説明しました。構造体はデータのカプセル化に、インターフェースは共通の動作を定義するために使用されます。これらを組み合わせることで、柔軟で再利用可能なコードを作成できます。

# 参考文献
- [Effective Go - Structs](https://go.dev/doc/effective_go#structs)
- [A Tour of Go - Methods and Interfaces](https://go.dev/tour/methods/1)
- [Go by Example - Structs](https://gobyexample.com/structs)
- [Go by Example - Interfaces](https://gobyexample.com/interfaces)