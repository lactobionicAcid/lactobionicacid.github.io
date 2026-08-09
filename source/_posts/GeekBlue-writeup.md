---
title: 极客蓝主题相关解密
abbrlink: a12a
date: 2026-06-16 21:56:08
category: 'PCL 启动器'
tag: ['个性化主题', '含有加密内容的页面']
thumbnail: 202606/a12a/head.webp
excerpt: 与极客蓝相关的解密 WRITEUP。部分内容需要使用密码访问。
---

本文档为 Plain Craft Launcher 启动器中的内置主题 “极客蓝” 相关解密的非正式 WRITEUP。

## 免责声明

<img src="niyaobeijia.webp" style="zoom:25%;" />

本文档含有部分**不可公开**的内容，在本文档中**使用[密码](#密码)保护**。发布这部分内容时请**慎重考虑**。

在密群外擅自发布与解密有关且未经公开<sub>*（在[该 GitHub 讨论区](https://github.com/Meloong-Git/PCL/discussions/3386)不可找到）*</sub>的内容可能会导致你被**踢出相关群聊**以及**承担相应后果**。

此外，发布这些内容也会**破坏**正在解密的人的体验。

如因发布不可公开的内容，而造成严重后果的，**本文档整理人 @lactobionicAcid 将不会承担任何责任**，一切后果请自负。

## 自主解密声明

<img src="self-solve.webp" style="zoom:100%;" alt="Fig. 仅靠网络搜索“完成”极客蓝解密的某人。现已被踢出密群。"/>

尽管似乎没有详细的规则进行限定，但为了更好的解密体验、以及照顾其他已完成解密的人的体验，本文档整理人 @lactobionicAcid 强烈推荐：**在完成解密前，不查阅本文章、其他博客的类似文章，或在网上搜索最终答案**，且尽量避免使用 AI 辅助解密或查找答案。

## 密码

本文档加密部分的密码为 `密群的 QQ 群号` + `密群的入群密钥`，中间**不要**用任何符号隔开。如果你已经完成了极客蓝主题的解密，你应当知道密码是什么。~~*除非你忘了入群密钥*~~

## 解密部分

### 上半部分解密
*上半部分解密中应当不包含任何不可公开内容。*

初始线索。

{% callout %}
gnp.dorC61\60\20\0202\moc.x1xa.2s\\\\:sptth
{% endcallout %}

不难看出，这是一个被倒序后的 HTTPS 链接。

{% callout %}
[https://s2.ax1x.com/2020/02/06/16Crod.png](https://s2.ax1x.com/2020/02/06/16Crod.png)
{% endcallout %}

这个链接指向一个图床（`s2.ax1x.com` 是路过图床的 S2 节点），为龙腾猫跃上传的一张名为 `16Crod.png` 的图片。
![](16Crod.png)

左侧为一个箱子图案，下方标有极浅小字 “MCBBS”，右侧为罗马数字 <u style="text-decoration: overline;">CXV</u>CMLXXXI，即 115981。
因此按照提示，需要访问 MCBBS 上编号为 115981 的帖子。

{% callout %}
https://www.mcbbs.net/thread-115981-1-1.html
{% endcallout %}

由于 MCBBS 关站，以上链接已无法访问，需要使用 Wayback Machine 访问网页快照。当然你不用，因为我把帖子的部分信息整理在了[腾讯文档](https://docs.qq.com/doc/DQVJuS0J0cnFtRFBR)上。

帖子中包含一张名为 `tijnp tiffut.png` 的图片，以及一个链接。

![](tijnp-tiffut.png)

{% callout %}
https:<!--取消链接解析-->//tijnp.jn/tiffut
{% endcallout %}

`https://` 后的内容经过了偏移量 1 的凯撒加密。（图片名称也是，解密后为 `shimo sheets.png`）

{% callout %}
https://shimo.im/sheets
{% endcallout %}

显然这个链接不完整，而资源 ID 在图片当中，以此补全链接。~~注意到图片上两个圈是数字 `0` 而不是英文字母 `O`~~

{% callout %}
[https://shimo.im/sheets/waa0J0aptokQEaJp](https://shimo.im/sheets/waa0J0aptokQEaJp)
{% endcallout %}

得到一个表格，在这个表格的第 `DI` 列第 10 行可以找到一串百度短链。

{% callout %}
[https://dwz.cn/W6ngY1lE](https://dwz.cn/W6ngY1lE)
{% endcallout %}

这个链接会自动重定向到：

{% callout %}
[https://pan.baidu.com/s/1pUQvKvop9ON7Pa4lCMTxDA?next=1PErfXH-5T1SfhNqmo1rKfQ&key=v4fh](https://pan.baidu.com/s/1pUQvKvop9ON7Pa4lCMTxDA?next=1PErfXH-5T1SfhNqmo1rKfQ&key=v4fh)
{% endcallout %}

得到一份名为 `gnp.erutcip` 的文件，文件名倒序后为 `picture.png`，实为 **GIF 动图**，且包含两个关键帧。

![](gnp.erutcip.gif)

这两帧包含以下文字内容：

> 来路即为去路
> 来路即为去路

> 其三。
> 密群中有二十位台前之人时游戏才会开始。

此外，这个链接的 `?next=` 后还包含了另一个文件的资源 ID。将链接中 `?next=` 及之前的内容删去。内容后的 `&key=v4fh` 表示提取码为 `v4fh`。<sub>新版百度网盘似乎不支持使用 `&key=` 自动填充密码，故这里替换为 `&pwd=`。</sub>

{% callout %}
https://pan.baidu.com/s/1PErfXH-5T1SfhNqmo1rKfQ&pwd=v4fh
{% endcallout %}

得到一个大小为 **32MB** 的 `picture.jpg` 文件。在这个文件的 EOI 标记<sup>（`FFD9`）</sup>后紧跟着一个 PK 文件头<sup>（`504B 0304`）</sup>，表示图片中隐写了一个 ZIP 压缩包文件。图片右下角隐隐约约写着 “留心角落与风景”。

![](picture.jpg)

部分压缩工具可以直接打开图片，不能打开的则需要将 PK 文件头前的数据删除。最终可得到一个版本号 19w14a 的 Minecraft 存档，需要使用 Minecraft 1.14.1 及以上版本打开。

进入地图后会出生在一个湖中。沿着附近的小径行走会遇到一个被屏障围起的讲台，附近有 13 匹马。越过屏障，阅读讲台上书的内容，即可获得 极客蓝 主题的解锁码（`PuzzleUnlock` + 识别码末五位<sub>（**包含连接符 `-`**）</sub>）。书的名称为 `4 -> 1`。

多数人的解密到此就停止了。

### 下半部分解密
*下半部分解密中**包含**不可公开内容。[密码是什么？](#密码)*

{% decrypt %} 2crQiHRQys8DArZ4UD9WA6mUrTXVSAeBh2Ys4g7XLBCt0%3D2cKRvRvFgXX7HLi7bIC879wj7Gva6U2J938b202COdblg%3DKEhm1lcOfKPAr0XNuq2m%2F1D1vSBh%2BpAqRPFbHT%2BEp46p7gM%2FThP%2BAPX%2BRcQWxPt6P1alkWbjNrooThZ9bGFlkkooeovUPnASy95%2FP2T8dzLEBGYLjzCdxcObOP5NJzqnzK4woxcQXrSKrJdtKU2IzucmtDeavGqJO0qqyqilPe7pdj77sRIH%2BetkCaXr4xEj%2BSthucZRP34AuWdnr8KtOzciA1WrKXdpVS4uK6MSsSYZaf6JaqM99VpdKceYQqZT%2FlbdtehOswyiETGTknTI7SH85xhCXuaAJkjIbREzDyCqkHlNx%2FvwOpJfiO%2BEYCL5vnYstbCpSGWuGvmOLwz5CEs9gSC9LH%2F%2BNn9ucehmVFJ9OVEkoe6ZRFDoMyN1UCU7EFazF85QmaqRbvdYGRxg84Ka0RIs3SPuduXWmqTEgCMpu6%2FootPbK5OEnqew%2F7YUPfZB9P2ycr9pza9BoJK6iktCI24gq2ci2vHcbJ0NmVFfZ6i9juOZ%2BhUdsYuIgv%2BnH1QvXtOfRgUXgz3jUZTHi1j2hy541YTpJiRldj19oNm6AEQF4TUUSjD7O3roITn39tcw%2FNU3vv6BXQUoqv1tonIluI%2BJLEbA7K5o416eHuMm%2B1sVV1rbyTRKtCSc9uEVR%2BKzCv4J2%2Fv49j9oBksNAP%2FfMWN5KQCRgtxmmenvspk3TFaS2jHNwvz0PnYQaIS7iPp4CervZ%2BpnDMpiDyqdDyZ4ApyPB2viS23fCY%2Bhvw%2BKt44wFGOH3Oub1CNRtONLgCjxntcyMpN9mcBCKKqVK029VB3TP17HLu4ZgMeysMXieT953cHmF8jGgeW8752LYmz1Ad4FnNKGhB5TCEbmBcz7%2BQbZfzL6T0EQJkNeDqs3iNcdeHB69%2FEZwc5bv3sQVpaKcitdMS0WqDB9iym2B%2BSzoBcFcXmMIxuKJH3BrjZX18H20ZsVF0HI4FeeqavvJALGMaD4VkCfCQTYiAa%2BMevC4f8OsYJ1Kn5zVejS2m45UBPBbhdbCexj0bIfmAUYXcimdmptNTez778ADOiqXixQxlyuysqa7LKKqqTGkBhx6puomVF9GEeJftuK5rz2g7Istql5vBhSxKlfQo0PDjHcZ2b%2BFftppTtD5fV39ABAM4ZTZw1FLdOaXsYiq3hZ4hA5A7PUsO7HbUOoSd2Al2BaiMYcrAnRl4NQqpUfJ8V8AfE1AjXyUJPY4b7cDIy%2FR0F61VE3aBWkyg06rdj8rfRkXZ%2BQALSVMqEv%2Fi3%2Fxw3oDU5XC9GiVIhbAL6PPQUpYYj7R4Gcjmyy5nrWhkR8dtp%2FOzgbCK5YH5zyZ0IAmnvC9URgaITNg%2FNxYpv%2B7K6AZ1dbM%2Fac79HHmh0iHul%2BX4D1QsWFSSOWOtHydARYfdWuQPgWPNXOW7xJKnHwQxim1Fz0yEL4AzS%2BAQnIPnZY53j7xVXw3yt0daDRzzmSSrHpUTkEYuGMhu3zF8LFzbOcly6dOlNmcsdseoFIajoKpGPXCCAa29N9tlAopQ2lbIwzjm2Ny0N2KwYBZ8mKL8P7sKxvA98124VyHpHprGzGiuSY%2FS%2BK%2FG6cvr%2BLoGTSCueSAyDoOdTmSQgwl0drB5S%2BQejB1dno7%2FfV1C5K7vBbR%2FxA%2FAopKaenKojdZvSznIoc3berWXQBHHE14%2B4IMc6kpR1Y%2B%2BnCt0RwNTBq6Xt4q3ak6m6pofn6BCen274YlZmWO5cqUBn2JxuS24EQIDQ5Y3ZRCxGE55LE3GedtNzskT9EARnsqPoDv%2FX17Z8mfMl6W6PlXslkx4pzxqCg%2BbwYK1NUsHQw7aBmhzfjToE6FXY%2BsGmumWWmaky3%2Ff0Usl%2BRg8Wf63Kik3vwxMx1On6WsGsQNTYXzD58MZvEtX%2FTVEcHRfHFJwvztlf8sx1%2BPHtWpnBHG2DyB8EEiYMraDvgrsJ6Tc0BphbMpKIWRcPRAUYoP%2FGZ4moq04daJr8oA3dPdEbMcIyGWorXSJ2tisJW57EziNqz8gp9dUv4EABnr59VTI1Z8IU7PzkEvsYYcwioDcNljdRtXBpXpKWr0OzH7qCy9%2FWd03b71xhByeG324%2Bc0L4Fs9Kb%2FBPCqdsRY1StUgY3QzFFS9MyRplkwXrYhpvbh1jtNXiY%2FyEPeouXecvXAGZUWSoPU2mmD5IciJgl%2FH5Kz8dYjg%2F8PxE7UkTOdLkcbD6ne63rqyTUFDq8rpB8q6Pt8YhDMBdf38UH3ZHlq0swlD5B5k%2BBEiTpo7K4KUtyETxjmKUkClEbBR%2F0AuP7gnxOmr6wmLPXhkgDSSwRHXX1RFDIys98zUy2eEB756BfZMgF9%2F%2FXjVQKk0MNZjVLAEgX9TeiSsv1sKJb01Fs1cpOB6ShcfJpQWC6p1eIGNbBQz%2FNiAlk7E12WJPtaNtz2pRYrirNToa3dcW%2F3X0VyjSRPt%2BWtFWS8HobczNF2Bzzm16o25YrlW%2BEWIr1eVWm607vcFza8433EgRoMkO4DRtE90hudDXirCMXtvq4LWd8r%2FonGDfRf1C0Nq6g072RUni7tTWikBpdpKy%2BTFXUhV4JxQkfB0uRqUZUdzn6t2wYT8dWPyqHQ%2ByiKeco1IwHL1jgQC%2FB6B4o%2FsM3F09ZCmkxmePQ%2BLHt%2Bluji9Mwd0%2FEXpgb44IxdqyTsxTl6V1kNYUApVJAB4zxTtoHHt10Rv%2B6AAgXpZU7ps5no7lhq89LJWQWhYSZ%2Fyf6g6VOQu%2FvH30X4BvT1dOSMA352sPpLs8vvTBTNsOsUdnEgJX5unsIPN2fh21ene6RfZzmfVF4pjBHl3hn%2FpYfCmTRuUQ7e0QaJ4xeuw5bkitVDN%2Fh68BUZeaP6AJ24XvByXQ53Cj4gsNdwuTykVSMBmIolRB4iORMbr4jcovq%2BYO70hv8K0avPynq0PfCmRnnjANgROkvM9POyGIwO4bNCK4vHtrP7tScYvHwcDqMoubVi8Bs1AgpQ9BygRcbzyMYqaMvpnqyfD2ymhnoh6LPAatYHW95DkE7w7%2FXbPIQoTNoY7B6zRSfc2qc7SkzgqAcGOsk6vLUawp%2Bi6KSMQoG6%2BhUI18OE%2BWw3PjEifO37swxR37dGlLbweH9g4I6gEGX9qPb1TEp4sc9aHnQrQ9SeS8QMxUg1LqyQGYD%2B2zMJc9QgS9WicpjNiuIqVcLOmQEgLsSrKYJt3Y%2Bn5kFXMCMjxeChi0aPmltvsh1X6m5ZMnrTT26JZilpIpgBi7KPhWzP%2BFF2CKyzTiYLggEP6RAiRqIdf64iO9376xo3deQ4FjfK5IZ0ofkmItzsq5REvPBxP0NnNZSeX6MVlNINKSvverB0vEtngm35qHdHJd2J7Ouf%2BBV0rPNA9VMQVS0HmeBRu2OHHKDVCAWm8%2FBldMPz5oYM52rYN%2F0Aq7VPkdvR9BHusX8hRCU%2B3vTW7dVdNhp9%2FB%2FYtclpmb2cO51i%2FAWKMaTPU3lRtNbkMPNX8ay7s5Pu6YUa4XW3QEtgsb3Q94SfzkqkCbMRqKa4CfELKhRzQcitilqqjBGOSHQ95imCu4HXdVnkGGYWxG2bxI3esUsMy8DNPJ7RHoH0HXt7OvpayNkARnDExtk8nSF0NfRPomiznDMux%2F44zMgSlvw%2BeisbSPY4Cw0iOoN8dY5aX9jGjB87d4YFd4eLUi7GJdb5P%2FaayYBE8RPQI%2FN25C2g60JwoXVRB3Y4nWUBnW25cUow9NH%2BU2PB39vUZTdmgVrKpVfKod4uBJGz%2B9NKl%2FexWgmh%2BnxOpDUQp8FwZshWVSO9GDXna7l%2FcbAgvH0O8CWt%2FiEQkZAYjiDpUJsO3sBpT6v%2BQ9Frd9HiQ3uMa4gVRTW6paw0oeuijhVJ5RKeDzyP9rI5o1l%2BibfWvl6tT%2BeF%2BsEIvzcLJGSe5gGpibiDq2lWD7phW7TFhyX0%2F3H0laGzX1qQ6MuAdSoDuGrWojsItx3bKNh0UzOxeHFGtNlmFqMqZJ7E75UeRoknsOMuqkumMza%2FkhXYxLfjmog824F2lXwZ8h0fYwaKzOPayREK9ss%2F4UI%2BDT8HkujTVYPK5GZAbduympbmQvGaUU%2F%2Be9icwmUKz3PpB1Sg%2F%2FQs2P8pO8nElaN9%2F27OYN70ZYAtaSQ1OzGzhTK1VsOwQaJR6%2FYL%2FsfMi9V1HEIjcD45wH5FqSHyTbFu9C8pK7ccbjhvpW7cNbqcGP%2FH0GT7NdVqSL2D8rbbFWIf1BIL%2BaXhpo530v8X2mL0j0KD1RxuOJirOPuVsHdBTPdVcy3f9pGAQ2GOnkNgN9bbBAUA%2BJCx0wpxKQ37nxHufMCAW8CAjNQsK%2FQaNqQuft50meC5NQKcijnrIyC05ZVIHAkwVTsLU1oCueBpeygMcMs%2FSDsl9h0YlkCJE11gg%2BBWkt%2FHFcWJHHL2tBjnpLcrfsYgHxgKJOLzV1BaRZE%2FPevEhr4S1u7%2FJ80Vfqa%2B2MxrlXUekTxdh3m3N5BjoRjATZZvtwMGB2pu%2BiV3aj1G0ND%2BsG9CxjsV8%2B%2BpjuJJ1bf8z1b25gc7t0Mj0VKgj7qi4Ud7UcjhsvDsZXqYCN7wEuAjBcEUlWTdA7jynGQLPReKThLr5zm5AuNiHpM%2B5RVHNjtco%2FRGu6PAXcvV8wqDGoozpvUJr9Q7za3PK%2F88hg%2B3SPvy%2Fv7Yc%2FceNuXAtOGEotqlGIAOdnQwpc8O03PWz4YCFRmxc5qY8wgX%2B7vDo3Ujpni3FxrQbytmPz9yiwSPBRSr2g0J9jYpVqYNbIN8GKTfR08R0%2BSFgz4guXaQZ0wHsh8l3PEILSWBko7AEuv2LH3nT5Sd%2BypBFycGaBMGN853D8ARvm9J5saTcoF3ku9cPzXv%2FmzSQDY81aFdfGYsrEbPAtis4O8E%2FT6Dhj9U0xQ827NbHzqgeRauJiaLYHQTQBqHm33KSepNIlmZkro8h%2FFk%2BEfQMoR9cyQIT0w%2FknLNWF9fsuQDLNcEBszvj50I8sXhw%2FdBtSurAioRMaUaUdanLOZydmSC3er%2FNoIh3Ibpg7j65hAk%2FD7RgCnZzbSF2cAJNEk%2BdYHRxe47Y5T0r9WBt0%2Bbirq%2F%2BVvM2h6SWRG2LvL10m50%2B8sEpF8gvKxPtzrl3FqH4Z40DCHbKh0FqH4FQFjJDh5XibEGFbbz%2Bj9yAanoFJCVC81dlXAvZlmvgZWcvMk0rc0Rl6wYWmc%2Ft%2F7s1gSkBL9YGtpX749G%2Bg20HdGK6oMVb0Hm6qkI7rrWKnDIa7ffLdpwXGpsGLmnwXC2ytBznrR5aYIdHdsgACOjCA5SEdDi7A82cmSAZ8HZ9kfPbUsvaCTs53RJNDqqvtroFJVq5giQXpLRiMC%2FnqEQdEePBgpIstkWUQu9yWH5%2FZphr2s3Gme5xLwsUFPj2vCwJaKBJzfxhIYebNi3WZUdHgKIF3krg%2BCqzuJ5Bj9JwD6hmWRrRWccyP4ZFhOr%2BWoxfx3YrvMf6RNXZiy%2B2MCOoBBKVIgNr4NzaE4bZ1nUdseAvzloQ%2BcF%2Ft%2FRPmaXZGbvXqM1RXM6xdhEq%2BVaiAGZrGha9qXbgVqxXoegh9tprEv1gU3IQ3ZYtjJW2HsdQTUuXqXt2zfo3qr8qS8oirqWfmdcp90Xem9ZJPhfEUDrYEbyTqDlygbrgJ7t%2BQgvCmA3uc0UlY4tpk5yUQ0QIjBW3p9VCpp0QeOd6p8q5slLmUk7ror%2FLeNAgc0NCHjUpkGZhrjxnaxy6yt6r18W8QVfl2jcT%2BgmX3nvncHWHYjXyFAfqDx%2B%2BfwCYiRpSn8yOXgm0rnmmTx0zYDK9KAOHSjvv7Zj27jUzlUieCDnRShbwFnvBIV%2B5dlNszfnJajO84CNp5NHohyjgUTQZip7vVxAp4xfPziPWPvM1cQmH2a7RfU3DJnTxg6xj9WTgHeXutiQukr0WtYYn6AsCEx8rVRzKULgU7zoFVfDF3tCAwnWvZUJqdW3O5737wpZXHVYq9ristbmvj4T8mT0GOBnSc0b%2F9rAInHCXHJBfG0uZ0f5jlXpYTiG7a2GHn5OYDfRsaGBiZOGWeGPe1HRWthrsGdNsKWwuEFBdCAbDMQl0ra {% enddecrypt %}

## 参考文献

- https://github.com/Meloong-Git/PCL/discussions/3386
- https://blog.creeperspy.top/posts/jikelan/
