FROM node:14

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# RUN cd /usr/src/app
RUN npm install

# EXPOSE 8080
CMD [ "npx", "vite" ]