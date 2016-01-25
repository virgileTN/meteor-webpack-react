FROM node:4.2.4-slim
# Install Meteor
RUN curl https://install.meteor.com/ |sh
COPY . /app
WORKDIR /app
USER root
RUN npm install
ENV PORT 3000
