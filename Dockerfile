FROM node:12-alpine AS dep
WORKDIR /app
COPY . .

FROM dep AS dev
ENV PARCEL_WORKERS=1
EXPOSE 3000
EXPOSE 10000
CMD [ "tail", "-f", "/dev/null" ]