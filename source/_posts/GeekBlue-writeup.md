---
title: 极客蓝主题相关解密
abbrlink: a12a
date: 2026-06-16 21:56:08
category: 'PCL 启动器'
tag: ['个性化主题', '含有加密内容的页面']
excerpt: 与极客蓝相关的解密 WRITEUP。部分内容需要使用密码访问。
---

本文档为 Plain Craft Launcher 启动器中的内置主题 “极客蓝” 相关解密的非正式 WRITEUP。

## 免责声明

<img src="niyaobeijia.png" style="zoom:25%;" />

本文档含有部分**不可公开**的内容，在本文档中**使用[密码](#密码)保护**。发布这部分内容时请**慎重考虑**。

在密群外擅自发布与解密有关且未经公开<sub>*（在[该 GitHub 讨论区](https://github.com/Meloong-Git/PCL/discussions/3386)不可找到）*</sub>的内容可能会导致你被**踢出相关群聊**以及**承担相应后果**。

此外，发布这些内容也会**破坏**正在解密的人的体验。

如因发布不可公开的内容，而造成严重后果的，**本文档整理人 @lactobionicAcid 将不会承担任何责任**，一切后果请自负。

## 自主解密声明

<img src="self-solve.png" style="zoom:100%;" alt="Fig. 仅靠网络搜索“完成”极客蓝解密的某人。现已被踢出密群。"/>

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

{% decrypt %} o7YgwfR24MBJZbkyVg3iev6oSt0ZYvN9cowrO67rSYCx3UwdrI1W%2FL5utRF2pj15XSMlIaXqO7gtFvg5CfLGz9OoJcZ2R%2BKnrcbCoMKfWFx475EPzP8z%2BKXK9VM9i%2BpunajLndpPe9lzrYbAu8v%2BbzALOh9GxMaDwiAf%2BwqLlXUGPCg6CWrofIqJf%2FpPAWU07FT1B5dhhQml7xeqU5XJRaFL41WbiLvrYJbkRaWq3yoiLXA2iPqEA9ifFxrQlY7WADBtjzZ1tUqk9yo0%2FviSQR5g81fDMXM3rcYOeaTkzhKul77cyBP3mOE8fgr4vu6V6suCCYO3Nqw4eTUwgEQqnMv%2FWpji4Qr%2FFvAtEt7iGfmT7RImnH1kvSKDoFsnj0aBq3vhLk9TZkDRfzJpEWtX77myzkZLeNRSkZTKJjPPdzCgZ%2BIs%2BpF1oHKWShuknbGiCwz40gPtRnBix05K%2BkitSekP%2Fs0KIci3PDSpDsnQCKs3P90BBxZEb2L40nqwdZ6%2BFlC3fnBwKfgHzYr%2BphUEOeel8cgOUzn%2BTB%2BwAevCyIVocYRJ3MwDJ6OH%2F1JHissG%2BE55uw6HZT8AOb1eXGiJAGiunAMqysSAbxVNuVR%2Btbfzskec%2F3bnG4bcO2NdomZHCAScx6yJBJDyjNC9d0IDTcxmyVeC8GMvE%2F4FATZE8M5T59UTFPJJeAsig4%2FLg0e%2BI8FWZyjtCZSTYnD0G9PdYWFGZIWtcvmsoi4OQ%2Bbu%2F%2F5yxZWj4ZIdiTS2z%2BMqSwKQ%2Bim%2FsXmpCj2yvH9jy8M5HGWslKBa5zbSkUTHwtbE8aIrn3tSdPpBFnhQbWWziYVlLiApX5%2B5Xl4h42HNBv9Xusb9H91aMCZ7GpspjDjEpGB7zECoy6e3s77hsxQd0D8FKHMEhndR1loz%2BOB5yU6svIJSIZLZaU%2BL9En9nwiYQzSICKgGGW9M%2FSBxLSmKwn%2F0BPYRkYjM%2FEL9%2F8qWzi8hP2JEu8xYNqZmLohnCRzc%2BfCvyqWgNEy9j%2BMbOXgCu89Zuy4ojrBaykQc%2BHvnJI6%2FdR5f6x4B0LbXT6zgwc2Yiry0At95X2icVL2SRA8qA0zwYTlkwHepMYKDX9NmE6QPb3dd0KKrPBq%2BQlMbRfo4ALGWLlhOQxhWx0fgDWEmm9aL7hnPaljgo5ViqNGDqZpJCSr45dO0F7IfCToczWi04hIL1RjQEhr0JoY8jPheCiS6u7c9C00yUaKTb1BYcI5wvSLhO4NWO1%2FK%2FeuqZEhiHqZ%2F%2BHqea%2BgS8gPj9EOeiqV9vCqzZ7ecDI5PGLhg3HUdVKIVV9vb7JR2nyBvZYHcHGsc2f2U8ZWXuQri6LunUEtMqDYw1bAio72Ft0bGWpPDbODgT1h%2FIU4NlKILo%2BN4lbEmnvo0WUpYH2%2BZ7PJqt7qztiee2fKs%2Fia1XqRkP5hpUI%2F8bpF9wddcgcUD0dgUB%2FDCtQHoT4Vax8dG8KB4JSqwshcjfRs3dzhdjNnHBX%2BYIQ1h6DXV7k7OZmak%2FMdhRpUM8FZHE3ASpLcjaWKu0vd%2FCVBX39cmDN%2BpharSPEj1%2FTlutr2mG8yncadBP5rXuGp6ilCEeonbESRFWFnxCG4%2B%2BgcRX9Ew1zlESFcyh1E9sXFJ9gGTFmbaOCqAJSCkBwqMljJhd5h2DiaQsgZqFZESJABVw6Ttqsz%2F9F2h%2F6IWI61uZB3Rs3mBie1JYg0nTkQZ3M0218HXmSIYzURDu%2BL%2FTzzokVHK5A9BeE3K6ObREQAeyq2nZGwhEGwJ3MxDv7ekvt%2BHUVVF7rKelDeeGgSN4P7qxBIRInBZ13gsMxmdVbxWe6UQreQSIfq%2FX6TseHsGM5oCiIWhPTp6cBJY2PXo%2F2l5HG%2F74CHBI0ofoUlxS6LqVm8baGQmJX5fIGt6c8z4yxRScxyNZ794s7DCvroOsm50Pho9zDllZ7Uh1B6Y0u2a0SZEgvV9H16O50ReDeduJIaA%2FOj9aamCbrFTwA6BKqF%2BHgh6neEpGIn44jDZ3EDG%2BoYFtCdxscS5TLlUxk%2F9iB4XkaaxMThqLrr4X4v6X6Oez6tuS8%2BoQmqSsEXC2n%2BM20g5LgdwH%2BrSv%2F%2BAyrOmpKFOSmi0tyrMkbEuCelkLPKcILxadorYXYBNhiWz5fdSLKh2b%2By8yPIZh5m3Pot%2FW8pQhrd69fIHSiW0rnXgUL3r8ftQIsTeqQj9IrpolmU%2Fb8uWNbL%2BB9IQ5wYEpBtiNfREqiwLYUr%2FjmwVyvOHpi0VxkzhYbkrHQZSHq%2BhTgai%2B1jkXIs1yqk%2Bdt8umjAF3HCTxfO82THzcm%2FCCpeht55M2PtalaMHHdlt4dEhSFTqV4iuZC15LCYyr0va68CP4C8inXGnRAHucq9jsPzt8gUew5yh6dmvEhwyprNtPAbMumGDdhDlnErjpKVlXo4Qr2G%2FheaVKz5P7cBpQgCe1bTRXVqcncM4KQYBQlUHi%2BdDSowIksXGdpOdbR8bS6qL%2BnhMSvjiH8s%2F3i2OuOOXgUpo7ttrvcmYWu1j%2FbkqRD2DGfEjHrr3GN7TDtuVL9psGOKW5tFztDtBFB6v%2FZ%2B2wy5p%2B4%2B3Rum3UjBHbiYjjaEp5HC00xpl7tve4tT26sjNduCShxbunZZnf%2Bmc0CYPyEvNshyzCyP5rL4gj3j%2BfCNQCvZ8YMbkr%2BHOqboCXyq69RMgckumTTJTZIYTwLL%2BvySuq84shvpF6ypITM%2FwKLuwRKyE0Y5Yho%2FcJr9ImtdzZj6oafr8OXoAcyKKf1t0DDNPLHCGyHC2lyfVJMhT8XxMS%2F44uy45y5X%2FHnW8Mv%2B%2BL1cDCaA6nvXjNL0FoZMiZF01RhXGx4C3CZuItTpMmj8OdNism4nHbsSIZvxmiphiQFDqW51iAztQXfnFyLjf41xZQEPZsOJ70v%2FetMtHkU9qaKFx889O%2F15TRtpla0WUTe2rjMkYJIn5e70qIwHPfSv%2F78SLczVTEW8J3uMAOG1UWKOPys7AQXLUee6azR6wV449oVTePLQiFfx%2FYOQbp0%2BXUh9Y6m%2FCP0eD%2FS0zg9zZ4WZziIyX89wFfjbyEW7%2FcBAbDUoM29qyMtfHMeoPpkbGS49VfYC1lqNdDI6ic%2BLesDrsD6d0bmktRp1sxk730Xm78awsXeYkGIXMimaKIQjPqNRb228tGlojhSujrmM29hvKN30ESWIlwAWC745UibdRfwuhCzjZEnydhFZFRApj3cVt3Pz69F1XoASaddhiFskbEJobpgUPvQqX9K6XWpWapL2oJC7HN7qLhVB%2Bc0mjduJW10TNNZVRUDAFOqCDp94ov3dBtBCsvSLB5EGF64V9uqB5Uy9tfV5cKydeQKtJSmcRNofLLYm4vHtMfUbRyFN4QVOGbXVrBX38x1Go5%2BLREOr0Lg%2BUcDVJeLkORXPHcYwbuyU%2Fnva6cxm0sE855vZZ883de3zueUqdIwBdRit3er8j00hpLp7kgJe9IFGX6lgI0omvK6%2BifapoUXKXb9PHkfEwpJOgTBq8CEt1pT85aRWSuAKmWswVzFLvMHUvSH160pK7eXutO29mmGZxAob520Vk6%2B%2BIrRg%2F91%2Bz4YOibZOOUMBpo7RKYMR1XFnLsiemq8AlxigZ4VhKqs91GCVtALynnvQZyppj5fNyXuL0hBb1mIDzQFzNEHW7TwLaj3dyk85fmUWsto7kekgF8VGIckkUlwe67pQiFa8uHnWuG8NiCOLMqdtNOJrdl%2FMeIF3jA1hCNFtHsNYbHwQlt2gkWB7qxEwYTmZj6aqZqKXtN%2B5Bvx4dERcyZI1yY0XpunbUX%2FTuIbxqxdaYno2hj8y3HVgkNKFGCPeWeAQuwasY9jvL2sEZbICWk9NrHvkYdotS5BqwKvbZ8fmbBTAKCJcu9uSN7hwKDt%2B9s6jRqOSCedPJSEeBrjGpmDvB3Bi%2BrID0Si6JFu7R36cn55atly0HXywkjk3mjf4rkToEU0jT2iQjErE6jlhKFCm1fXkFplWRiwpQQULGd4XPADm0Y0kYh8yF18Yi1mpqY8EVFaPpfVK5DKVhR1tH%2Bk321IPlxwkcY3WMWt94AjaWSn3cnVS1fe4K1RQaQK5Xf0Su4J%2FrT0UeRN63UEO2YqEYTJBBQFBTxa%2FoFsIkXm22jc3ik3Fk%2B7v3fPQSLD8fznmp32113ncgsGRxnwphAkiSLVHxmNxjLSwsGivhCZ%2BmwRvGzwOZmDNOEwnGidCdEA3ezW%2B1NnGUmOb%2FsjreHRBQQagXtaHcljRvivydBbJc6CqAxFNMNVEKgRsfNqnXU9amu3%2FK4SnSy1WGfL491e3DQLYoxX1%2BXrlWzq6k%2FnN0oAWHCRH5lnSKHvrUwXRqiHDjwOME0nSg7Ka%2BzqzdsWrKEHdTw6rjJqq7xpcbNAGpPV1SQhJ1Fo4KbLvw2UfeEfRc4a3cF%2BP0tClg6box0vfU%2BzYYUvEfWPy2BvW9SmbWojkUpdL6%2FxGkXdVRjsL5jGmIjMIt1YirZ9ciblrc9uotTYrwUWvjU5A7eggmR3Q7CCMHPambbHh6gLlR9aeVztXHXkCutX7ZiKedWODNG3q49EkKD12zjjvMvxvVbuU9kMNI5FrvV9CkRvXeW9f7ln2mxtJfkKQw6STq2Yf8zWy2kcs%2FNpuUKXKMP0Wk5Dg5mtDX2yFt5z2BehYsvAun4z9mi4E2qsA6tJ8ST3oOx2OMyX7jJVn6seywZ3XQ0n5Kuk%2BAXdxOalGaI4XpNYlJt5xME3kDTDvuz5qRZ0CzNl%2FJ6kd3FsKNi0dg0S6BMZsoqrLFkdlxgTxWRbZ%2BBAutSazhyBtK6n6qQPdcjpV%2B69%2FWGuj1KP60hPyMjIeemeRxSAADJmfc369PEtV9VxsYLf5V8D34GFWmoZi%2FEmc2Cxp2DCiJT2EQjevDfDdgiTkq9tC%2BgLLQif7tco0H9VydqUXefWoRY9eghnmKMB%2Fy1veZpLSET5EMb74L4Zk7ohtGUVXd4c5albzeKfGWiDLPdYYbY20Eig0FCNqK4gGCQVIwB12tEGH28hc55ulnkynoDRWGaIl%2FZLOtuIhHsM0Z8nXjMZPE1F%2Bv09giN%2FqAGLBfG9u%2F12Wpr4ATJBiKwyH7%2BOpjfSzt8%2F9WzcrU8TVOCOi05UnQ4M%2Bh76GV1%2FYsAm8QtIHUP%2BA55uTyYFISZKOjLY6LzXiSelfnQQTK80yyu0p9k03tmiUQsbMqj8dhltjnHKwPE91MQvM%2BZyn%2BJGOTiLIHQuUJXpeiKrmpR4EtlWevmuNM6BuVSB8a%2F1Ni760eeDkk5twxngGC%2BJk30rlL0Ni05bBytU%2Bs8sKYNsKW4imh%2BKnoyfWOM9eu%2FZF0TXO9geD%2BWub%2BXOH2osSaYqJLYRZiUHeXDkshyearfx1ZFqnjlwzvHC6%2BJ8sORDl7tl%2B3XIRuYZPrrEG%2Bv1u5OI17anhAUZj2M5qbiR5VAL1%2FvEZalcUgGGu%2Btpoka4xgb6q0pFkhYlC7L3Ug5YL51PH8OyrZSs1UKaMKpfuBBPwIBc4VMNpPq%2B%2F4GVf%2BEPNA2GtUFs3gWjFAC%2B8NbIleV%2FnwXjdmaLtCiMjCf%2FUr2UAHbw3UFyk4C%2Fy%2BfRKNL2L8AzkxXOWjUa7VHyi1QJREDm5CDolIep5jlDy3fjidA7JpmQqfyEwOQFXngnJOYsl%2BleHNaI%2BETbhPs3Bqy%2FzO7aYTVcYasa9jO7C%2FWqUrykOFUPgbxbAmknoM6sViIIK6Gwa1WhY%2Bt6EYtqsxT%2B9PNP57ctZsh8HHmYPghwriXw5PBib3hEn2HR7%2FdSXrwjKB58ZK36XG18yaMnMhjIOkaEefrj7BvdUPVKlaTu4I5LGMhH1i4mz9QtoN%2BSV0bxYptVd3K8VGehekmz2TVpdqVrw4bjmPB%2B5SACWwuBU%2B1NwunkLaBVnbH5362ctQR7%2Fd5at4V20%2FlFpX5d6DRX3SOqKidJ3xl1wic3R2eEYVwe4ITu%2FouQk%2BJ1zBCmMkA6%2F8lC8LdQjoCGPkR3TX6Km8X10B43eG2Or4CtmN4l7S0okRtG%2Bot3kciMKM4lf%2B6TaJZXbl {% enddecrypt %}

## 参考文献

- https://github.com/Meloong-Git/PCL/discussions/3386
- https://blog.creeperspy.top/posts/jikelan/
