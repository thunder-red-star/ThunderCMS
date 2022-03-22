# ThunderCMS Logger

This logger is a simple Error/Warn/Info/Debug logger, whose log level can be set in the config.

## Methods

### `debug(message)`

Sends a debug message to the console, which looks like `[DEBUG] message` and displays in blue.

### `info(message)`

Sends an info message to the console, which looks like `[INFO] message`.

### `warn(message)`

Sends a warning message to the console, which looks like `[WARN] message` and displays in orange.

### `error(message)`

Sends an error message to the console, which looks like `[ERROR] message` and displays in red. If the configuration option to exit on error is set to true, the application will exit with an error code 1 on any error message.

## Setting log level

To set the log level, set the `logs.logLevel` property in the config to one of the following:

- `debug`
- `info`
- `warn`
- `error`
  The program will display all messages with a level equal to or higher than the set log level.
