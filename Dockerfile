FROM nginx
ARG app_name
COPY $app_name/build /usr/share/nginx/html
COPY $app_name/default.conf /etc/nginx/conf.d/default.conf
COPY $app_name/.htpasswd /etc/nginx/.htpasswd