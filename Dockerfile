FROM node:9.7.0 AS build

WORKDIR /usr/src/
COPY package.json /usr/src/
RUN yarn install
COPY . /usr/src/
RUN yarn unit
RUN yarn lint
RUN yarn run build --production


FROM nginx:1.13.9-alpine
COPY --from=build /usr/src/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/dist /usr/share/nginx/html/
