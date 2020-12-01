# vue-h5-template
基于vue-cli3.0+webpack 4+vant ui + sass+ rem适配方案+axios封装，构建手机端模板脚手架

#### 介绍
[关于项目介绍](https://segmentfault.com/a/1190000019275330)


## 进入浦发（用作资料的查询）



#### 外联博库

 1. [SVN使用手册](https://blog.csdn.net/sinat_37812785/article/details/80243207)
 2. [阮一峰flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
 3. [字符串的方法](https://www.cnblogs.com/zhangxin2540/p/7054835.html)     
 4. []()
 5. [正则表达式菜鸟文档](https://www.runoob.com/regexp/regexp-syntax.html)
    [正则表达测试工具网址](https://c.runoob.com/front-end/854)
    [正则表达测试站](https://regexper.com/)
 6. [eruda.js调试博客1](https://www.jianshu.com/p/b95227a22745)
 7. [eruda.js调试博客2](https://www.cnblogs.com/aisiqi-love/p/11764627.html)


#### 文档
0. [TS文档](https://www.tslang.cn/docs/handbook/basic-types.html)
1. [vant-ui文档](https://youzan.github.io/vant/#/zh-CN/quickstart)   
1. a [element-ui](https://element.eleme.cn/#/zh-CN/component/layout)
2. [vue文档](https://cn.vuejs.org/)
3. [vuex文档](https://vuex.vuejs.org/zh/)
4. [axios文档](http://www.axios-js.com/zh-cn/docs/)
    [axios博客](https://segmentfault.com/a/1190000008470355)
    [fly文档](https://wendux.github.io/dist/#/doc/flyio/engine)
5. [postcss文档](https://postcss.org/)
6. [npm文档](https://docs.npmjs.com/)
7. [正则表达式图解工具](https://regexper.com/)
8. [vue-cli配置文档](https://cli.vuejs.org/zh/config/) 
9. [moment时间文档](http://momentjs.cn/docs/#/manipulating/)
10. [MDN手册](https://developer.mozilla.org/zh-CN/)
11. [gitHub](https://github.com/imagineEven)
12. [微信jssdk开发文档](http://caibaojian.com/wxwiki/0030551f015f01ecaa56d20b88ee3c6cb32503bf.html)
13. [tweenmax插件文档](https://www.tweenmax.com.cn/api/timelinemax/) 
    [tweenmax博客](https://segmentfault.com/a/1190000007496078)
14. [cube-ui文档](https://didi.github.io/cube-ui/#/zh-CN)
15. [weui博客](https://blog.csdn.net/gegephp/article/details/88869255)
16. [lodash.js操作文档](https://www.lodashjs.com/)
17. [npm文档](https://docs.npmjs.com/)
18. [高德地图文档](https://lbs.amap.com/api/javascript-api/reference/map/)
19. [postcss文档](https://postcss.org/)
21. [mongodb文档](https://www.mongodb.org.cn/)
20. []()
20. []()
20. []()
20. []()
20. []()
20. []()
20. []()
20. []()
20. []()

#### 其他工具
1. [PDF转word](https://app.xunjiepdf.com/)
2. [easy-mock模拟数据工具](https://easy-mock.com/login)
3. [vorlonjs混合开发调试工具](http://www.vorlonjs.com/)
4. [eruda.js]()
5. []()


#### 代码工具
 /src

  assets/css
  > animation.scss\自定义动画
  > animationsOther.scss\第三方动画
  > common.scss\常用css变量
  > mixin.scss\混入变量
  > variables.scss\统一主题色变量
  >
  filter/ 
  > 过滤文件，将时间进行过滤；

  utils/
  > 


#### 多环境


之前写过一个多环境的方案，是基于vue-cli2.0的  [vue多环境配置方案-传送门](https://segmentfault.com/a/1190000019136606)
最近新的项目采用了vuecli3.0开始了一番折腾

这里参考了[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)  基本思路不变
在src的文件里新建config 根据不同的环境去引用不同的配置文件，不同的是在根目录下有三个设置环境变量的文件
这里可以参考vue-admin-template

#### rem适配方案

还是那句话，用vw还是用rem，这是个问题？

选用rem的原因是因为vant直接给到了这个适配方案，个人也比较喜欢这个方案

[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)  
 

