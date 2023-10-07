FROM node:18

RUN apt-get update \
  && apt-get -y install \
  --no-install-recommends --no-install-suggests \
  git-all \
  telnet \
  iproute2 \
  net-tools \
  iputils-ping \
  sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && adduser node sudo

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN npm -g install npm@latest
