# How to use ?

First, import HighDB :

```js
const { Database } = require("highdb");
```

Next, create a new instance of `Database()` :

```js
var db = new Database();
```

Then, you can store, edit & remove any accessible data via the `{db}.data` property.

```js
// Get any object lenght...
var dbLength = Object.keys(db.data).length;

// Change data from object.
db.data[
  `msg${dbLength + 1}`
] = `Hello world! The Database actually contains ${dbLength} items.`;

// Write changes.
db.write();
```

Enjoy!

# LICENSE

```text
MIT License

Copyright (c) 2021 Paul BONCAR

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
