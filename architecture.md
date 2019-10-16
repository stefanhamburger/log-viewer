# Architecture

This web app reads a log file (in JSON format) and displays the contents in a table, with filters to help interpreting the data.

## Components

The following components are needed for a minimum viable product:

- The JSON file is read from a local file (`static/data/errors.json`).
- A table with the following columns:
  - `level`: The severity of this log entry. Ideally shown as a colored icon. Can be either "Notice" or "Debug".
  - `message`: A plaintext message describing this log entry.
  - `facility`: Can be either `GF::afml` or `GF::eai:eproduct`.
  - `timeStamp`: The date and time when this log entry was written, in the format `yyyy-mm-ddThh:mm:ss.sssZ`.
- Clicking on a column sorts the entries by this column. `level` is sorted numerically, `message` and `facility` are sorted lexically, `timeStamp` is sorted chronologically.
- Above the table, users can filter the results by severity, by facility and name.

Additional components might be added later:

- An input field for users to select local log files.
- A syntax check of the JSON file, with error messages displayed if format is incorrect.
- Grouping error messages by type, using a regular expression to find the most frequent error messages.
- Storing the current filter state in a URL, for sharing it with teammates.
