# 🧪 Wallet Checker

一个轻量的以太坊钱包工具，支持通过私钥快速生成钱包地址，并验证与目标地址是否匹配。基于 **React + TypeScript + Chakra UI + ethers.js** 构建，适合学习或快速验证钱包控制权。

---

## ✨ 功能特性

- 输入私钥，快速推导出对应钱包地址
- 可选填写目标地址，检查是否匹配 ✅ / ❌
- 自动校验私钥格式并显示错误提示
- 使用 Chakra UI 构建，界面现代、交互友好
- 完全前端执行，无需网络请求，安全可靠

---

## 🧱 技术栈

- React + Vite
- TypeScript
- Chakra UI
- ethers.js

---

## 📦 TODO（后续计划）

- [ ] 助记词导入钱包地址（支持 BIP39）
- [ ] 钱包地址二维码导出
- [ ] 查询链上余额（支持主流 RPC）
- [ ] 简易签名 / 验证信息功能
- [ ] 多语言助记词支持（英文/中文）

---

## 🛡️ 安全提醒

本工具完全在浏览器本地执行，不会联网请求，也不会上传任何私钥信息。  
建议 **仅用于学习和测试场景**，切勿使用真实资产的私钥！

---