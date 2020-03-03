FROM mhart/alpine-node:12
ARG APP_ROOT=/opt/app-root/src
ENV NO_UPDATE_NOTIFIER=true
WORKDIR ${APP_ROOT}
COPY . .
RUN npm install && npm run build
EXPOSE 8080
CMD ["npm", "run", "serve"]
