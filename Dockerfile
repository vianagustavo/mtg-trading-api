FROM node:14


WORKDIR /usr/app

COPY . ./

RUN yarn --frozen-lockfile

RUN yarn build

EXPOSE 7777

CMD ["yarn", "start"]