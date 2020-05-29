// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mama-cookies-db.sqlite3'
    },
    useNullAsDefault: true
  }
};
