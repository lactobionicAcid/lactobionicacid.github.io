---
license: cc_by_nc
title: PCL 启动器主题解锁教程
abbrlink: sp-1
date: 2024-11-10 03:37:00
categories: ['PCL 启动器']
thumbnail: 202411/sp-1/head.png
excerpt: 始于 2024 年，这篇文章详细讲述了如何解锁 PCL 的各个主题，同时展示了各个隐藏主题的外观。
---


<style>
    /* 与滑稽彩相关的文字渐变动效 */
    .rainbow {
        color: transparent;
        background: linear-gradient(to right, #3976f8 20%, #e71856 40%, #f7b500 60%, #20e050 80%, #3976f8 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: auto;
        animation: gradientText 1200s infinite linear;
        -webkit-animation: gradientText 1200s infinite linear;
        font-size: 40rpx;
        margin-top: 100rpx;
        top: 200rpx;
    }
    @keyframes gradientText {
        0% { background-position: 0; }
        100% { background-position: -24000px; }
    }

    /* 与 GitHub 相关的标签样式 */
    .github_tag {
        box-sizing: border-box;
        border-radius: var(--borderRadius-full,624.938rem);
        font-family: inherit;
        font-weight: var(--base-text-weight-semibold,600);
        white-space: nowrap;align-items: center;
        line-height: 1;
        text-decoration: none;
        display: inline-flex;
        font-size: var(--text-body-size-small,.75rem);
        height: var(--base-size-20,1.25rem);
        width: auto;
        --perceived-lightness: calc(var(--label-r)*.2126/255 + var(--label-g)*.7152/255 + var(--label-b)*.0722/255);
        --lightness-switch: max(0,min(calc(1/(var(--lightness-threshold) - var(--perceived-lightness))),1));
        border-style: solid;
        border-width: var(--borderWidth-thin,.0625rem);
        position: relative;
        --lightness-threshold: .453;
        --border-threshold: .96;
        --border-alpha: max(0,min(calc((var(--perceived-lightness) - var(--border-threshold))*100),1));
        background: rgb(var(--label-r),var(--label-g),var(--label-b));
        border-color: hsl(var(--label-h),calc(var(--label-s)*1%),calc((var(--label-l) - 25)*1%),var(--border-alpha));
        color: hsl(0deg,0%,calc(100%*var(--lightness-switch)));
        padding-left: .5rem;
        padding-right: .5rem;
    }
</style>



{% callout type="info" icon="fa-regular&#32;fa-circle-info" %}
阅读这篇文章时，请善用位于右侧的目录功能。
{% endcallout %}


你是否觉得蓝色的 PCL 启动器过于单调了？想给它一点颜色看看？那么不妨给 PCL 换个主题吧。


## 更换主题

打开你的 PCL 启动器，转到 `设置` → `个性化` → `基础`。如果你看到了以下内容：

![image](theme_locked.png)

说明你的 PCL 启动器是正式版，无法更换主题。

点击 {% button text="支持&#32;PCL&#32;开发！" url="https://ifdian.net/a/LTCat/" icon="fa-solid" size="sm" title="（前往爱发电主页）" %}，前往爱发电并给龙腾猫跃打赏至少 CNY￥6.66 后，私信龙腾猫跃获取快照版 PCL 下载链接。

![image](afdian_1.png)

现在，打开快照版 PCL，转到 `设置` → `个性化` → `基础`，应当能看到以下内容：

![image](theme_unlocked.png)

恭喜！你解锁了 PCL 启动器的基础主题。但如你所见，下方还有 10 个未解锁的隐藏主题。接下来，笔者将详细描述解锁各个隐藏主题的方法。



## 隐藏主题的解锁

※ 每种主题在介绍时都会附上一张使用当前主题的图片，以供参考。

※ 以下所有主题均截自 PCL 快照版 2.12.8.0 版本。主题 *可能* 会在后续版本出现轻微的修改。



### <div style="color: #2B2E34;">玄素黑</div>

> 灰色是个谎言！

![image](theme-1.png)

即隐藏主题第 1 行第 1 个主题。这是所有隐藏主题中最容易解锁的主题，只需要用鼠标狂点这个选项即可。


&nbsp;


### <div class="rainbow">滑稽彩</div>

> 滑稽树上滑稽果，滑稽树下你和我，滑稽之日搞事情，欢乐多又多

![image](theme-2.webp)

即隐藏主题第 1 行第 2 个主题。将电脑日期调到 4 月 1 日，然后打开 PCL，你会发现“启动游戏”的按钮在尝试远离你的鼠标指针，同时右下角冒出一个小白旗。你需要做的，则是拼手速点击“启动游戏”的按钮，并且**不要按小白旗**。如果你成功了，这个隐藏主题便会解锁。

这个主题的特别之处在于，<spam class="rainbow">其颜色会缓慢渐变</spam>。*~~你没有眼花，展示图是 WebP 动图~~*

{% callout type="warning" icon="fa-regular&#32;fa-triangle-exclamation" %}
在部分电脑上，这个主题可能会带来不小的性能开销。
{% endcallout %}

另外，为了防止部分玩家在愚人节当天血压大爆発，这个愚人节彩蛋在同年内只能触发 **1 次**。（[#1638](https://github.com/Meloong-Git/PCL/issues/1638#issuecomment-4076598398)）


&nbsp;


### <div style="color: #E77692;">铁杆粉</div>

> 99 次重逢的喜悦

![image](theme-3.png)

即隐藏主题第 1 行第 3 个主题。如提示所述，你需要**启动 PCL 启动器** 99 次，即可解锁。


&nbsp;


### <div style="color: #9B42B9;">神秘紫</div>

> 072 101 108 112 032 068 101 118 032 048 046 052 046 052

![image](theme-4.png)

即隐藏主题第 1 行第 4 个主题。将提示中的一连串数字对照 ASCII 表解得 `Help Dev 0.4.4`。

打开爱发电，翻阅龙腾猫跃的动态，找到 [Dev 0.4.4 版本](https://ifdian.net/p/dba42c22c93c11e8a70452540025c377)并下载。之后，打开这个版本，并转到 `帮助` → `开源许可` → `Something Hidden Here`，可以看到有一个按钮 `??????`。按下它，之后打开较新的 PCL 启动器，即可发现该主题已解锁。

{% callout type="warning" icon="fa-regular&#32;fa-triangle-exclamation" %}
在部分电脑上解锁神秘紫时，可能导致识别码发生变更，致使丢失所有隐藏主题（[#3316](https://github.com/Meloong-Git/PCL/issues/3316)）。
{% endcallout %}


&nbsp;


### <spam style="color: transparent; background: linear-gradient(to right, #7349C2, #B83DB8, #BB3E69); background-clip: text;">欧皇彩</spam>

> 这就是传说中的欧皇了吧

![image](theme-5.png)

即隐藏主题第 1 行第 5 个主题。转到 `更多` → `百宝箱`，点击 `今日人品`。当你的今日人品达到 **100** 时解锁该主题。

什么？你说你抽不到 100 人品值？好吧，其实龙腾猫跃偷偷留了一个后门。如果你更改电脑的日期，那么 PCL 输出的则会是那一天的人品值。所以，你可以不断修改电脑日期，不断刷新人品，直到出现 100 人品值为止。

当然，只要你天天抽一次人品值，总有一天会抽出 100 人品值…… ~~*这就是传说中的欧皇了吧*~~<br/>
~~*你今天的人品值是：0？！*~~


&nbsp;


### <div style="color: #C9AF2A;">秋仪金</div>

> 累积赞助达到 ￥23.33 后，在爱发电私信发送【土豆 0123-4567-89AB-CDEF】以解锁

> 右键打开赞助页面，如果觉得 PCL 做得还不错就支持一下吧 =w=！

![image](theme-6.png)

即隐藏主题第 2 行第 1 个主题。在已经给龙腾猫跃打赏**至少 CNY￥23.33** 的前提下，前往爱发电，向龙腾猫跃的私信发送 `土豆` 并**附上你当前的 PCL 识别码**，即可获得一串**土豆码**（2.12.7.2 以前称作“解锁码”）。

土豆码为一串使用 ECDSA 加密的文本，通常如下图所示。

![image](afdian_2.png)

转到 `更多` → `关于与鸣谢` → `赞助者`，点击 `输入土豆码`，将这段土豆码复制粘贴过去，然后点击 `确定`。

如果你已经打赏过龙腾猫跃了，但是赞助**总价**低于 CNY￥23.33，可以选择下方的 `自选金额`，然后补足差价，也可以解锁这个主题。

如果因为更换电脑或其他因素导致识别码变更，你亦可以重新申请土豆码，但需要在回复时带上新的识别码。

{% callout type="info" title="你知道吗" icon="fa-solid&#32;fa-circle-question"%}
2.12.7.2 以前的解锁码使用 **RSA 512** 进行加密。该加密算法不安全，且已经有人破解了私钥。
{% endcallout %}


&nbsp;


### <div style="color: #E17C33;">活跃橙</div>

> · 反馈一个 Bug，在标记为 [完成] 后回复识别码要求解锁
> · 提交一个 Pull Request 或主页预设，在标记为 [完成] 后回复识别码要求解锁

![image](theme-7.png)

即隐藏主题第 2 行第 2 个主题，亦作为**对 PCL 作出贡献的奖励**。~~前提是你可以流畅访问 GitHub~~

在**由你提交**且被标记为&#32;<spam class="github_tag" style="--label-r: 14; --label-g: 138; --label-b: 22; --label-h: 124; --label-s: 82; --label-l: 30;">完成</spam>&#32;的 Pull Request、主页预设投稿，或带&#32;<spam class="github_tag" style="--label-r: 254;--label-g: 250;--label-b: 250;--label-h: 0;--label-s: 67;--label-l: 99;">· Bug</spam>&#32;<spam class="github_tag" style="--label-r: 14; --label-g: 138; --label-b: 22; --label-h: 124; --label-s: 82; --label-l: 30;">完成</spam>&#32;标签的 Issue 的评论区下，回复你的 PCL 识别码，即可获得土豆码。点击 `输入土豆码`，将你获得的土豆码复制粘贴过去，然后点击 `确定`。

<span style="opacity: .50; ">此前，活跃橙还可在 LTW3 服务器中用 3 个金块购买，现已失效。</span>

土豆码为一串使用 ECDSA 加密的文本，通常如下图所示。这个土豆码通常由龙腾猫跃本人发送，因此在要求解锁活跃橙后，还需要耐心等待龙腾猫跃进行回复。

![image](github_1.png)

如果因为更换电脑或其他因素导致识别码变更，你亦可以重新申请土豆码，但需要在回复时带上新的识别码。

{% callout type="danger" title="警告" icon="fa-solid&#32;fa-circle-xmark" %}
活跃橙是一种奖励，请勿为了活跃橙而向仓库提交无效或重复的 Issue 等，这会**严重打扰**其他的协助者。
[*如何优雅地解决问题/提交反馈？*](https://pcl-community.github.io/PCL2-1930-Web/guide.html)
{% endcallout %}


&nbsp;


### <div style="color: #DA4133;">跳票红</div>

> 进行一次正版登录，支持正版游戏！

> *虽然 Mojang 跳票，但也要恰饭的嘛<sub>（旧版 PCL 主题提示）</sub>*

![image](theme-8.png)

即隐藏主题第 2 行第 3 个主题。如提示所述，只要使用正版 Minecraft 账号登录一次，就能解锁这个主题。


&nbsp;


### <div style="color: #3C55CC;">极客蓝</div>

> 右键打开解密游戏入口

![image](theme-9.png)

即隐藏主题第 2 行第 4 个主题。在解锁 3 个隐藏主题后启用解密，右击该主题选项即可打开其入口。

该主题需要使用土豆码解锁，而且属于解密的一部分。如果你在解密过程中受阻~~或是懒得解密~~，这里直接贴出土豆码：

<p style="text-align: center"><code>PuzzleUnlock-</code>（你的识别码的末四位<sup>※</sup>）</p>
<p style="text-align: center"><sup>※ 例如，你的识别码是 <code>1234-5678-90AB-CDEF</code>，则代入后的土豆码为 <code>PuzzleUnlock-CDEF</code></sup></p>

在解出土豆码后，这个解密尚未结束。如果你感兴趣，可以接着解下去，最终会把你引导到一个 QQ 群中。

你也可以参考前人的已解密内容，[详见此讨论区](https://github.com/Meloong-Git/PCL/discussions/3386)<sub>（注：有一部分步骤**不能公开**）</sub>。解密初期含有一个已失效网站~~（MCBBS）~~，可以在此处查看[由 lactobionicAcid 制作的备份](https://docs.qq.com/doc/DQVJuS0J0cnFtRFBR)。


&nbsp;


### 自定义

> 需要解锁五个隐藏主题

![image](theme-10.png)

即隐藏主题第 2 行第 5 个主题。在解锁 5 个隐藏主题后自动解锁该主题。该主题提供了 4 个额外的自定义项，你可以随心所欲调整 PCL 的颜色。


&nbsp;


### <div style="color: #27459C;">星空蓝</div>

![image](theme-42.png)

<span style="color: #27459C; font-weight: bold;">真正的隐藏主题。</span>你需要打开与 PCL 位于同一目录下的 PCL 文件夹，打开并编辑其中的“Setup.ini”文件，将其中 `UiLauncherTheme` 的值改为 **42**。保存文件，重启 PCL 启动器，即可发现该主题已被自动应用。

该主题致敬了《银河系漫游指南》中生命、宇宙以及一切的终极答案：<span style="color: #27459C; font-weight: bold;">「42」</span>。

<span style="opacity: .50;">然而，这个隐藏主题只有上述唯一的 *一点也不优雅的* 切换方式，也不计入解锁极客蓝解密和自定义主题所需的 3 个或 5 个隐藏主题当中。</span>

<span style="opacity: .25; text-decoration: line-through;">众所周知十大隐藏主题一定有 11 个</span>


&nbsp;


### <div style="color: #EEEEEE;">眼瞎白</div>

![image](theme--1.png)

“千万别点”中的隐藏主题。点击 `千万别点` 时有概率将 PCL 的主题颜色替换为纯白色，同时所有主题的名称均变为“眼瞎白”（虽然看不清但确实如此）~~，龙猫向你投掷了一颗闪光弹~~。该主题亦会和“千万别点”产生的其他特效（如有）一起显示。

严格意义上来说这并不能算作隐藏主题，因为其本质是直接对已有的主题进行修改。

该主题的背景颜色仍为当前已选择的主题的颜色，且当选择的主题为“玄素黑”时，PCL 的标题栏仍为黑色；选择的主题为“神秘紫”时，PCL 的标题栏会显现出该主题的花纹水印。

重启 PCL 启动器后该主题失效。


&nbsp;


### <spam class="rainbow">真・滑稽彩</spam>

![image](theme--2.png)

{% callout type="danger" icon="fa-regular&#32;fa-triangle-exclamation" %}
光敏性癫痫警告
{% endcallout %}

“千万别点”中的隐藏主题。点击 `千万别点` 时有概率将 PCL 主题的颜色以极高的频率更改为随机颜色，同时所有主题的名称均变为“真・滑稽彩”。该主题亦会和“千万别点”产生的其他特效（如有）一起显示。

严格意义上来说这并不能算作隐藏主题，因为其本质是直接对已有的主题进行修改。

在“千万别点”中触发该主题时，PCL 会弹出光敏性癫痫警告。

![image](epilepsy.png)

重启 PCL 启动器后该主题失效。


&nbsp;


## 结尾

本文写作纯属兴趣使然。文章最初发表在某位群友的[个人 Blog](http://blog.lyyweb.top/archives/Ri8DJYkJ) 上，甚至曾一度占领搜索引擎首条。

![image](dialog-1.png)