# 100 Ways to Die

An exploration into zero-downtime node servers. The goal is to test the various ways a node server can die and figure out which node modules or techniques can help keep our servers up.

## API Endpoints

```http
GET /uncaught/sync  - throw an uncaught exception synchronously
GET /uncaught/async - throw an uncaught exception asynchronously
GET /process/exit   - call process.exit()
GET /               - check if the server is still running
```

## License

MIT
