---
title: 极客蓝主题相关解密
abbrlink: a12a
date: 2026-06-16 21:56:08
tag: ['PCL 启动器', '含有加密内容的页面']
excerpt: 与极客蓝相关的解密 WRITEUP。部分内容需要使用密码访问。
---

本文档为 Plain Craft Launcher 启动器（以下简称 PCL）中的内置主题 “极客蓝” 相关解密的非正式 WRITEUP。

## 免责声明

<img src="niyaobeijia.png" style="zoom:25%;" />

本文档含有部分**不可公开**的内容，在本文档中**使用密码保护**。发布这部分内容时请**慎重考虑**。

在密群外擅自发布与解密有关且未经公开<sub>*（在[该 GitHub 讨论区](https://github.com/Meloong-Git/PCL/discussions/3386)不可找到）*</sub>的内容可能会导致你被**踢出所有 PCL 官方群**以及**承担相应后果**。

此外，发布这些内容也会**破坏**正在解密的人的体验。

如因发布不可公开的内容，而造成严重后果的，**本文档整理人 @lactobionicAcid 将不会承担任何责任**，一切后果请自负。

## 密码

本文档加密部分的密码为 `某个 QQ 群号` + `某个密钥`，中间**不要**用任何符号隔开。如果你已经完成了极客蓝主题的解密，你应当知道密码是什么。

## 解密部分

### 上半部分解密
*上半部分解密中应当不包含任何不可公开内容。*

初始线索。

{% callout %}
gnp.dorC61\60\20\0202\moc.x1xa.2s\\:sptth
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
*下半部分解密中**包含**不可公开内容。*[<ins>*密码是什么？*</ins>](#密码)

{% decrypt %}U2FsdGVkX1%2B9f7CcGPQ8Lc6nTqp6DJ2S3OYqcjfbM1DksafpRaKtKPKwP%2Fz4A1g6sBR16M4mnfhlktH60ljSdv3RaV7rXYv4gwYt3Fd785sqD5ym9kMx9YDTBDYKxsfqt7xkJa1X5MFayT7IO4FrowhmTsjQdZ%2F648vBUmZbnR9L26SQy5NtTBuJ4C9Pr%2FFJkG1SfN%2B4Jcj0fv7x9qhdx6NRtoa27qYHdT6wyeT7ACSNAOEkT1hR9XqwcsX7jpvZDgGRtVbvN3wW8SMfjBaMK5Rmvp%2BB%2BaWyXGQwlyDrTOuYBhuYhBK%2BnQ%2BcT0d%2FLo6eiv5S0GfhISBLv66XcspHJ0u%2BeI7V1tgMkVyZTgBk5T4M1wMsq1TC071umePTdAdUuDOXzcLQn27jklGqbjIjv1Gq1ZYEXQ32%2BEVwT6dipIQ5CSxfiBWB8%2FN97MC6lJevOM%2BkuQloCgYaYsoXO2saomuXwpHvskjuekJfTWz1Qfv%2F7gnxHM1OUW1DxetQsW1MI11PM8TQwMHeY%2BkO7VJDXSaPm6Ir%2B1H%2BOscGl9nUFUEgEuJAMaeHn2KOJjFLuXxnusOfMGmy52%2BVfy3D7MWRaZdreMzx83OcPvFYROEy0q9ZWy%2FpzZysGjKcx5NGAKgV4WIdufWkaMNBcsKsXlKfMn3u4YSoOR%2BXq2wif5ZemABNy7OIMqvUUxIxm15ERhCBLQTBnbxw61%2B%2FIeEuwqofCJeYXZIMPh1xix6aUAe4qTPUH7N3qNTrsKXN2ezEqZtc9gyIrs2anmuQI5WXv4%2BmGFafGFZrMrPuEaVXBAcCtihp9yfcD77LX3VSCqE9CIvmRVGdWwP099Vwd3gOmE2HwBaHkiiPtaaE%2FVfwwD67cSubqWRLVtYjuUvMQ3v1QscAtvH01%2F%2FhjaVGBeI6NRBtnWVr7zY%2FRyld%2F56qHOj%2Fngix1jc20wZykSYkbRaNIdTONqbLec5hiw4aT3pFQkkXTHCXLVW%2B1Jdl1PXaajMMST861gTxvvda71yM1DRSUEJ5KNc07Mfpuqi6gEmPM49HN043UnrVG37G4eo%2F0%2FUzNEdH5oRGmYZGu94eNmUA0yf9OTtOpz0iF8j107wGeRP%2BckuU6IHLnTxC7nioU6et7RCfYjjTe%2FU26fbNWTgCKpaHSg8rrVaLdDia3yZJirrepS%2BJR4Drz5zCegw5tWWvr9mYpOJ6ksP0ilUAmS8IxKs0QiCvVJ19sGUeFnHEuwzcjoPSEOghU1Zjd0mrdGbbpqHLILHXwJvGuUSO4k74sKds6M4mkEL0mbjeskVtlfRFE1s0c%2FibdgoETZmpl7%2BDTwQNPwPH9Pz6y6Ul6WCp0VbSn5pzF96D1BD1A%2BSIPfYxEW67v2AzcK8Ru8K4WchrLf3KHzx2r6Pv%2FZJVj6AdsDnHhFrsh1kNCFcnD6dOqSNnV5QNalKQr%2BFwWZp1qWWZXvT1RDuC9hehKhEMWkwQzYavY22nlArejsySSkywIAQ9fSuS72qUru9i8R6cLkXXgL682YTJWBDmCN9fyFuWuGT3AuZIB8VFKCmrjs%2BIm8qdmTJT4L6c%2FMz5gHquaXi11XsKX2kAcspbqK5MCaKbtt%2BOjTBLbAUjjoAfzjHNZbknQ6OraljQf2qVfi%2Bn0XY%2F4xLnJAQ1%2FiHkCzCDE5yL2PqycBZtid4wzqezUPMctFbVwGdIppby6Isx7fopdvZ5MMqa1MaEiaADyZVsjO8LgFT4WUer6bWuyo5wJ2%2FwM5iIrmjVRyhk6FzYUWgGFhVk0fnutfdt%2BeyOn2ia9k7sRYJWkKcmItax6H%2FJvpGZLYhGjQMB7HMyQXN6dpN2Nli79%2BbMv5JZl1vZArguh09NAaB%2FdrxKRvK6PCFOhqFFzpW2ssmpaz%2FxhJ1DrCQvg%2BsiN32ib0G1g5FM8g%2F5Q4ux7wwh7xG34jT2I2FiXpN4ZMrXgKyHg8dkiEpiwMT2j%2FqEYR9dkR8EKYlBIkhxSEG4lPxD0QJvD3bG6wvmbB7LvP1SZPOEL%2FBh2fOBcukQxNGOE%2BLMVEusvZqldt32FPQjsDAo%2Fe1XpoifQATtiSpuN8Q6tnZifFWgifbuZC11zWs%2BNQEeKUCW7sCvfgex6o2sTrh4boPbbCVC3sw3ldysClh0PnoGgvlpu1FvzK1eUM7IsIIHwEWm09QLPBc5AzNKzQurKUe1WwN7N%2FuBS3phkjtz4RwSODV50Yr9Ryt5vqZr7XeVEOkW4iu0v8DE%2Bu3OK%2FGASnJ4diq0Hq%2B7K2gm8dmaJo5vDwIHUqVknvinRAJ%2BIscZI2F%2FAYLCmk%2FsSZux5d4sAOhKNgEWN6AleoM4sf86XSMI852%2F9mch9QZe92%2FocI9FcltAxIsJ4%2B6NUDGOi6OcNA7OY1gMoFsTTnSnNdOBsOs%2BO5GSUi19gbEQY44Ibrexupg8bMEW1gzJ9fG2Pm488tLlEeyxJiw802%2B3HoMkALg%2FGZnigUl0VQjMUdFj7oyTnlvqsCd84bWhTqZnciYqon%2FJAOwgCyGed3smP%2Bdnbflo2glZYxL14pzb7cyMn0e%2BC7DLOL010Zt9amfhBIU7bwgeC6vQJP%2BIO7StvRkazYxO5dDQ1Q7OI%2F3XIvB8QpuqsCUxyRrfb3cxDH5sB8ojgHsLlufkqHrifMTJ2BUCZh%2BFV3PR8QUJn8I%2B7zsmSIxscFzUN8pABt3qmAH08OH3X3n3CGfHEb7evZ7drWb4IbN1Gaslkl4rfK2zVOx9zeKWhdppMkoguyK%2FZyL8exIFVJIt9c%2FxlQ6Uz4U6RVB5nowq8rFI8hdUyR847aVcWWjkvrtn7LS9fAg%2BUf1NNsVe9BohNGMRRl6FIRJ09zE4m3xafA%2FT%2BSuIx0OEomHeLeqGR4BVibbWFsDWcTyfoihGFP1sWHRgkHXhey9kFPbRl46vogzJkhCTcaSLfP1XKJ7MvyiyqybkNL9LStb0HRJxeC27iqhHtClqqUUuw1Ev1QEWBetrrGdk5N60lDEcc4lvUbGgc9FkMAE6BMyB7CVflCBgeA14qKSxdQdUpQ9%2FNr2l3uLuRyiU1AleucGB%2F1PaJJq44Nu7lZ8w3xfyxPswnSxdm2ORKugRvW5LFaiJIIqumTPkVEr18q3fpVDS%2BkY8mEupdIdyNcW7ryJX%2F1rBLMt6rQxSUa%2FaSUsw9RAq8DCJKzJII14cabVKOIQmvRyEy8zuYQ%2FHtWnF9Dtb8LHFHbKp35cL%2FaowBIXIEOpV%2Fwep90aGnJXAlf0qD9u02AFBnOQGhTsas0GorxhuUGfo5mRpyLr3MomKor5SEPSA3OoFTDxjsxECTygcOzk5sbUSEwmv55fTarQbf11ZDIONYmeZc%2F4h0hwYsXzMmL7CEV6dUTig9zoImF6JhSe9NSq6pJt3Dxm2e3m4jGkH840T%2BSXJlMJwO2MB6s0f9LjeBpmJ8UXXGOIwsRmzvxZ07NbP0UeciQGjyYWayKIa9t8xPxIgUiKqe4U6%2ByaAkewuMBDgOkUHL3RlhAk0IAlWd4F%2FUwn0VGru61GlMe10iFjH2NMj8RwQB7yF9wYZFqDpqJiXFhYTRcMFJSwXVrpvcEmtp%2FliU2ozraVZ%2BJUMt80JvKYAxVyh1Aln0lslDJRg6qjF5jUojbZks27DX%2FZZs6kHFboeDEYHQqbpexd%2FIxelNWI5rSbjSBKOxRoLvmhvTlbC%2BEOWPraZtu2ZqUkk2Yq9B28IM8qHE79XkBiaUvHPLvtT1DXqgE76FvuHIhgGYo%2BuKeUHTXnWdGA0CddJjQm7m1yeATPW7Q4435UpX2nlyspWqjT9FeBQJxoxfH4QCDsjwghtS5TTxVX4U7FuxV466UzFNWn0zegDI%2FzGeDaXWjlCyqlfVdoEFHZMfEhjQVWTyzeU247lYi4MZUMfr3dgymzyY9zgnSxo%2FGRkj%2Fs7XFEvscN6Q1KjVbI3USVnatKangixJU8A4fCiOYNZvMxFHq%2Fd%2FvH%2BkaiIpxU67JnfLg3yHLgv4AuJPGm38Aqvv2%2B9HTuIN5ofeLQNw8H4rNxTpNcaeHrSvDBaN4BKnxTJAyyOfBCPtvQuV7NDadEWRypmkHYRbpvhDhRrz7DxNgNGzLwbpn8RiAPSYdg%2BN7lcdY8Q0CEIXyl8PFVpgyTFXf6gb5JaWPVvVid6syTrIquHZ6D4NzFpuaC7j%2BxrSGl5vLx1S%2BCYLB%2Bs3Qs9cdD%2FAvwKj3kqn4dP1fqF%2BrgHwbey8rXzOpUCKxGhJ1ZUj9WdPweXviBK3bgK66iHm9xPMZjL2KvXhxvZVH2tsxb3RvLYq08%2BCn7IQGEY7gS%2FU6fzRbz1agc5aw%2BTjou4cmQvwicBOfADvhwL7bet9PSY%2FoNUUk8lsVcFcbPeibw7bYrUXlMejOcbtifNVIVjHfVTz5i%2B9BYHjoYHwx9arSwaXu8QiUw9UzLf%2FO7p%2Fjy%2BmdF2sgVLetGAVRb%2BAJ3KPvKQY1o9sYzDOEGbxLE%2Bk5N28D3MT8sFo0r4vFFOPACpK6Cw0mIaDtScMWCe2MnD6CY%2Ff7EuwtqVI4%2BBjrYvDcob1z5op0RUYJSGylW%2FYijZs5IGPZIdhVKvpf7HNQa3CldVuv%2Bnspp5U04daxPk08XyJFVDCIzgh7VyoEx4311siHJKE%2FjiXRKzoCj9KlriF4toZNP7bYVLBwp8A%2Bt8f0mYEYsGog%2B%2BG8Fm4eNLHBjDAZzIe%2BUAMeE24e9nJOSnvI1G59Lkkgd1hRxwAj2JEXaf23iBw179yQ3%2F2iBKdlUv4OwZ8a%2FVmiL59ogTvbj9WM8Sjku4aAhEp9uxYliBNlgr8LSvqQhwadMNgnDC2o14zx76ocU7UOhoSLJB6KkZd7UnxhoT5uN5Y1Zx4hCuJb7TwolrAa9f8ycQN63tbTkqQXyM6PsDZCq%2BJIE9e0El8SJXTxK%2BpKFUX5XyD5sXmrcWvH5%2BauR081GVjxlMiA732qcrQOa5Mcv7YzUwr4tqB3ptuktFrfHHtmM4iCEKNA12B%2BnH8kJ743rExt4l9PHL93P1Dhi94qkc4wdPQ0pdz5DGHE%2BBtztli3daKOlmyiFPdgUvyZjSi0qdVFrgDEnBDDibMFk1q2dXV6lxrMfYcIti%2Fe%2BcT2d1oem%2BMA5cwSj%2FbacD3Tu8WxprLeHY2Y%2BvrRQjtXuH1n9zkiaXZ8cF0J%2BfK8qDjk9HlreuWBIEhYQ4LYXS1kRuTwXt5UL4RQL1SUqZ{% enddecrypt %}

## 参考文献

- [https://github.com/Meloong-Git/PCL/discussions/3386](https://github.com/Meloong-Git/PCL/discussions/3386)