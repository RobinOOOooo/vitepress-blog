# systemctl
systemctl是一个用于控制systemd系统的命令，它允许你管理系统上运行的服务、检查服务的状态、启动和重启服务，以及查看服务的启动状态。以下是systemctl的一些常用命令：

启动服务：
systemctl start 服务名

停止服务：
systemctl stop 服务名

重启服务：
systemctl restart 服务名

查看服务是否已启动：
systemctl is-active 服务名

查看服务的状态：
systemctl status 服务名

启用开机自启动服务：
systemctl enable 服务名

停用开机自启动服务：
systemctl disable 服务名

查看服务是否为开机自启动：
systemctl is-enabled 服务名

只重启正在运行中的服务：
systemctl try-restart 服务名

显示所有的服务状态（空格翻页）：
systemctl list-units --type service --all q推出
