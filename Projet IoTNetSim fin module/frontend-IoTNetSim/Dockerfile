FROM node:20.16.0-alpine as builder

EXPOSE 8080

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/iotnetsim /usr/share/nginx/html