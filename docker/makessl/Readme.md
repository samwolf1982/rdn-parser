
//ВАЖНО не играться стоит лимит на количество сертификатов или юзать не  --agree-tos

1) cd ssldemo       для демо игры
 docker-compose up --build

2)    потом в новой вкладке 
      меняем домен и емейл  и запускаем 
//demo game
sudo docker run -it --rm -v $(pwd)/ssl:/etc/letsencrypt  --volumes-from webservertmpdemo certbot/certbot certonly --webroot --webroot-path=/usr/share/nginx/html -d dev-web.bitbooster.win   --email  bitbooster@gmail.com  --agree-tos
3) останавливаем сервер  webservertmpdemo


2.1 ) повторить с папкой ssl для обычной игры
// prod game
sudo docker run -it --rm -v $(pwd)/ssl:/etc/letsencrypt  --volumes-from webservertmp certbot/certbot certonly --webroot --webroot-path=/usr/share/nginx/html -d dev-game.bitbooster.win   --email  bitbooster@gmail.com  --agree-tos

3) останавливаем сервер  webservertmp

4) при желание можно запускать по крону 0 0 12 * * * 



/////////////       для локалки
https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04
1) sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /mnt/4748aca0-aae0-4538-8ac5-f5705fac27bb/projects/vlad2/docker/makessl/localssl/ssl/localhost.key -out /mnt/4748aca0-aae0-4538-8ac5-f5705fac27bb/projects/vlad2/docker/makessl/localssl/ssl/localhost.crt

для common name записать домен сайта

2)  sudo openssl dhparam -out /mnt/4748aca0-aae0-4538-8ac5-f5705fac27bb/projects/vlad2/docker/makessl/localssl/ssl/localhost.pem 2048

