---
layout: post
title: github博客
description: 博客编辑
categories: [blog]
tags:  github blog 
---
###导语
>每个喜欢总结技术，分享技术的人都应该有自己的博客，每一个不怕折腾，喜欢完全自己做主的人都会喜欢利用github建立自己的博客。

###初识
建博客之前觉得，太折腾，觉得不亚于维护一个小型网站了，总是习惯摘抄在evernote中，趁着阅兵放假大雨不能出门，开始阅读了阮一峰的[《搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门》](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)，开始萌生了建立自己的github博客的想法。
###准备
1. github 代码维护，开源项目托管
  依托于github 新建repository的gh-pages分支，内部引擎帮助我们生成静态网页。
2. Jekyll（/'dʒiːk əl/，好吧我一直喜欢念/'dʒəkli/）
  理解为一个简单的服务器，内建了模板引擎，支持变量定义，插件等，唯一的要求是你需要按照他的规则发布博客项目，本地预览通过后，push到github的gh-pages分支，那么github的jekyll引擎会帮你生成最终的静态页面。
3. 常规前端技术，博客最终是要给人看的，我们不是专业的美工，但前端技术还是需要用来美化我们的博客，记得当时看过别人一个博客开篇前端实现八卦图把我震惊了，像这种自己学到的技术融合自己的兴趣爱好做出来的东西，很难不让人眼前一亮。另外，我觉得，简洁和简单有本质区别。
4. Markdown
   详见我的另一篇文章[《Markdown 入门》]({{site.url}}tools/2015/09/04/markdown.html)
5. 域名映射

  

 
###开始

####1.github新建项目  
   申请自己的github账号，新建repository作为自己的博客项目，就叫blog。默认建立master分支，我们在客户端本地需要安装Git(主要用git bash命令行)和方便我们操作的GUI客户端TortoiseGit(公司也在用，所以相当于平时练手)
  > gitbash 版本用1.9.5 从官网下。


   TortoiseGit 用1.8.15.0 （[中文汉化](http://pan.baidu.com/s/1ntw5oTV)）
   
####2.本地建立repositor  
   新建一个gh-pages分支，我们的博客项目都要提交到该分支下，因为github规定项目类型的仓库中，只有该分支下的页面才会生成网页。
   这时候我们的远程项目中只有初识的Readme，我们要在本地建立好项目结构后，推送到remote的gh-pages分支（可能会涉及到添加ssh公钥）

   >两种方式：  
   >1.命令行，本地打开gitbash,在目标目录中运行  
   >git init 初始化本地仓库  
   >git checkout --orphan gh-pages 创建gh-pages分支并自动切换到该分支  
   以下是提交文件时命令行  
   将当前的改动暂存在本地仓库  
   git add .  
   将暂存的改动提交到本地仓库，并写入本次提交的注释是”firs post“   
$ git commit -m "first post"  
将远程仓库在本地添加一个引用：origin  
$ git remote add origin https://github.com/username/projectName.git  
 向origin推送gh-pages分支，该命令将会将本地分支gh-pages推送到github的远程仓库，并在远程仓库创建一个同名的分支。该命令后会提示输入用户名和密码。  
$ git push origin gh-pages  

  >2.GUI界面操作，tortoiseGIT简单多了，大概步骤是一样的。  
  
####3.使用jekyll建立本地博客  
   jekyll支持HTML，MARKDOWN等格式,很多文章说需要手工建立jekyll博客目录，其实不需要，内建的 jekyll new blog命令可以快速建立一个符合规范并且有简单示例的博客项目。如下图结构
   ![]({{site.url}}img/content/3.jpg)  

  >a.安装Ruby开发和运行环境（windows） 通过 [Rubyinstaller2.1.5](http://pan.baidu.com/s/1dDdiKed)  
  >b.安装 [RubyDevKit](http://pan.baidu.com/s/1c0sdRos)  
  >注意版本要与Ruby版本一致，基本上安装出错都是版本问题。下载下来的是一个很有意思的sfx文件，如果你安装有7-zip，可以直接双击，它会自解压到你所选择的目录。解压完成之后，用cmd进入到刚才解压的目录下，运行下面命令，该命令会生成config.yml。 。config.yml文件实际上是检测系统安装的ruby的位置并记录在这个文件中，以便稍后使用。但上面的命令只针对使用rubyinstall安装的ruby有效。  
  >最后，执行如下命令，执行安装：  
  ruby dk.rb init  
  ruby dk.rb install  
  >c.完成上面的准备就可以安装Jekyll了,因为Jekyll是用Ruby编写的,最好的安装方式是通过RubyGems(gem):  
  >gem install Jekyll  
  >类似于npm,rpm等方式，通过此安装方式可避免搞错依赖关系。  
  >d.添加ruby环境变量  
  >我的是 D:\Ruby21\bin;  
  >此时jekyll已经安装到了D:\Ruby21\lib\ruby\gems\2.1.0\gems\jekyll-2.5.3  
  >注意：我本地已经安装了python3，可能部分插件会依赖python环境
  >e.此时 ，可以在 git bash中 jekyll -v 查看是否安装成功
  >如果安装成功，在博客文件夹，输入jekyll serve --safe --watch 启动完成后 可以通过localhost:4000访问博客。
  (最好在gitbash下操作，dos下错误百出)  

  相关文摘：   
  1.[《jekyll博客搭建》](http://cxshun.iteye.com/blog/1924153)  
    2.[《 Jekyll 安装、使用方法与卸载》](http://blog.csdn.net/u012675539/article/details/43734055)  
   3.[《jekyll安装与应用》](http://www.cnblogs.com/BeginMan/p/3549241.html)

####4.编辑博客
  接下来你可以操作博客目录结构了。  
 ![]({{site.url}}img/content/3.jpg)  

######目录结构：   
>* _config.yml：保存配置，该配置将影响jekyll构造网站的各种行为。关于配置的详细文档在这里 。
* \_includes：该目录下的文件可以用来作为公共的内容被其他文章引用，就跟C语言include头文件的机制完全一样，jekyll在解析时会对`\{\% include \%\}`标记扩展成对应的在_includes文件夹中的文件。 
* _layouts：该目录下的文件作为主要的模板文件 
* _posts：文章或网页应当放在这个目录中，但需要注意的是，文章的文件名必须是YYYY-MM-DD-title 
* _site：上面提到过，这是jekyll默认的转化结果存放的目录 
* assets：这个目录没有强制的要求，主要目的是存放你的资源文件，图片、样式表、脚本等。 
* _sass与css存放样式单，基本新建的博客会支持media query，支持sass语法的样式单 
* js和img是我根据个人习惯建立的 
* _config.yml是配置文件，可以根据jekyll的语法和内嵌博客对象定制自己的配置 
* CNAME是做域名映射下文会讲 
* favicon是网站faviconICON，选项卡 书签等会用到 
* index.html是所有的入口，也是基础页面   

新生成的博客其实很简单，只有简单的header，和content还有foot。我们可以根据自己的需要给加上 分类，标签，分页，版权，轮播图等等各种好玩的功能，这其中有些是jekyll博客对象支持的，有些是需要我们自己去实现的。以后有时间写下。  
 博客编辑完后，如果涉及修改了_config.uml一定要通过jekyll build重新编译下，另外所有文本都统一使用UTF-8格式，不然会出问题，多关注jekyll控制台，很多问题其实就是乱码后编译报错问题

####5.推送到github  
  上文已讲，推送时候可能会遇到一些错误，只要你确定自己的步骤没错，用户名密码没错，那十有八九就是github给墙了，网络抖动造成的，晚一会提交就行了。  

####6.申请域名  
  一般来说，我们有两个选择，选择国外的godaddy和国内的阿里云。godaddy不用备案，不用身份证，还支持支付宝，如果你把选择隐私保护等额外服务，价钱每年会比阿里云便宜一点。但我唯一不能忍的是政府设墙，运营商劫持，根本就没办法打开支付界面，bytheway,最好不要绑定visa信用卡，扣你钱没商量。
  咨询了阿里云客服后，还是选择了阿里云，因为，我不租主机当然就不需要备案啦！客服MM还很疑惑地问我，不租主机怎么访问您的网站呢，哈哈哈。  
  域名映射到自己的github项目中  
  ![]({{site.url}}img/content/4.jpg)  

  www对应完整域名，@对应省略的短域名，当然有需要也可以自己开发文件服务器，自己做图片的二级域名映射
  
  实际项目中，需要天剑CNAME文件，内容只有一行就是你的完整域名如：www.heyleoo.com  
  这里注意不用输入IP地址，域名提供商已经给你做好映射了。等十分钟后，就可以访问你的博客了。

相关文摘：
1.[《使用 GitHub, Jekyll 打造自己的免费独立博客》](http://blog.csdn.net/on_1y/article/details/19259435#t8)
2.[《一步步在GitHub上创建博客主页》](http://www.pchou.info/web-build/2013/01/05/build-github-blog-page-03.html)
 
####7.其他功能  
  评论系统，Disqus被墙了，坑爹用不了，换了友言。还不错。  
  代码高亮，本身jekyll支持了。  
  站长统计，还没加。

####8.小结
  写累了，想到了再说.....
  
  

 
   