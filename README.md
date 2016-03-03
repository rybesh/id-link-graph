(To run this you need to have [Node.js](https://nodejs.org) and its package manager [npm](https://www.npmjs.com) installed.)

To run:

1. Install the required libraries. In the `id-link-graph` directory:
    ```
    $ npm install
    ```
1. Run the development server:
    ```
    $ npm run serve
    ```
1. After a bit you should see the message `Server running at...` Now you can
   point a web browser to [http://localhost:9966](http://localhost:9966) and
   view.


The information about identifier links is taken from [`data/links.json`](data/links.json), which was generated from the two CSV files in the [`data`](data) directory using the [`links2graph.py`](links2graph.py) script:
```
$ ./links2graph.py data/groups.csv data/id_links.csv > data/links.json
```

