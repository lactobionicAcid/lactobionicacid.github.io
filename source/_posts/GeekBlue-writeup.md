---
title: 极客蓝主题相关解密
abbrlink: a12a
date: 2026-06-16 21:56:08
category: 'PCL 启动器'
tag: ['个性化主题', '含有加密内容的页面']
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
*下半部分解密中**包含**不可公开内容。*[<ins>*密码是什么？*</ins>](#密码)

{% decrypt %} U2FsdGVkX1%2FRtk3O4OVpG6lQeqp2vULe63yFj4TrqNQKfxe7YUJuWJ%2FBfaTvEAO4ZbXRHH4YJWvaaLFiT3ebXZJXkCo3yf3K6u3kglKFwVRNX6QHZm5eefRm44GsqIAUk9z8sarUmyt%2FMiwa%2Bw5dTMhb%2B%2BxqYE8s7WllO2WH3ztC7IiDEZXT15fNMiokAViJGabqQZj%2BGCkkJnc1dHZ%2BApNFnnscvsABEkO98VMTdh3%2FaQvvMHPBfujIznyq%2B%2BRZcNHLdbxNkHRDNNDGGNbZ3%2BZkpYF38NegXGGHVe4wfilwjFcw%2BXN6ieL%2FpfBbUmk5z0234YOD3m9E6XWqIsTCkcaGGUJcv53e4UypkcLdCJ5iIdK4FC2rYnfp%2FJIIHZlcq8Xo1Fjv6X6lNUAwGp3%2FktjDZlSgewLXexso9vFF5jtVFjox%2Fo4TVSK2fMmT4b9bziLU5qGrAilDcyKdF9jFXRHW1A7chDy3ueS2yyTTNBDYSN%2F%2FulstjxIh%2BG8iHlVNsmrKH%2B3rYQJwrwoWnznthpCKAmH3yBjRf3S2ZTqdCznWn7GTpYnyoiDXG25eUJcuTYFKR8w6lbDKnu%2BKFrjcD4u%2B0uWiLabGVEdHaxbGza%2B0KrR29%2BzbCGr30WDQSJ50SPoaoaY3FBAzgSWwpeW%2BUUUe2ahy%2FNdG7GPcj6l1cOiXX97FzzeKoocCwu%2FgXI8zmvN4PYVSInuRzgIYR6gELzws656Oqf8mPVAkUOhaMTuNa4gB%2BMAf1Al2psOtTFS8r3EbXPwBz0duMq%2BhuG%2BVeIIsE2eVqtrGybXRvS%2B7RZX1wUfl7hmFKSYvvOoaLutJ5R1n5nYTMQqHfHC8fg7%2FYYcjgQa%2Fy2xasI3XU97MAHuwcpVbbvenqHUPSuKgrs23Bef1%2B6IILU2XLe4L4ZtkuczABDNtjjH8%2Bad0S6gB3mFFYtvMxJk1wQxG7eSCpjf4QL9hNoV%2FWXZXil3ntUk1niRz3cKmdXfYVGDEyaR56lVYdVkEBj%2BEkcLrcqWA%2FOQBfARrJ1jIqlbLjv77WnyyC4ZDsBDXBNE4Ib%2BKwYd4JRrBXPbpcp8%2BSm8v%2BRxa1nMAE6hQNeQq9l529yTh2dH11mOcJYHfgyvG8PTQ9p48dTvaJrJ77%2FZCwGNoR8ciS7%2BPHKWIKAl2Pf6ocBQEC1ekWdNvdLz7y4D%2BZ40z5f1TKw4HzJ0eYFlW9C2L%2Bj8qQpoFGwZiPHPXHB3oyIJSNiGaCG%2Flyx%2F0PvoEuYcEK4hhQXUJgWbVOcBPyILus6tGqxRIsWThmsgpFILv66enmHsTa50She2T2%2FoRiBBmxANNVypvXKbO7Ezs6%2Fz0Kw1OBUQ%2F1HeII3nIrGuTgpwVA60hDKZ1z%2Fue1FiT4Az%2BRqhVSZk45lNtCatx16qNZrlVA1Q60h%2BnAPeeWXZLFYLpI1uY6byiOXD44WMjlyBq4H5bDuUWDhuNp1xkgXQZgRZjvCxrSy2T2Eu66xkMelbR2UfllWYkVD9DEbvEHpMHkGw%2FUn0bphd1I08D6Gexljhl%2BIa%2BuhIaL4xX3EOGMEqXpp1%2FbxgErmnexjxye%2BkH0pvDlixo%2B1SS5gfNzbwPPOKmaTi49RzrvYbMNuMzgt6RfXbeAyXKr1jhSLIssBIy16SzwlErj5LbhSstIl5vqxBSgNvkBSGwvtcUmpbcS9fHE58FcsO9kNT516sV2plvc7hhJB6ZrQhCV8JwpmQMjqq9GyxtbMyDfaGAAMxjnvm9PF15loVJNuFkmdTd70Ukm%2FmE0IHe%2FeMrGMkuN%2FOC10h6S6bH9plieR5Kmx6ePinvYp8gl9l2%2F%2Fbb3XM3GXnrvqeK9pQNk%2FCuSsZgr82%2FV6Er%2FL7fXSS5z5jHWTjq7SjAWZ1hhd1W9kTiGRk98HJcDjL8PkWg5fsJdXFkCNBBaw3im06X6HXX7cwUfWq8QoROGQKQcO%2FutCZM1YqNDNu2gBZ3rFe4VnUFCe1B6SMpEBf1J9pM9eT4lhiqgPl7hscOZzUow%2Bdzh8Ce3yM6C3wfNf0DbSPLLvTadVQNLwRfCREvlJjV3pnYES3NWxxsYqhlxuvuj8y4o%2FXYPZqSEiAno%2BdRseQCH5GKrH2RDMB52vwjhxluhVs8pd6%2BhnnZNXGYxUa2JhUlkg4wwdJ9Ow%2Be%2Bld8UoE4kc8dK31K%2FdKH7VFCAd7J4ulDNZu%2Bx4fhE0sZV0sg3cWq3XkmrKyF6wErpQMS0y6pZmougRpbrGmVtIT%2F7CNMtnDdgbE%2BIZxyxXKXl9Oq6u7BfOyIVcI2LRLMn7Vjfh0i5g39e7NKiAc%2BMXRBo6c1L%2B0Eu2M32shWkLABTu9ZIy%2BMPPfqQwt8CLzpx88WHs2JKzEEbznEIDw%2FNIR7jvqy7ygNEsbK4jbX5TXKZXaVkAtGHrOSGcJEUR8vH1r86pz3Imtp2dsn6y%2BaYFG7Qb3f2Od6h3ftuATqpwYE6UDmjG9v0sRcdHoiNEmgM2bxIbAv%2BV81lSPuXToWV7op6XWggGd3HLsFYf5Pf6I05m%2BHT%2FJcjiz3JyOe2ZX%2FU%2FBpCYqvzG3t5fgo4swqCvh4LLjwnDEqVDlw7jDmyyAZ9RKzgg4kLtWIkJqursSoMH7LW1pQQWRcqPQD8prtffe8JY9AkjykpQ6rWuLLNP%2FnM67u1cDP%2BOPXyxl2iPpYUzffU6EK5tL2PvC6v%2FZw1Mi5EamxRyY4HgKoJfG0%2BmR7%2FC6a%2BH7OtjF2OVo%2Bvja0YTdY0%2Fwhaq4TQKVaqH6WMNGnSGwyfYvXO7AiTVnAiz1x3r9VB4qdB9oWKco5WeNPZHRGHPY5IVDdwGS3qgFE1x6iZmTvdXbiNeVJp9spqbZ7pvktme2q6NQyBhyCnAUnsl2qWJhoVarWNKNqaV3fnnhX5RMTW%2BPpEGfRz69X0ixoHP4MRin8wkZYpO0nOYMDJsYJqF2yxZBGiJVRybsiJw6AjR6KHnKF6AYSdCSVHPzbLiwleB%2F9g6cCTiN%2BsmQ1wtmbrROgcwBIbLvRnJ%2BG5n2aCCsc0n09aG%2FuNLXjBhiw9uMESqnsCRF7hY4HN2omKdbkHu0Xzrvpj%2FqUoN5hhojsg0ye%2FH2sfh1tCL4NJODR%2F5AJW0cfBZgPcqKtAfTQZpFWgnPhbNxamQOs9ktlnlgPGuQnHxF1pm4JnhWuWMeR3ROt0EKllZh6UoIexnDj98uO03Js7ljvdfrLGbiq1M%2FUZc%2FrQOSnlvo4JPDh57r4Q2XYA76E2KSbPk%2B2i%2B4cvjBkCKiQp9XUKrP1IEVoIzdx%2FZS5KeW6dxvgBEkwRjSsijPobf1zFQfx%2B%2FmlUpQ0hErN2925OBv3VeA2AcaI8A1EelL05gLgMVXt9c%2BEASvhdc4%2BcZMx8mp33cWNFTy97AUduY9vOvqALFAYAVPc9GgHg1lenmhFgBI73bA0YLGTnPNlVGFkbZzPUybviVitlKFD9Hh6qUyFjMeommHjCMR%2BgbrPhWE0G5kiqLnjYECqnXvAMYNUtFR2CnclTztx1%2Bg01TBtZCNg7aWA4kI6KOiVMZrz2j1ZMyCImOpcKRB%2FnqgFKYC6%2Bhy0FmTAim%2FtnLYcUmlCkIvSuJEWkNy2fvj7cA017piKh6qTNZdDwcCwul3v643c0tJvoOgkkO8HnbzCehNkdS2YnpreQdNdnN8bWIs97%2FNz%2FPRn%2FMSSUikaDTn1KjyHZy48qWVUD8dJ5nSazFuX1Q56ESuwWn2dIpZp8YUJDzJE4h185Haf5KtPlu5kl2AxdVq04FXlXO8dhJWWVGmZm7WtTz%2B7nKoC5nRun6WZHHSoJ17cKanWG1RipNOoE1jnIyHdUnPwPstDCG8sVVwiB28N8%2Bp%2Fwhdd68f0F0LjPsBaf9BRzYqvKMeL%2BFf6n4tFPK7Zbh3o6fu5vbR4qrz4YBqZ6aiMeVlHhkn8WiZfFo4VRe%2B%2BWf29HLcc06F5MkNnFZKmHmwkTN0jURKsa6g3pnyR3I4AT7aK%2FGU4DAdwJ0pBJk8Osk8Sndr6cXLjFDvSyFPz7lZ86sw761I4z4hwmluyP1g2ASAp7qr%2Bf1lqZHwsmmmCMhdSp57ikEVClSYUMnTJwyDSUqE%2FiNDjZ7p%2F8cnsRwrED8%2BZFD0ShU3Jgic96F7xoK3HLhfll3TZRkCUDZruPp7gtlGCaPNrx1MOWjw49O4lLe%2FBVxaWHZ%2Bhzi1BzbjzoKbOOV4CDVV40Z1Uiny0l8LTwcWJThVr7OL99VIWXEeciTLH7D30Q06d0tmoUDzO97ymIkhINg%2BI9c7E841rPNo9LYcaDdt3bTZOt2mTJDB6shkWCn0bzsVNWkAguEM0x1dlfXtWRcEOeiztSi6%2FKMiSQ9csZ2kYRgim2H1XC%2BH%2BmK3l%2Bolv8qEgOrZ7joPS0gUGOiL8W4giGo8%2BSNuMcYraP6PO1cz8kaceqHnUs4h3CF7cd3yPSqLLXNYfCVqm%2Bttxm5sEhUJpopGhlVO0WJG%2BPkUNGqsF60DjR%2BVnbelsqSqXz4pONGjrtYiPaqo%2FeQrlZnzVfT4MeEC8Z0CyeuGWo8uPvyg6DOXwXfdCUDPDEtjgSfd7AihJIAaqds8k1fMS56CJ%2FKpv5bC%2BscYkr82VawEzvkvxN1XyLmBq8wx0%2FG75NuyB%2Fa7%2FI%2Be63wW1skveC%2BMwkgxJ2wc1b84C7IGlVumI7hlUpwgrlJLzRHJ5B84%2BEO4%2BFutki7aEUNOLuqHxlfFK91WXh0J39Rxmkh4CJNVchiELPBJDzll5%2FwyL94XoHqbsf%2FXK3%2F65nDqmG3qLOhf8HRVFFUZOrGsZ3Bl4Pbgdo5YCXIc7%2FXOr4rHtKFaDhIBLoP4AHkoT2iYC40V4U6MEbVIhU6J09kvPDb3bvB7YQuukQiNoEBoBBuG3P6yRqOge5tyceP4nR0pQc1Hivlh8z5IOo2Gmwun6gErXJAKi7dSCowvDndyp%2F6SKdpcWt6iV6gMaN6sZJAiBKuUg4Kpx0dzlTPdXeaPHDhXcyaIOCVdz72Aiku%2BuC1PVhRvUGhH9QcwhntrI6P9KZHwoc4IVwIt1cVqA7VpG5WzXWqSf9bpOJy2UjwlFwK8W0eLgq8iO8We3VJHTqe80WUaFIvPNEhzA3WC%2BHdZG3v7gY7TdhCeV4x13Pt%2B8H6oigoPDyR3rg2ALfIDc4gXI1pFHF0XjRwMOAXb6uk3CAcTsFX9rIEyHseqCYyyR0fQoPaoE%2FFHyH35MFmkf3xC8FkKluL8hw%2B5wKAdmLvgw2lC4fx%2FezGBz5LlMuCs%2FXXDaPFj0btHx6wrXwvYI%2BDGvaXXpR11osepvpDSThk%2FTKBiEj5Sk%2FLDf%2BcVF7ONciT08coZAB7r6z7BCNjLoie%2FCrLKKl8E%2BlcKf7eiwjBuPSbtl0IqKvwPt53nj9CFt6hXKCZ2En0dpYY9mIxL%2BiQxUCAOGaeGaM3F3SrD72UiPlNgBTOBwp7CzSQoWhjUeyIPqWTifh1S1WB3WeS0Volj5K1ZM699zPM%2BUU7Yddr4Qtt3mN%2Bb%2FjXm2W8x8YrI5HBLwwMw8tzyonZOv {% enddecrypt %}

## 参考文献

- https://github.com/Meloong-Git/PCL/discussions/3386
- https://blog.creeperspy.top/posts/jikelan/
