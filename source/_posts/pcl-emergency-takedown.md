---
license: cc_by_nc
title: PCL 下载源紧急下架事件
abbrlink: 0f61
date: 2026-10-20 20:45:07
expires: 2027-10-20 20:45:07
category: 'PCL 启动器'
tags:
thumbnail: /202610/0f61/pcl-takedown.png
excerpt: 10 月 20 日，PCL 启动器采取的一系列相关措施，以及其补救方法。
---

*[跳转到 PCL 下载](#下载)*

## 当前情况概述

*以下信息来自于网络，不完全确保准确性。*

据龙腾猫跃本人所述，一位小孩向某个私服充钱，然后其家长举报服务器，并连坐了 PCL 启动器。因此，龙腾猫跃暂时关闭了 PCL 的 Minecraft 下载功能。

详细信息请前往这个博客 → https://www.lyyweb.top/archives/5g7q9sd6/

## 影响

- PCL 启动器（正式版 2.99.0.0 (内部 413.5) / 快照版 2.99.0.0 (内部 414.0)）将不再具有从下载源下载原版 Minecraft 的功能。
  - 受此影响，整合包也将无法正常安装。
  - ~~一处吐槽：为什么要使用 `2.99` 这样的墓碑版本号……~~

- 其他第三方 Minecraft 启动器可能会考虑跟进该措施。
  - 目前已知的**已经跟进该措施**的第三方启动器：
    [Hello! Minecraft Launcher (HMCL)](https://github.com/HMCL-dev/HMCL)（开发版 3.17.0.362）
    [PCL Community Edition (PCL CE)](https://github.com/PCL-Community/PCL-CE)（正式版 2.15.1）
    [Zalith Launcher 2](https://github.com/ZalithLauncher/ZalithLauncher2)（2.7.2；有相关回滚记录 [`76588ef`](https://github.com/ZalithLauncher/ZalithLauncher2/commit/76588efb2a16f7a5b64bb6ffddb2e342cc93e9ec) 但未推送新版本）

  - 目前已知的**即将跟进/曾跟进过该措施**的第三方启动器：
    [Fold Craft Launcher (FCL)](https://github.com/FCL-Team/FoldCraftLauncher)（有相关提交记录 [`a36e1e4`](https://github.com/FCL-Team/FoldCraftLauncher/commit/a36e1e42292d6a67c93be0dafbfdceff01823e71) 但未推送新版本）
    [Quanta Craft Launcher (QCL)](https://github.com/ALLEN201123/Quanta-Craft-Launcher)（仅 1.5.3）

## 补救措施

如果你仍希望使用 PCL 下载并启动 Minecraft：

由于 PCL 仅在最新版本开启了该限制，如果你仍想通过 PCL 下载 Minecraft，**请不要更新 PCL**。
如果你还未更新 PCL，可以在 `设置` > `其他` > `启动器` > `启动器更新` 中选择 `关闭更新提示` 来暂时屏蔽后续更新。

如果你打开了 PCL，但发现有一个强制更新的弹窗，**不要点击 <kbd>更新 PCL</kbd> 按钮、不要通过 <kbd>ESC</kbd> 等快捷键关闭弹窗**。
请通过 <kbd>Alt</kbd> <kbd>F4</kbd> 快捷键、从任务栏右键 PCL 图标、或使用任务管理器关闭 PCL 程序，然后：
- 断开所有网络连接，打开 PCL 程序，然后按上述操作暂时屏蔽后续更新；或
- 修改 PCL 文件夹中的 `Setup.ini` 文件，将 `SystemSystemUpdate` 的值改为 `3` 来暂时屏蔽后续更新。

如果你的 PCL 已经更新到无法下载 Minecraft 的版本，由于 PCL 没有回退更新的功能，请从可信来源或从本博客下载 PCL 程序文件。
为确保你的数据安全，**切勿贸然接受陌生人发送的 PCL 程序**，因为此时可能有人趁乱投毒！

## 安全注意

为防止下载到来源不明的 PCL 程序致使电脑中毒，请**务必**在下载 PCL 程序后，校验 PCL 程序的 SHA-256 哈希值，以确保 PCL 程序未受到任何篡改。

几个常见 PCL 版本的 SHA-256 哈希值如下（是 **exe 文件**而不是 zip 压缩包的哈希值）：

| 版本 | SHA-256 哈希 |
|---------------|--------------------------------------------------------------------|
| 快照 2.99.0.0 | `5b64d6d540c376390470cea3ab99d47661e8bca81be2ba647ea83e7d2e9428fa` |
| 快照 2.14.0.0 | `77fbc26a13abf725dbd26038cba023224c2ce5518f3ee9c4608acb2274d753f0` |
| 快照 2.13.1.1 | `109f1208504299a11a7aadc5ac78307467d8be1e73dd33bd00d4789afce6b1e1` |
| 正式 2.99.0.0 | `6b6e1260cb5a1d6a303855f1c60cab3d0bc1aebba7e40a964180188b271e7386` |
| 正式 2.14.0.0 | `5582952ded3b443503f66c23b810802bd20f1a3e847b54d9e09653a825859a36` |
| 正式 2.13.1.1 | `30eb93c62fc51ede0898648e67455478a3d5a4f279938ae65aec77b84cb9703f` |

对于 Patch 包：由于 PCL 程序在 Patch 之后 SHA-256 哈希值也可能会发生变化，且 Patch 本身存在一定风险，本表不提供 Patch 包的哈希值，**请自行判断是否含毒**。

## 下载

出于方便考虑，本博客将暂时提供 PCL 正式版 2.14.0.0 的下载。
SHA-256（exe 程序）：`5582952ded3b443503f66c23b810802bd20f1a3e847b54d9e09653a825859a36`

{% button text="PCL&#32;正式版&#32;2.14.0.0" url="/shared_files/PCL%20%e6%ad%a3%e5%bc%8f%e7%89%88%202.14.0.0.zip" target="_blank" icon="fa-solid&#32;fa-download" size="lg" align="center" %}
由于 PCL 快照版对分发有一定限制，本博客将不予提供 PCL 快照版下载。

## 参考文献

- https://www.lyyweb.top/archives/5g7q9sd6/