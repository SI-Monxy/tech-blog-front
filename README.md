# Shimon's Tech Blog (フロントエンド)

<img src="https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js" alt="Next.js version" /> <img src="https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react" alt="React version" /> <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript" alt="TypeScript version" /> <img src="https://img.shields.io/badge/shadcn%2Fui-latest-black?style=flat" alt="shadcn/ui" />

モダンなWeb技術を活用した個人テックブログのフロントエンド実装です。Next.js 15の最新機能を活用し、パフォーマンスとユーザー体験の最適化を実現しています。

## 主な機能と技術スタック

### フロントエンド
- **Next.js 15**
    - App Routerによる最新のルーティング
    - Server Components活用による最適化
    - TypeScriptによる型安全性

- **UI/UX**
    - shadcn/uiによるモダンなコンポーネント
    - ダークモード対応
    - レスポンシブデザイン
    - Tailwind CSSによるスタイリング

- **コンテンツ管理**
    - マークダウンベースの記事管理
    - シンタックスハイライト対応
    - unified/remarkによるマークダウン変換

### 使用技術
- React 19
- TypeScript 5
- Tailwind CSS
- shadcn/ui
- next-themes
- unified/remark/rehype
- Vercel

## プロジェクト構成
```
tech-blog/
├── app/                    # App Router pages
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   └── [id]/              # 記事詳細ページ
├── components/            # UIコンポーネント
│   ├── ui/               # shadcn/uiコンポーネント
│   └── blog/             # ブログ固有のコンポーネント
├── content/              # マークダウンコンテンツ
├── lib/                  # ユーティリティ関数
└── public/              # 静的アセット
```

## 開発ステータス

### 実装済み ✅
- プロジェクトの基本設定
- マークダウンパース機能
- ダークモード切り替え
- レスポンシブデザイン
- アクセシビリティ対応
- シンタックスハイライト

### 開発中 🚧
- 記事一覧ページのUIブラッシュアップ
- 画像最適化
- SEO対策強化

### 今後の展望 📝
- 検索機能
- タグ機能
- Goバックエンドとの連携
- コメント機能
- SNSシェア機能

## 工夫した点

1. **パフォーマンス最適化**
   - Server Componentsの適切な活用
   - 画像の最適化
   - 効率的なコード分割

2. **開発体験の向上**
   - 一貫性のあるコーディング規約
   - 型安全性の確保
   - モジュール化された構造

3. **UI/UXの改善**
   - ダークモード対応
   - アクセシビリティへの配慮
   - レスポンシブなデザイン

## 作者

岩田史門 ([@SI_Monxy](https://x.com/SI_Monxy))

---

このプロジェクトは私の技術的な成長とWeb開発スキルの向上を目的として開発しています。継続的に機能追加とリファクタリングを行い、よりよいブログプラットフォームを目指しています。