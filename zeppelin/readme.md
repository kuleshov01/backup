# Установка
1. Запускаем docker-compose.yml
1. Ждем завершения и ставим контейнер на паузу.
2. Последовательно выполняем следующие комманды ниже на свервере: 
scp /var/lib/docker/volumes/zeppelin_conf/_data kuleshov@clickhouse.tk-1.ru:/home/rsync/rsync_backup/zeppelin_conf
