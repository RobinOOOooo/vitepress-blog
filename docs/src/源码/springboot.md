SpringBoot源码构建

第一种方式：

1.首先进入GitHub官网，搜索spring相关项目，找到SpringBoot项目



2.然后点击进入SpringBoot项目按钮,进入源码页面：https://github.com/spring-projects/spring-boot



 3.选择一个合适的版本（最好不是最新的，因为比较不稳定）



 4.将其下载下来



 5.解压SpringBoot的压缩包到本地文件夹



 6.使用idea打开本地解压的文件



 7.耐心等待构建(时间会很长,大概两三个小时)，构建好后，自己新建一个module,按照正常的创建SpringBoot方式创建即可



自己的module创建好了即可



在创建好的项目中pom文件添加自己的SpringBoot依赖



 成功启动项目即可



 第二种方式：官网推荐

　　在解压完的文件右击git命令，输入

　　./mvnw clean install -DskipTests -Pfast 

　　编译完成后导入idea中，同时记得修改idea的maven仓库，因为它默认下载到maven的c盘默认仓库了。


-----------------------------------
Spring Boot源码解读与原理分析 PDF下载 springboot源码构建
https://blog.51cto.com/u_16099234/6547998