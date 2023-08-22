#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build


# 进入生成的文件夹

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'add'

git push -f git@github.com:RobinOOOooo/vitepress-blog.git master:github-pages
# git push -f git@github.com:你的git名/你的git项目名.git 本地分支:远程分支

# 解决git@github.com: Permission denied (publickey). fatal: Could not read from remote repository.
# https://www.cnblogs.com/maples922/p/16328698.html
# Permission denied (publickey) 没有权限的publickey ，出现这错误一般是以下两种原因：客户端与服务端未生成 ssh key，客户端与服务端的ssh key不匹配，重新生成key，配置到github中即可
