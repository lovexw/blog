---
title: "博客系统使用指南"
date: "2023-12-25"
description: "详细介绍如何使用和部署这个博客系统"
---

# 博客系统使用指南

## 使用说明

### 创建新文章

1. 在 `posts` 目录下创建新的 `.md` 文件
2. 文件名将作为文章的 URL 路径（例如：`my-first-post.md` 的访问路径为 `/posts/my-first-post`）
3. 在文件开头添加文章信息：
   ```yaml
   ---
   title: "文章标题"
   date: "发布日期"
   description: "文章描述（可选）"
   ---
   ```
4. 使用 Markdown 格式编写文章内容

### Markdown 语法支持

本博客系统支持标准的 Markdown 语法，包括：

- 标题（H1-H6）：使用 `#` 到 `######`
- 文本格式化：
  - **粗体**：`**文本**`
  - *斜体*：`*文本*`
  - ~~删除线~~：`~~文本~~`
- 列表：
  - 无序列表：使用 `-` 或 `*`
  - 有序列表：使用 `1.`, `2.` 等
- 链接：`[链接文本](URL)`
- 图片：`![图片描述](图片URL)`
- 代码：
  - 行内代码：使用反引号 \`
  - 代码块：使用三个反引号 \```
- 引用：使用 `>` 符号
- 表格：使用 `|` 和 `-` 创建

## 部署方法

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目代码：
   ```bash
   git clone <项目地址>
   cd blog
   ```

2. 安装依赖：
   ```bash
   npm install
   # 或使用 yarn
   yarn install
   ```

### 本地开发

运行开发服务器：
```bash
npm run dev
# 或使用 yarn
yarn dev
```

访问 `http://localhost:3000` 查看效果。

### 生产环境部署

1. 构建项目：
   ```bash
   npm run build
   # 或使用 yarn
   yarn build
   ```

2. 启动生产服务器：
   ```bash
   npm run start
   # 或使用 yarn
   yarn start
   ```

### 使用 Vercel 部署

1. 在 [Vercel](https://vercel.com) 创建账号
2. 导入你的 GitHub 仓库
3. Vercel 会自动检测到这是一个 Next.js 项目并进行相应配置
4. 点击 "Deploy" 按钮即可完成部署

部署完成后，Vercel 会提供一个可访问的 URL。每次推送代码到主分支时，Vercel 会自动重新部署。

### 使用 Cloudflare Pages 部署

1. 在 [Cloudflare](https://dash.cloudflare.com) 注册并登录账号
2. 进入 Pages 页面，点击 "Create a project" 按钮
3. 选择 "Connect to Git"，授权并选择你的 GitHub 仓库
4. 配置构建设置：
   - 构建命令：`npm run build`
   - 输出目录：`.next`
   - 环境变量：
     - `NODE_VERSION`: `18`
     - `NPM_VERSION`: `9`
5. 点击 "Save and Deploy" 开始部署

部署完成后，Cloudflare Pages 会提供一个 `*.pages.dev` 域名。如果你有自己的域名：

1. 在项目设置中点击 "Custom domains"
2. 添加你的域名
3. 根据提示在你的 DNS 设置中添加 CNAME 记录

每次推送代码到主分支时，Cloudflare Pages 会自动触发重新部署。

## 自定义配置

### 主题配置

在 `src/config/theme.ts` 文件中可以修改主题相关的配置，包括：

- 颜色方案
- 字体设置
- 布局参数

### 其他配置

- `tailwind.config.js`：定制 Tailwind CSS 配置
- `next.config.js`：Next.js 相关配置
- `postcss.config.js`：PostCSS 配置

## 常见问题

1. **文章不显示？**
   - 确保文章文件位于 `posts` 目录下
   - 检查文章头部的 YAML 格式是否正确
   - 确保文件名不包含特殊字符

2. **样式不生效？**
   - 运行 `npm run dev` 重新启动开发服务器
   - 检查 `tailwind.config.js` 配置
   - 清除 `.next` 缓存目录后重试

3. **部署失败？**
   - 检查 Node.js 版本是否符合要求
   - 确保所有依赖都已正确安装
   - 查看构建日志了解具体错误信息