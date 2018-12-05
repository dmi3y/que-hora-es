FROM circleci/node:10.13.0

USER root
RUN apt-get update && apt-get install -y libsecret-1-dev

USER node
ENTRYPOINT [ "npm" ]