# ThunderCMS Configuration

It is useful to customize your CMS to your liking. We provide many configuration options, including port/hostname, database configuration, and more.

# Configuration Options

Each option is documented below. Options marked with an asterisk (\*) are required.
Not all options are available on all installations, and not all options are implemented yet!

## App

### `hostname`

The domain that you intend to use for your site. Default: `localhost`

### `port`

The port that you intend to use for your site. Default: `8080`

## Database

### `type`

The type of database you intend to use, should be one of `sqlite`, `json`, or `mongodb`. Default: `json`

### `filePath`

The path to the database file. Only used if `type` is `sqlite` or `json`. Default: `./cms/cms.json`

### `fileEncoding`

The encoding of the database file. Only used if `type` is `sqlite` or `json`. Default: `utf8`

## Logs

### `logLevel`

The level of logging you want to see. Should be one of `error`, `warn`, `info`, or `debug`. Default: `info`

### `filePath`

The path to the log file. Default: `./cms/latest.log`

### `fileEncoding`

The encoding of the log file. Default: `utf8`

### `exitOnError`

If `true`, the application will exit when an error is logged. Default: `true`

# Methods

## Config

### `get(key)`

Get a configuration value.

### `set(key, value)`

Set a configuration value.

### `loadConfigFile(filePath)`

Load a configuration file, providing an absolute or relative path.

### `reload()`

Reload the CMS to use the latest configuration.
