---
license: cc_by_nc_nd
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

## 影响

- PCL 启动器将不再具有从下载源下载原版 Minecraft 的功能。
  - 受此影响，整合包也将无法正常安装。

- 其他第三方 Minecraft 启动器（E.g. HMCL）可能会考虑跟进该措施，但目前只有 PCL 和 PCL <ruby>CE<rt>社区版</rt></ruby> 应用了该措施。

## 补救措施

如果你仍希望使用 PCL 下载并启动 Minecraft：

由于 PCL 仅在最新版本开启了该限制，如果你仍想通过 PCL 下载 Minecraft，**请不要更新 PCL**。
如果你还未更新 PCL，可以在 `设置` > `其他` > `启动器` > `启动器更新` 中选择 `关闭更新提示` 来暂时屏蔽后续更新。

如果你打开了 PCL，但发现有一个强制更新的弹窗，**不要点击 <kbd>更新 PCL</kbd> 按钮、不要通过 <kbd>ESC</kbd> 等快捷键关闭弹窗**。
请通过 <kbd>Alt</kbd> <kbd>F4</kbd> 快捷键、从任务栏右键 PCL 图标、或使用任务管理器关闭 PCL 程序，然后：
1. 断开所有网络连接，打开 PCL 程序，然后按上述操作暂时屏蔽后续更新；
2. 修改 PCL 文件夹中的 `Setup.ini` 文件，将 `SystemSystemUpdate` 的值改为 `3` 来暂时屏蔽后续更新。

如果你的 PCL 已经更新到无法下载 Minecraft 的版本，由于 PCL 没有回退更新的功能，请从值得信任的源下载 PCL 程序文件，或从本博客下载。
**切勿接受陌生人发送的 PCL 程序**，因为此时可能有人趁乱投毒！

## 下载

出于方便考虑，本博客将暂时提供 PCL 正式版 2.14.0.0 的下载。
SHA-256：`5582952ded3b443503f66c23b810802bd20f1a3e847b54d9e09653a825859a36`

{% button text="PCL&#32;正式版&#32;2.14.0.0" url="/shared_files/PCL%20%e6%ad%a3%e5%bc%8f%e7%89%88%202.14.0.0.zip" target="_blank" icon="fa-solid&#32;fa-download" size="lg" align="center" %}
由于 PCL 快照版对分发的限制非常严格，本博客将不予提供 PCL 快照版下载。

## 参考文献

- https://www.lyyweb.top/archives/5g7q9sd6/