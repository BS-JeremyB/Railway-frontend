FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod


# utiliser nginx pour servir l'application
FROM nginx:alpine
COPY --from=build /app/dist/music-app/browser /usr/share/nginx/html
EXPOSE 80

