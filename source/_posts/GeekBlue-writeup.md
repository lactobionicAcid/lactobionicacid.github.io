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

{% decrypt %} 2cbz9ewZdqpkNDhNmDCon2DPcXMdeT%2BCx0lts188gRdjg%3D2cw9O47SukFRqH95ojovN0sJtsWKLvkhZc1KWp3210IIo%3Dzmbkk2Jv5XJU%2Bm%2B8xxF2bSz640AT9y1pOTpBDLkS5kcoztLFygQhWB1b749lCQDfC8ZCbOanGRgIUEFaxLrYzYDGJTxOfkEjEEe4TPSp1hTRr2%2BIWNY%2Fuafm1tbvbk4QiAwer7vRSnf6XmnjEJBvDqWJSa%2FeNXab36JnseRXy%2B2uljBSeYR20SNa2eEbmIjmpo9dH3u04EStME6E9K5yPR4UFMKdpkzIPEPc5iK5twUUPu%2Fk8Bu2gMrT1Ui7tMu5wiG2WCpbEN3xtGbNSGawFCs5pXWSnsgN%2BE2XwgebQUfOMcARX%2BWy0AJ%2FIIj9BemB3ALridmIFrqD8XmM3Czv830wfwpB%2FU9W9ZXlIDCZ4fASyeOiK1rL%2FFWfmHZ12oyXPwFwAfn91vgHkUq3zS5foJT8DfuOKy8i%2BgHNeN%2FJ1YVJxQWG%2FVzI9Vro2xdJt2EbYp%2FVzel2tsEIbhMMw%2BHGu1ZqWRY2kJ72eylK7kCXg8T%2FbEcscCIVblvT4hr4Uv7YhZoV%2BaIr0ogeIFyajQxwIrqcXK%2BkQ2iras1KqS%2FVUCVRP7mG2umzoLEWRrEQBSdPJ6O6k%2FNEXMOet7uMlrFu%2FBXrxINVSyLevQZq6v9APZY10%2FpCyOOc0vFLmdmtRvy%2B8KvpRUoj1qhMwVabajAzqA0W4PHAPILSMLCoL6gJ1M3%2BzeCDUc19CPmjMFMtFOtXHwZs5fAvNnRTiONoSKLnv3uWYFdBhd8%2Fn4hXejEv6hc9%2BuCrmTUrj0BFfCcnoQv9iLqBd3yDaFMHrSisIg%2BSvtKNxf3Piqa7tE4ZQiP3qx51uZ%2BwpCuZUlYbv68F8aN0TdwK8juxhJk5WR390hbYmMxw9hACIx9F7plzO8BsktkuYwA8Q8h3uaRFSwke63w9S7MGt37vHtq%2BLVNGZbqzIvJbyB6Pdsc7nMjdXrv30ay9RDNxExbNcE5Ey6ra%2FYUOIpUk4amibUWWVThSjIbD1PWPsz0qajMlSyu7%2F4P4nOHGGlPGYuBAjIMMpMAzcMMiv%2BRSHO1TbnasrT%2FPSpYZz69AV2Hr5BLRmzthEUlJ6IyMUnRyDd1qIIZoZ6fJcJT0e5aKChoyXNrFl%2FTzWuRs1ItQ7mauyM3aU0mylCPvJMmbB5lB%2FWJwHDGbTBMAkDRllgYnaV4GXub3GtYHK9CMDMr%2FqywUY9uKgcq9AFsrgmXoyGjVcI0KdeU5aoEFydD4XkIzMFbmFcPPGyJlCGgS0ofRf0f%2BNBUSbUhihbYJDnvZK2V2bl7Aa%2BxROhbSDzCz0MmuSS9E2h9zE%2FYDJTZ3GJPk8NQJXYZz9kZJwCwpqIyow8mKVV1KP%2BRZ1WYuFGrwBZdocwGWkhUrib2lsPk0XTuJY228mtvAt3CuLHx7PbKSmH1vZYHyMQy8X%2Bc63NNPBemeo5SIohHrVkBNb0o56KYfrk0MFv77WD5DE%2BWyFQK7rYRRAJNYaGqhFZh333ITpDOnX8LCmzyKY%2BrtHOGyvY0d53oIRlh1qj8xnaBSr7TXxjOYEvuq%2FDcU%2BSxJjnCiqtO02oVO5Pqwt%2BPHE3NYvoiGcs5L7w68YPV5v2SCEXdZqtyruIFjQ9esxNPoM9dFNWNViMwGCi19PPgqCBLLq7Et7D6T0Bme2ZctDZNVUxoefe7WLwaFi9%2Fm%2BvcJuymaFAEFi4wW0PL5DnuQu259yv%2FvpfxFAKJyklg5KqgmYprYDuDR3H6MEBja9zVJ7BMl0j%2FeOOTFMu15Gkr5wmMM5HMoteWATQi0hfh3b7vbYvHDGqmWUfANKq6Gyi3JqFjfdbAtistVJlYpb1R%2Bm%2BYLduY1jgSfemcWcFkHuxtJGnccg5FbahYehvpaRIHbiIAlWOBK%2BKf62IcQJ%2FaTOtLjMd4UijosBjrSMXNkDyy2GFOhWAdRc4tXvVjWtO4BfcntVE%2BbOBoE2wRFumR9ssauc9IzTofjidGAo64Bw2GJjw8Y4E%2BLAxFu%2BzyJNAkDbaPIEKtV4oyTdFyTSIEyW2q%2Fi01GE9oePANEUhqwj5t8sF829Ab%2BMChtYyZwXVQ%2B7SFyLfdQO4%2FTzO%2B%2Bn9GkfYYhDO2nhu4d0vvRT6LrHkVfQcuNrOJjTAjpH0KEqXmygjUDfdWWDe2EFIuwnIF91gLRDAARaxIai%2Bh1AknANsx15vxyFkBwSvGugUplFaF%2BI%2BICayQfi9iIbRx%2FOjriE%2BB5FLAXTqYN%2BJNapxw%2BmU%2FNxRcXzUDyy7LmZXenVGDvbLkjuHMgYYMhNRv0gW9qbpPNwmcqmyT48AVtj2qrJ2hM7XjGhy8Whn7MmDfEgcQ4FiLc%2F3HQrL2YDWx3tP9M3EHVusVMoQDa8KIiIWytKN67W6mbrPAlFChg%2Bt8ZpFD325Ld4SfyydbfTSNkc%2B4eoWdYZyeDKw43OR9Fq7heEEK%2Bby5CKssLQANb65FJhgSx8ysnHUVqrzV8jFRH7RvTThhGhJvVZ9OPtbxZSWUbzE6SIQ1Yb%2FjJ2F3gbtMiLStlIGkfXA1x2I8X3ax5XCI%2BAzQwDJFEo0oiHPzfpyCVhL0eeMBA792IDB7ggJmDfcPnbN0I8ukAPzlGW6%2BEqk878LeKRpz2FWn8yhPdwCDVezcrYrofEgrkR9X3OuSNArVYxV2nQ5D6%2F5XlboYmPp8AZm72Ov6GR9wbLmhdBiH21rSRWyt3YsoMJria%2Fr%2BBWarYM7i%2FmFIh803omSfW3a8xAgcBWYXk8CnTPXc6meYKgC98lw2S7Ul4ehx3i7Xgxf4l6zciM%2BtUNGpj4Sp5ubWgA6%2Fp2POebnNU%2F9NSdohfAW4JIh4vl6c8%2B5vb3%2By%2FCVK3nT2XTb6QVaecNwDKNIDhFnJwm2SBtz6B5beTe0YUl9ainfQeJnxfL4QiAw9UAQl%2FH%2FBWuOMf4XornjPUG9HLUgyu8%2ByWq7xcC7Qs52ZpZksqfNIUOX9PpacL%2FMWWloi06xOKZbIfunq9C0ThlMtSHJ3QjG8YnbfSdVCYdgfCcA7DsEr%2BdBpznGr%2BmLYq3hME%2F1%2FuaJtNBNIwvYlMjdee5JPtVaFxhTWdwhZTRWraYmDWuTOpUcPIa81wUsBmsWCWSrAyC0CLp3mtpoFQqMid2pL5i9dIdKysBoBi4ZjJ9PkKRrhhIuLBWzCT9sGUxWezMX7H8LeXOhWSJ9PvkMr4Z28xEQWEpeKzum3%2Fje1tJk4N8l2ImCap8f4182pAJCs9GdtcvqQ5L9bE2cs2n8LTz%2BlzFwl0amyOfXaBLIaZfPsVmAIHcvkWk5FurSOxMZgMLuV1gYFeRM%2Bu2IQiZixVvtVHuaXq6CaQDQyjr5kcofI8tXcBqNOaD0p5xvenCkwBhcIMDgtE2D55k2Z0RYuzNGfYIMlmWu3Ig143jSeX%2BYne2H0Sva6jl3uWSa9ldH%2FN3XxsuHc6AHZD5pt00Li%2Bi%2BVFx%2Fa2%2FeAbWIZuZbnXkAA%2B2hlIZK2Xyg%2FCAxO5NsEXhUqcf68THsT29K0Jx0dOAs970sHJRGwaSY62IIjUt4Lvmn0Wo%2BvQOPA%2F7a7o5BWME5i5mI4koWPKS7VovGy7WFmQmNkhPJge4saIcuUGQSkafF%2FTewvea6RpZjH6aUdKUKubIzXYZiu7VE%2Ft2gOYIL5Y4bfWiK%2Bj%2FWZ2%2F%2FwOBDMJLiuGEyxF%2Bh1y8o7kfTIyLC2YlqamVW2akvvEcTi8sQU0vb4WPIWHmNgOMW2qGYAj8fPumQZqke1g3DsovTAWqwHDTMMSTACgyLT89zSky8CocTjRdSyBwVTTrJtBCwZ%2FxcqDAIWhuO5gnSi3ggyHX6oT3lx4%2BC3tx36yzKWufePIGzuUy3sAvdyZ1BNODPSxQ4w%2FwrA1E59VqbLKBs0NsYsr3w1lJUASQQv%2FpRTbAh32oQMSQaUQJlOoP8iQmHTP6rKm3415re3yxbyHSNZBcmWguKfrNuaY%2FGVAIR2BY9V7AAzXdBXo3ZzeuE%2BaIwz933dJKPX6rxpLAv41INGWNT2B7Bt7hnCzvyLcYYmW16V0c%2FIsMr1xvrwvszZTdeCp8L%2B5T%2Byo%2FpSQM8vuFVUEzg1vYANUjTjiVkl3Fw%2BTGZvycipjvqwVk17T3E8hIGrM9hUgbZkmW8lBA2jQJ28Ay3vkWrPGPsZo%2B3MtsXItPS26q5%2FV3yqwZ3vND9SrB%2B%2FD20KNyG8iYHfhz8%2FR6Aoz6BCu3CyGB6kWKO%2Fwmey%2BI24DIpdEQJwRW8Pa8dx8eNqe7JoDvtchRIrtWxqP42y3JLl7uka%2FAvc249yobXYVWZs%2FG2TKSI0k%2BT%2B77ilA6Qi8L1wF2mYBjSChmJ6SYovHNxEMT9O4xPyPTk%2BwMO%2BSpTdrDe%2BOd%2B0k78W8Mri2LO8h%2B4yK2Os5KDKBeMegVUDU0rRPjMVbH8OR4WKb0F72UjhAnRyS1tCowfte7cGqHpBTyWfF3TLbJ69GiMwgDlRt87GoN7jEpOovKZ705NSmS247GWGhBApBRTj431neN0RSiOtIrHPJMAV%2B%2BbBFLqTikgMbQ0F%2FnxZ2vShvNaRQydmSEiSmWXV9FSg36aigYcBg4YChfZFC%2FZPP5Eic3TUABZ9yWKAckzzBDnvjKYSpoLPa9wcMut8pqa9hBNoXA9%2BAqoF%2BqQwYqRf4%2BE%2ByWdrW5J971rETiMASz7TAdvebMYJyR7%2FrtX29rAtAMjaax5iFQKj0uWniH%2FGCrJ1rWC8528C%2BC2GtIgHBRQEsTgmsAnj41AwY1CDF8nch8TEo%2BetrzWmVa0s9GnDtDvjg%2FfES%2B6ynnbtieg6BUTPzO%2FILOikdm99YyESqDsH7Oie9n%2B6GdYaAnQrLYZ17XLnmQZ9qo3OoWFKWxPV220nqYlmSBmT3JXacfEVo4r5%2F6V8yZtnjtFW%2BrqIB4kdT4nrmJs1cpz10qXlsR38RYUG9tHFbIv4A1qYBp4Di1hkZ9o8kWQ8WcrX0zduUHXhoYjv43kEG7IM%2FpqM%2BEPEVAUY0i%2Fg8wObyx9v3dm4lr4a4xBAcdcxMOgpcph7rpfwC%2FeaoHp3y8y6pQPj2wnV2vXl0rqop7yUeGLb3%2BKWDLeZ0LlbrwDsklNnJ%2FWszLDJDioJbKposWdrVS%2FJmoNtV8EZ6YBLI7LJ1oYArWqxSSFy2y9iDU%2BZjmIwJ05ZOCvcUyjhZZ4%2FuzTZbv6ONOuRAl%2BmvmBCAADtHwfpkl%2BnPXDM3Nxn9pUDbLLbRKzG6gnpD00SNLfkiJIVTTzi8%2FsiPca8lYKnroR2Z8ecF%2FGUA3zgG%2BNHcBLsNorvjaLnKwEmzGXCrJH66xl4bDJkz0fH1QJwCjeTeYuuCTWSYZs9ieVvOFhh9tfuB22R5eK%2BuaX8nROaraNyboFuswvtToZPRWAxF8laAJ94SWRabqr1Cn%2FfXV7voTZUdNk0loFvgN5Q4k2KnrK1PYGejkm5b1IAUrsrmO0O%2FIymRiYwKhv%2FgpyBw7WuZzNdiAARYujiZl%2BxoPHJU%2BHAq4bxyzo%2Bt8ThWFd%2Bj32arJJpIrRPGErskSx2nxc5xJNiHTXE%2BVwU6SAWHjtNgxwmkEojn4Qmn3qVelr3dZNWH6vSSsOqjSkLB1qT2tt6ePHOb5P4eARbzZnT9H9DgVjkd%2FGL50JOevEhvzx8t9DJjogy5S0UouXoNVJkz1%2FbF1AgoIKyXu3Jih23SPQ%2FvLCjmarES5N65P6afARgCLspy3gf0yXVysaN43DvnCuWrC6%2BcLINsQj60tMVT8I65OUb9YyJlBzTtgKofgYHZZzlcTUrsCTS9OfrLuRey0SE0izxdJtjc0uRZEIoUe8YoN8EyZeA0beNFhKAkQhHU4Zi9j%2FFda1CBrD7GWGzu8rHBNJfJ8fMGNjomA3E3lV8Ai0%2FwSbBpApdObtnbUeELcn6SDj8uOJ0jwZ1mSHuchnd9Dv%2FR8Bh7gPhngQbJj2GvAb0dixZnYAOTlmBIMaqbGkp0%2BysNCfshvjsnJfK997TOyidm20mrPy4nQpWf46lI0FX5ZhMR6qN8cy%2BdnpiMwlaeFokiylycyl0EVHDKcJu%2B9h18DpZoxZV04SrOH%2FtSBXFOxvji {% enddecrypt %}
## 参考文献

- https://github.com/Meloong-Git/PCL/discussions/3386
- https://blog.creeperspy.top/posts/jikelan/
