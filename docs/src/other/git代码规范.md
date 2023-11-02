# git代码规范
## 分支命名
### master 分支
master 为主分支，也是用于部署生产环境的分支，需要确保master分支稳定性。master 分支一般由 release 以及 hotfix 分支合并，任何时间都不能直接修改代码。

### develop 分支
develop 为开发环境分支，始终保持最新完成以及bug修复后的代码，用于前后端联调。一般开发的新功能时，feature分支都是基于develop分支创建的。

### feature 分支
开发新功能时，以develop为基础创建feature分支。

分支命名时以 feature/ 开头，后面可以加上开发的功能模块， 命名示例：feature/user_module、feature/cart_module

### test分支
test为测试环境分支，外部用户无法访问，专门给测试人员使用，版本相对稳定。

### release分支
release 为预上线分支（预发布分支），UAT测试阶段使用。一般由 test 或 hotfix 分支合并，不建议直接在 release 分支上直接修改代码。

### hotfix分支
线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支。修复完成后，需要合并到 master 分支和 develop 分支。

分支命名以hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似。

## 分支与环境对应关系
在系统开发过程中常用的环境：

- DEV 环境（Development environment）：用于开发者调试使用
- FAT环境（Feature Acceptance Test environment）：功能验收测试环境，用于测试环境下的软件测试者测试使用
- UAT环境 （User Acceptance Test environment）：用户验收测试环境，用于生产环境下的软件测试者测试使用
- PRO 环境（Production environment）：生产环境
对应关系：

|分支	 |功能	                  	 | 环境	| 可访问|
|  ----  | ---- |  ----  | ----  |
|master  |	主分支，稳定版本		 |	PRO |	  是|
|develop |	开发分支，最新版本		 |	DEV	|     是|
|feature |	开发分支，实现新特性	 | 		|	  否|
|test	 |  测试分支，功能测试		 |	FAT	|     是|
|release |	预上线分支，发布新版本	 |	UAT	|     是|
|hotfix	 |  紧急修复分支，修复线上bug|		|     否|

### 分支合并流程规范
业界常见的两大主分支（master、develop）、三个辅助分支（feature、release、hotfix）的生命周期：

<img src="/git/git代码规范1.png"/>

以上生命周期仅作参考，不同开发团队可能有不同的规范，可自行灵活定义。

例如我们团队在开发时，至少需要保证以下流程：

- develop 分支和 hotfix 分支，必须从 master 分支检出
- 由 develop 分支合并到 test 分支
- 功能测试无误后，由 test 分支合并到 release 分支
- UAT测试通过后，由 release 分支合并到 master分支
- 对于工作量小的功能开发（工时小于1天），可以直接在devolop 分支进行开发，否则由 develop 分支检出 feature 分支进行开发，开发完后合并到develop 分支

## Git Commit Message规范
Git commit message规范指提交代码时编写的规范注释，编写良好的Commit messages可以达到3个重要的目的：

- 加快代码review的流程
- 帮助我们编写良好的版本发布日志
- 让之后的维护者了解代码里出现特定变化和feature被添加的原因

### Angular Git Commit Guidelines
业界应用的比较广泛的是Angular Git Commit Guidelines：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
- type：提交类型
- scope：可选项，本次 commit 波及的范围
- subject：简明扼要的阐述下本次 commit 的主旨，在Angular Git Commit Guidelines中强调了三点。使用祈使句，首字母不要大写，结尾无需添加标点
- body: 同样使用祈使句，在主体内容中我们需要把本次 commit 详细的描述一下，比如此次变更的动机
- footer: 描述下与之关联的 issue 或 break change

### 简易版
项目中实际可以采用简易版规范
```
<type>(<scope>):<subject>
```

### type规范
Angular Git Commit Guidelines中推荐的type类型如下：
- feat: 新增功能
- fix: 修复bug
- docs: 仅文档更改
- style: 不影响代码含义的更改（空白、格式设置、缺失 分号等）
- refactor: 既不修复bug也不添加特性的代码更改
- perf: 改进性能的代码更改
- test: 添加缺少的测试或更正现有测试
- chore: 对构建过程或辅助工具和库（如文档）的更改

除此之外，还有一些常用的类型：
- delete：删除功能或文件
- modify：修改功能
- build：改变构建流程，新增依赖库、工具等（例如webpack、gulp、npm修改）
- test：测试用例的新增、修改
- ci：自动化流程配置修改
- revert：回滚到上一个版本

### 单次提交注意事项
- 提交问题必须为同一类别
- 提交问题不要超过3个
- 提交的commit发现不符合规范，git commit --amend -m "新的提交信息"或 git reset --hard HEAD 重新提交一次

## 配置.gitignore文件
.gitignore是一份用于忽略不必提交的文件的列表，项目中可以根据实际需求统一.gitignore文件，减少不必要的文件提交和冲突，净化代码库环境。

通用文件示例：
```
HELP.md
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/

# Log file
*.log
/logs*

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.ear
*.zip
*.tar.gz
*.rar
*.cmd
```

## 其他
此外，还有一些其他建议：
- master 分支的每一次更新，都建议打 tag 添加标签，通常为对应版本号，便于管理
- feature分支、hotfix分支在合并后可以删除，避免分支过多管理混乱
- 每次 pull 代码前，提交本地代码到本地库中，否则可能回出现合并代码出错，导致代码丢失

# 99%的时间里使用的14个git命令
Java后端技术 2023-10-30 09:19 发表于浙江
往期热门文章：

1、通过 Arthas Trace 命令将接口性能优化十倍

2、公司用了 3 年多的多账号统一登录方案，万能通用，稳的一批！

3、用了这些IDEA插件以后，我写代码快了10倍！

4、字节一面：post 为什么会发送两次请求？被问懵了…

5、编写 if 时尽量不要带 else

链接：https://www.linkinstars.com


学习14个Git命令，因为你将会在99%的时间里使用它们
https://mmbiz.qpic.cn/sz_mmbiz_jpg/icRxcMBeJfc9YcolZHuvQu2zQRf1acD1QsicA1SSJUkH5PrHuEj9xRGvmtEmdtouBDjeiaRDNAv3p7heZBbmhDricA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1
图片

必须了解的命令整理
1，git init
初始化一个新的Git仓库。
这将在当前目录中创建一个名为".git"的子目录，Git会将所有仓库的元数据存储在其中。
2，git clone
克隆一个已存在的仓库。
这会创建一个本地仓库的副本，包括其所有的历史记录和分支。
git clone <仓库链接>
3，git add
将修改内容添加到下一次提交中。
这将把指定的文件添加到暂存区，这些文件将包含在下一次提交中。
git add file1.txt file2.txt
4，git commit
创建一个新的提交。
这将记录暂存区的修改以及自上次提交以来所做的任何其他修改，并附带一条描述这些修改的提交信息。
git commit -m "添加新功能"
5，git push
将提交推送到远程仓库。
这将把本地的提交发送到指定的远程仓库，更新远程分支以包含新的提交。
git push origin main
6，git pull
从远程仓库获取并合并修改。
这会从指定的远程仓库中获取最新的提交，并将其合并到当前分支中。
git pull origin main
8，git branch
列出、创建或删除分支。
这个命令可以用来列出仓库中可用的分支，创建新的分支或删除现有的分支。
git branch new-branch
9，git checkout
切换到不同的分支。
这个命令允许你切换到仓库中的不同分支，并将其作为当前工作分支。
git checkout main
10，git merge
将一个分支合并到另一个分支。
这个命令将一个分支的修改合并到另一个分支中，创建一个反映合并变化的新提交。
git merge new-branch
11，git status
显示仓库的状态。
这个命令会显示当前分支、任何暂存或未暂存的修改以及任何未跟踪的文件。
git status
12，git rebase
将一个分支的修改合并到另一个分支。
假设你在"XYZ"分支上进行了一些修改，你希望将这些修改合并到"main"分支中。你可以使用git rebase命令将你的修改重新应用到main分支之上。
13，git stash
临时保存还未准备提交的修改。
如果你的修改还没有准备好提交，但你想要切换到另一个分支继续工作，你可以临时保存你的修改以便以后使用，并在不丢失进度的情况下切换分支。
14，git revert
假设你在之前的提交中犯了一个错误，需要撤销它。你可以使用git revert创建一个新的提交，该提交会撤销之前提交引入的修改。
git revert <commit1>..<commit2>
学习这些14个Git命令，它们是你在日常开发中使用频率最高的命令。
为你解释每个命令的作用
首先是git init，它用于初始化一个新的Git仓库。执行这个命令后，Git会在当前目录下创建一个名为".git"的子目录，其中存储着仓库的所有元数据。
接下来是git clone，用于克隆一个已存在的仓库。执行这个命令后，你将在本地创建该仓库的一个副本，包括所有的历史记录和分支。
git add命令用于将修改的文件添加到下一次提交的暂存区。你可以指定要添加的文件git add命令用于将修改的文件添加到下一次提交的暂存区。你可以指定要添加的文件，例如git add file1.txt file2.txt。
git commit命令用于创建一个新的提交。它会记录暂存区的修改以及自上次提交以来的其他修改，并附带一条描述这些修改的提交信息，例如git commit -m "添加新功能"。
git push命令用于将提交推送到远程仓库。它会将本地的提交发送到指定的远程仓库，更新远程分支以包含新的提交，例如git push origin main。
git pull命令用于从远程仓库获取并合并修改。它会从指定的远程仓库获取最新的提交，并将其合并到当前分支中，例如git pull origin main。
git branch命令用于列出、创建或删除分支。你可以使用这个命令列出仓库中可用的分支、创建新的分支或删除现有的分支，例如git branch new-branch。
git checkout命令用于切换到不同的分支。你可以使用这个命令切换到仓库中的不同分支，并将其作为当前工作分支，例如git checkout main。
git merge命令用于将一个分支合并到另一个分支。它将一个分支的修改合并到另一个分支中，创建一个新的提交反映合并的变化，例如git merge new-branch。
git status命令用于显示仓库的状态。它会显示当前分支、任何暂存或未暂存的修改以及任何未跟踪的文件，例如git status。
git rebase命令用于将一个分支的修改合并到另一个分支。假设你在"XYZ"分支上进行了一些修改，你可以使用git rebase命令将这些修改重新应用到"main"分支之上。
git stash命令用于临时保存还未准备提交的修改。如果你的修改还没有准备好提交，但你想要切换到另一个分支继续工作，你可以使用git stash命令将修改暂存起来，以便以后使用。
git revert命令用于撤销之前的提交。如果你在之前的提交中犯了一个错误，你可以使用git revert命令创建一个新的提交，撤销之前提交引入的修改。
这些命令是Git中最常用的命令，掌握它们将大大提升你的开发效率。希望这个简要的指南对你有所帮助！
了解更多使用命令行技巧
我日常会通过shell脚本把需要用到的git命令进行封装整合成自己习惯的分析场景，比如我要进行git仓库代码提交分析，我会写这样一个脚本。
https://mmbiz.qpic.cn/sz_mmbiz_jpg/icRxcMBeJfc9YcolZHuvQu2zQRf1acD1QmsXv03Z512Kf336HPhRDmt8mPiaQ7EoCkGcSedibNqTqlpwdYbKAL7UA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1
图片

将上述代码保存为一个Shell脚本文件（例如git_analysis.sh），并确保该文件具有可执行权限。然后在命令行中运行该脚本，它将显示总提交数量、分支列表和每个分支的最新提交。