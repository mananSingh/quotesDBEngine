# quotesDBEngine
A quote browsing web app engine using jQuery Mobile &amp; JSON

### Features
The app has facilities of:
- random - browse - search - about

### Applications
Really basic at the moment, but can be transformed into:
- a Quotes-application. (like "Good Thoughts: see another repo")
- a 'life-terms-dictionary': different tags related to life. On each tag, some quotes defining/describing that tag, by famous personalities of all time.
- a custom-Quote-manager app for everyone
- etc.

### All you need to know to customize:

All data is managed in JSON files.
For each tag, there is a json file.
In each json file(with syntax error), there are: "header":"", "content":"" - pairs.
Eg(current): 
In a file named: "Tag1.json",
```
[{ "header":"Tag 1",
  "content": "Thought 1..."
},
{"header":"Tag 2",
  "content": "another thought here..."
}
]
```
Example: 
```
[{ "header":"Action",
  "content": "a thought here..."
},
{"header":"Action",
  "content": "another thought here..."
}
]
```
The header can be customized like this:
eg: 
```
"header":"life, einstein, success",
    "content":"..a quote here by einstein on life and success.."
```
where, "life" will be the main tag, and the file name.
& "einstein, success" to ease the searching (which is done by 'data-filter' of jquery)
in the .js file, for each json filename(actually the tag), there must be
exactly named string in the "tags" array. like this:
```
var tags = ["Action", "Life", "Success",...];
```

So, only these 2 things can be used to completely manipulate the whole engine:
- tags array in .js file, &
- the JSON files (filenames(=tags) & file contents)

Other than this, obviously, the UI design, needs to be managed.
Plus, any code improvement will be very very cool. (although, for basic use, no need)

### Note on Usage

Troubleshooting: The app will only work correctly when uploaded on a running server 
(e.g. apache, app engine, etc.). The reason is the CORS request won't work otherwise. 
And the CORS request is essential to fetch and use the .json files which this app uses.

### Further Possibilities of App

The jQuery mobile app can be ported to native .apk for android, etc. by
using PhoneGap Build, or other services.
