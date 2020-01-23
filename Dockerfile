# Stage 1, build frontend
FROM node:13-alpine as build-frontend

WORKDIR /app

COPY ./frontend /app
RUN npm install --silent && npm run build

# Stage 2, build backend
FROM openjdk:8-jdk-alpine as build-backend

WORKDIR /app

COPY ./backend /app
COPY --from=build-frontend /app/build/* /app/src/main/resources/static/

RUN /app/gradlew build --no-daemon

# Stage 3, copy files & run
FROM openjdk:8-jdk-alpine

WORKDIR /app

COPY --from=build-backend /app/build/libs/* /app/

ENTRYPOINT ["java", "-jar", "/app/dupa-0.0.1-SNAPSHOT.jar"]
