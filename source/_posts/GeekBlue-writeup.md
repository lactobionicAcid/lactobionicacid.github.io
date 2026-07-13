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

{% decrypt %} U2FsdGVkX19V%2FLKhomEMetKh8PD721C%2FmJxAf9ayQRYcUxvLjJ9Ni2BHoIQh6Q1jhEYIFdqV%2B4F6pN6NjNjX%2BV46knt1i3v%2FsUorgYxXmjXFoRagq3zLOY6CuZv0V4h4oQlYI%2B3%2FoW91hqFTinlyzJGtOv6ieVDPf%2FpP%2FF9u0T%2BDd3TemsP9Ca4bxRCUSpe6APi32uSumV4Kih%2BHg854q38%2BXOrChkhSsVwf0zXdRgfYcYuRju5FJrVkFDZQ32SJsJtlY5m%2FR%2BIAkDlHHUOiOF7kvrvLNrmm5Er46H4MR3ugjE0njgivLzZsSxgEvRYTxVIbwGcYlOG%2B9n4cHWjF%2FObNa7%2FH5LJE%2BmFQXkwaz13rVPHYARyXvHbV0GLHMY%2FU8SYZqIOgB%2FmSADfhjBZOeU59ypkyHCtbcYubZUrkS1GHd7UUm%2BU9Zg5za8VIJVYDnII8YD8UCcXD222nClrWQ%2FnRgVU31i0iLcqV3jOw6PWhNfar98JQWcE78TsumZGv5UHfZjWzZ1X37EkDFmwrwFVpx57s0rEYlnh37dKnfiolFdDabWeZMZIvFagMeLJDDxTaeZbX8cOR1MmIuC98R26nlW5%2B8DJVhVD9tBN3H3GysF3ELP8kRAZ59y0GYQH3H9QF6sT0Q3tmX9JPrOpJyR3kI3X7yOXkQWHJ9gkpLPiEB%2FXextI53rOoR%2BLfA0y4AXXL%2BlDiowzJF0GkyOPDrrsC3VdOvNhe%2Fp5Zyqf6iVVqUsLWktoMdwfymc587noV1s1o3FE4H%2BXkiY7GpOmxUrAZAw%2B8VHPLG%2F1XxpQi%2Fr1aN3kIRCRQusEuqVGzppf8quoJNP2g41a2CmMqHkFVtFbZwWEYMJiJPQ2oxrHqIkMnrPbQaJHiFwIVqJRtTUDXgzDtBYlYTdoozqCZYnDaUQTfvrDHs%2BHxoqFiqvDaL0BwmsyAZY%2B1%2FdcKN7j5lOSoSG1bxgV1aI5NVMpXsLTCSKFqfEVqh9DWYotUwKvhC3gcCG5MBq6iXlz2PsUcZfPKlDr5HwfuDusSD3XTqC1vI%2B4keJKSJDLF3wr8gxoLyLpk26w5TUatzSwJDfeDezUXb0E8qy1zCk7RufdPxxgwfSSu9WToPrULaFMk2K2Hy2NE8wajTeXWqoznxmnMirEPxtbbsKVbxF3oJuLVZ3fbzXLaEmfO9E%2F%2F5jX38e0Lao6FT3wSnu7WFtm6KWbKDtdd0rL83SlxLAOHYyv6s7S5qsrAOM5y%2B1ZVzXxi6LXdNi5%2FvK64yy3o%2F0xfIibbkE4M1CIhJ9uyDMHxpwRBnvt9WbOuJSwGvymvBr%2FMoFwAEFUfsvb12n6bqqrO%2BiOG0eObFW8E5ZWsuPxfmLPqL%2Bd6g85tPd9XRjZ06S6eFwz8pR35gtPntFB%2B82vtYcKLkzfU8jMI%2Bcrq6rbYmuF27LcB1P2wyiIGvlPfNldEI%2FUdfLUy5%2BgsOh8GoqwbfcP8I%2FsjAutRIzJk8k6XJoWYqX0q%2B4%2Fl%2FMvlQQIM4r%2FGotWrd8f76%2BBj0x2MgDjSxTaSWBO6T8h8p4UvjtYPkGgvYlUo654fhpcSx5%2F5fPJWNY4RtwCIZVrurR7ahnCRjuFNjuJzIyy%2FLtMgmRTVXc6AFsXMBNCmV8bR1mD4e6DZvUZ8qx68XCmZQWB5zTSvPcrezJ6%2BMZSYozO%2BR5n6TqliygsFvo4DhOTjYcHLapZh8Pj7uN2FTxnELAH%2Ft%2FFdNoWtcLy3f8M25sntYy9fFxKfhoa3RG8aLdYUQP3OAOL4dgyeflqzhMR5Em35D05LFBRjAzWdoFg%2FEeWSwJ2kr7%2FXmRoyjaM1tTKgot%2BF0kFC5KB1dbq7X0BZJF%2BNc7aX8yuswHDu8AfuQ997wwHGUykIPEVM1YH58BUYdppZSGDBPWw4hsLdvqOH6ta0kFT%2F55lUNo2KbnRc9pQ7t1jMf1bE%2BAR5MbqCj2xiNSHaoFXjK5e%2BwKtoHfDRfAPMLET3JSC9XK0Be7mWN%2BrddNkDmCwNSljErmVwRCebc9BTWziwtjpf7HngOLrYpdYOcQzTS2YQodQsPiu%2B%2BepOcOLFoXNeWep2eUU1MZ0uVCMJxXLM4kU26fjhMMNxV1jPfb31KphdLuRS4bhR0OMuGG2DvzU9qY5VivNQ54cwof28yj9%2FRtjUWamVov0rffOsYYR5IuabxqQAj%2Fg0Eftzdpg4pi2dkZCjAWnhAXMPb1PpngLKGrhlzFsMqDQbJcEyHnQyw27Fg7%2Fpk0iJlN5d5l0XYlZx%2Fb7VL2gBr0%2BZvd6FfXvOahbzYttnFEJ%2BccZnFAh47XpdJhsA9KNZMavQz2CEPultrKmjbkralRJUu7Ma8phWQMv9e7goL1dLN9%2FLe8eXoRgKGHjYnj%2FtthYab8EzOVbluPDddvHhbC%2FaJgxa%2FBrc11Ln%2BJSHKhuRKiNsoc58c%2BAcAiH3DoDVSnt9%2FwctgvhZG6gAXhfrb875QkI2eqUH28sSNAvcBf%2FBhxuu0K%2B3HOnND%2FJS%2FgpXmeSOb%2FXVJBHql4gtN8Ck8OyZnCkVmQQdhk8dRyiS2P%2BbylBf52sRxqoKEqUWaPZbIQp78N9IdfHOF6bruXOb1m38mUNEnr5RJBEoHt9WXw6MPXM81YlkOSFCeQ1iPtqwmfbGfnqEzqMWs7qO77kFGkNGG9nV7QHg8cKaUhZYqumY2LRtgklVszO22uvNjB5qgV0RrJxlQf9ay9L9zaBwVh5RwQUExo6P1okrHebW7q7BTwT5YxwY0yFUna1xGxORWUtPS7KjwL%2FV3gocPNGwtxBz0U1F4LZmZrGLi4UQl%2BC%2Bz4rbxqImbz2NUtEVxq9oFtGrCcxFQHy9OamU%2BC3fRYUC0qXcPZC4ltV4N06g6En9gh7xkMbZyYkE0BvhpAL%2FE%2BB7CDuEkRf4kTcmGgQlomVyje%2BvexpByI2CK34xszXJNDft46gqeCShiaZcUFhoArP73TwP0NuzJ0Vv3VUDOW152REHras1javvM8hoQcrMT1d9fnNGNKf8FQhlWZklXgDvfiSV9dxnm7PqOLL7vcP2kmDZif%2FYCf2JfSeb84ZkCdQWLxoKGMCJmmQd2LWU3DetppiivX46rSs3L2jsmNir3nrk3PbPmASezdqWrGIKKJOuSOqCYMLxPLwsXvVNrU1u27ah452DzRxFAuBz%2FWHR6tiPoJ5f39OmlkUAeUAHylvUn0hVcXV%2FcqgzVVhSAHQPMR0X3jQk6rpd6U7IaVUertoRCUk%2FPsj3nz2n1ejh1BK20IgKBmsQHd4OzsUWlE6Mhhpz0lYDl7xZAepBo0tfgHmkqvPkO7I6YCpSWWy1jlBzf3rHIsRwnL1D0VnI9QRFpHBksw7i6OpWNlmXYCorVOhqo9%2B9BMf9iJxejfP9T2wVt99upwEkAEFyC5OGe04hHh6yM85V7RE8%2BJ2%2F0j6emqlSU83IbVf%2Bh8MR3CFmmYKO35K4hQaw9SbTd7rpoRMu%2FGKKElRSgogOf7%2FeT8xtPNidbuyYAxHjIkVKecouuMhC8ybp3Z5raXDfcV%2BjengETu%2F1R4hk5CHYGETdGqK7e1co0vaWVv2tC8yjeMy0CFaifT6VeS49IttZWPm83iWl%2BPLjUPuqaZ0PSjzYx2nRcmcVhI%2BylhmGleIvQlExjj7Lk3HR6t7cwv7Hj8d2F%2FDuiv7wixqhDrD5YGSBtOkl8rt9kapFFzEY7bLmiwcPkAIt7lIW62bM59rIRFGykqpYjXqyWcAuW2Mf%2FlfYCB7QM%2BGVjm2HlisVLI2bI5gqv1eYBb19fZQAP5p%2FEK%2BwxQ9%2FmB0oYZkl%2Bf2JflN78wPMsN5v6j65u7PD9ZVoHHwix5QiQiU69iHmdwyIpq79NgxoZ47qwRK24hMpreXALJI1g2aZFgX9A8uEz%2B2LYhanYys5d7uDABolEpXC2JeN6NT8uRJ%2FAOnRk%2Bgtp1nT8RM3HmnOQsmxol7FwyTWyykg%2Fny9SQXIWYJ9GjbOO9IJLJpW208hUxIpwuCGbALsGrBXx1NnGwG0HqWF6iJmnQ10X5lzDMz6jyUi6Tb8ZIkGDDGXceb4xxGGEYNDkyHn5y7ryfn5BcjqU3%2Bt7YJJnRYOTapC89piAtz57y2gGX7X3dlKfrty0H0r1Z5FAnsl%2BGPevpI5%2BRdFZpqvyRqLfkp%2FoZdkCNjRaSk2r%2Fk2PGNVXNQYT6ZorvmfxTq3ywx0078eAPZqMqLqeT9uM%2FDXOHj%2FPcpEI4hHsg4CF0FGiVnOTjfMCMitMxI6l42gIVRjtsZlswIOF5XQWu07510CVsdRBJevZtAdDrTcBDqgeWh0ZmqvTQ5SqZG4ld%2FCM4s%2B2asNegM3wNr8qTbYcRoMXhSUBzOCHDpPvBd0TuXwSQk8ZP2Dl5KWaMXMxxVPBALFjJqBx9eLBvPGBb8L3FPLlU9%2B9QrziGeHSyICyvzrc%2F9W7dEc3B%2BMC%2BQPGc2imKkDlx5I2I9F1otIUljS7jbnnCUW5mDRq8wItNn%2B9DjKCDHxe1n%2BaqYgfmOEgjOKi519zPciq6af8Ag7vSy0A3Un6bqmMdg1DMnxyltxxG6NIYrvaomDg8zftejf7byzioshge0ONRwfcaU8VXL4S6OsKOOZYOnVUV%2BT7%2FdW1raHbFFs4oXDmOlIgHdEo%2FyVX9DdKsWeg2%2Bhj3q0iVD8Gkp%2F3vng46JWmROEKoVxoGcuGl6MrqxQConPUPskW8u%2FD%2B5CU9ClTDFR%2FvgQa2sYMPaCHKUeVDkZx0xsIbF1A0%2BMUaYO40ejp%2Fg3LVjCpzdhD28UWItttdhfFgZFJBDSsE5tN7Xs2Cbza65%2B407CIGjg%2FHgL0boSR5Eglrjm7%2FC54d9WAFqz%2F0HlVtBGe%2B7Sgtx1Zvp1NI9XIvL1nyQVtHIuxrTD9WH4goM65BDEHzK6G3LmuzyWIR1HZMYBwcuIKLzOayWgr1bZIyPaiHpqsG%2FA2%2FfQocTKGtkznRWXrSFbOImit2zvI3JaxIiim2H0GckL4rr1tUZo9uKNf%2FmgS8FPBfuRc2hFq0ETNfgqEhPmnBpxTUAU6XfcJuNmWnMEApQ0zFV1R16krRsc7l97U53pPF0Cw6R5HYRSGJx6l20FKo46whpoyrjTy%2BcT4KkUR7a5nJPvPk%2BYO28f1ykkSiRbgVpCZtqdaeJYu5IY%2FFJ9CO4TT4s9wwsVJhT3dHFR5SCXxxQCkN0mNfkrslpbZT9wRkdBdXzIWelUCIPpkTXRP8FBKz0fR1i06cUehdz1jahnc2cxE4x37h4V7IhBFhl%2B%2FvZGKt4cfi7cGL8cSDh8XH07%2FWPL3Ou%2BqMdEN14waV1OoNAxJtXNHvI0hcNVJkWB%2Bjhda0bdRqGRRjv0im4ffBw7sFRBap6HS53JvNw14wDd1ApKAwKzw3gSgXHYQB%2FcnW2jwyMQJGx3za1WQeD7eIGlIgEhpLT%2BIiIhyqi7cmW3K9s0upy%2F0hDl2zXg%2BKJhQQLdXH8lnCPld46L1eepDBMGQI34pHtGN9%2Fobtyi93U%2BBUYHToGbQEBwDdfe6h%2Bx5NNWx4HJGFJLVYGrlVcaRmBmIJAPnVLcVvAdFZ2OYUElxJm68jfPk949zzkD5FdQsowC%2BCIAbbhBbScW3On10pdWDtagQWrYzCJJPa9TnUzqY%2FXfeFd6XOnqoIV3tZo7KT0i92%2B82QkjVY%2FiGwnynAB8d5HFjNd7tI5irM9LhlFJmod69zxEtKfZDMnr47j0ldmiky62iHdkXRkOkz9W%2FHYUssMoMqmeNo3qkkm6VWJ%2BkfUwuHnGOLTXb2n5VO3%2FWmJL63G8JSHBPZQiaYrl%2FG6t0tY8%2F1I0vN1t64yqF2eLSRUvprIQZvNh2TzOTCusjbpqTip%2BDmhfCMjvNtyptwae0c5wo4UKoXc5H3Pss2q4XdFXIN87Z2x%2F33Lv8c2Jg2xNytpENLEfIeEVJSc%2BtEyifEla0HvDcjiCMlYBGkpPshRhHy6iBEzYHS65rdFBn0DpyAQtnRmpgqTEmi30cvsgDq6kvVuIBce4%2Fg6u5jwVK1dAkYFRZPrtmpsTyjci6XnCDPmcG7xj5iu6mBOePA%3D%3D {% enddecrypt %}

## 参考文献

- https://github.com/Meloong-Git/PCL/discussions/3386
- https://blog.creeperspy.top/posts/jikelan/
