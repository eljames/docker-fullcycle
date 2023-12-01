import mysql2 from 'mysql2';
import express from 'express';
import { Command } from 'commander';
import { names, uniqueNamesGenerator } from 'unique-names-generator';

const options = initCommandOptions();

const dictionaryConfig = {
  dictionaries: [names, names],
  separator: ' ',
  length: 2,
};

// Atribuindo configuração para conectar ao MySQL
const connectionConfig = {
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const conn = mysql2.createConnection(connectionConfig);

const app = express();

app.get('/', async (req, res) => {
  try {
    const personName = uniqueNamesGenerator(dictionaryConfig); // big-donkey
    await conn.promise().execute('insert into people(name) values(?)', [personName]);
    res.send('<h1>Full Cycle Rocks.</h1><p>' + await getNames() + '</p>');
  } catch(e) {
    res.send("Server error");
    console.error("Error on request: " + e);
  }
});

async function getNames() {
  const [results, _] = await conn.promise().query('select name from people');
  let names = "";
  for(let i = 0; i < results.length; i++) {
    names = names + results[i]["name"] + "<br>";
  }
  return names;
}

app.listen(getPort(), () => {
  console.log('Server has been started at port ' + getPort());
});

function getPort() {
  return options.port;
}

function initCommandOptions() {
  const commander = new Command();
  commander.option('-p, --port <port>', 'Set the application port.', 3000);
  commander.parse();
  return commander.opts();
}