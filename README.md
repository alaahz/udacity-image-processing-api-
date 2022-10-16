
# Image Processing API
Image Processing API is used to resize and saves
images. The user visits the URL and enters the image name, height, and width. This query will send to serve to resize the image and send the image resized to the user.

This project of udacity Nanodegree program [Full Stack JavaScript Developer](https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067?utm_campaign=12908932988_c_individuals&utm_keyword=%2Budacity%20%2Bjavascript%20%2Bfull%20%2Bstack_b&utm_medium=ads_r&utm_source=gsem_brand&utm_term=124509200071)

## Pages

#### Home Page

```http
 http://localhost:3000/
```

#### Resize Image

```http
  http://localhost:3000/api/images?filename=fjord&height=500&width=500
```

| Parameter | value                       |
| :-------- | :-------------------------------- |
| `filename`| Image name [encenadaport , fjord, icelandwaterfall , palmtunnel or santamonica] |
| `height`  | Image height for resizing, the value must not be <= 0 |
| `width`   | Image width for resizing, the value must not be <= 0 |

#### Page Not Found

```http
 http://localhost:3000/test
```



## Scripts

To install node_modules that downloade 
all packages from npm in your computer for the JavaScript project that you have

```bash
  npm install
```
To compile TypeScript to JavaScript and create build folder contains JavaScript files.

```bash
  npm run build
```

To lint the code before running your tests.
```bash
  npm run lint
```
Check that all files match prettier code style.
```bash
  npm run prettier
```
To run the unit tests with Jasmine and SuperTest
```bash
 npm run test
```
Start the server
```bash
 npm run start
```


## Note
There are two middlewares which are validator and checkThumb.

**validator**: used to check if file name is existing in fall folder and the user enter the height and width.

**checkThumb**: used to check if file name is existing in thumbnail.

**resizeImage module**: used to resize the image and save it in the thumbnail folder


## References

 - [fs.readFile()](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback)
 - [fs.access()](https://nodejs.org/api/fs.html#fsaccesspath-mode-callback)
 - [sharp](https://www.npmjs.com/package/sharp)
 - [image size](https://www.npmjs.com/package/image-size?activeTab=readme)

