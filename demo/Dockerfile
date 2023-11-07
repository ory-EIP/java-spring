FROM gradle:7.2.0-jdk17
LABEL authors="kimjemin"
RUN apt-get update -y
RUN apt-get install -y binutils

WORKDIR /app

COPY . .

RUN ./gradlew build -i --stacktrace
RUN ./gradlew jlink -i --stacktrace

# lightweight image
FROM debian:stretch-slim

COPY --from=builder /app/app/build/image /app

ENTRYPOINT /app/bin/app