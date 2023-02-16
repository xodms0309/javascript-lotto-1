import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({
  input,
  output,
});

const Console = {
  readLine(query) {
    return rl.question(query);
  },
  print(message) {
    console.log(message);
  },
  close() {
    rl.close();
  },
};

export default Console;