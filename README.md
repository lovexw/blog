# 个人博客系统

这是一个基于 Next.js 构建的现代化个人博客系统，支持 Markdown 文章编写、标签分类、文章归档等功能。

## 主要特性

- 基于 Next.js 14 和 React 18 构建
- 使用 Markdown 编写文章
- 支持文章标签分类
- 文章归档功能
- 响应式设计，支持移动端浏览
- 支持文章搜索
- 支持分页显示
- 自动生成文章目录
- 上一篇/下一篇文章导航

## 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 本地开发

1. 克隆项目
```bash
git clone [项目地址]
cd blog
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看博客。

### 创建新文章

1. 在 `posts` 目录下创建新的 Markdown 文件，文件名格式为 `YYYYMMDD.md`（例如：`20240101.md`）

2. 在文件开头添加 Front Matter 信息：
```markdown
---
title: "文章标题"
date: "YYYY-MM-DD"
description: "文章描述"
---

这里是文章内容...
```

### 生产环境部署

1. 构建项目
```bash
npm run build
# 或
yarn build
```

2. 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 项目结构

```
├── posts/          # Markdown 文章目录
├── public/         # 静态资源目录
├── src/
│   ├── app/       # 页面组件
│   ├── components/# React 组件
│   ├── utils/     # 工具函数
│   └── types/     # TypeScript 类型定义
└── package.json
```

## 主题配置

主题相关的配置在 `src/config/theme.ts` 文件中，你可以根据需要修改主题配置。

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- gray-matter (Markdown Front Matter 解析)
- markdown-it (Markdown 渲染)

## 许可证

MIT License