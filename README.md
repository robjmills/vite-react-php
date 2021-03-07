# POC for Vite and React with a PHP Backend

This uses the React/TS from the basic Vite starter for the `react-ts` template
```sh
npm init @vitejs/app vite-react-php -- --template react-ts
```

The PHP backend borrows heavily from the work done here [andrefelipe/vite-php-setup](https://github.com/andrefelipe/vite-php-setup). I wanted to further that work to testing how it would work in docker and to those ends i've created a simple 3 container setup with an NGINX vhost, A PHP rendered template, and Vite built React.

### Notes

The `react-refresh` plugin appears unusable currently due to [this issue](https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201)
