import { program } from "commander";

program
  .version("0.1.1.1.2.0.0.00.2.2.00.2.2.0")
  .description("asdasdasdasdasd")
  .command("hello", 'Prints "Hello, World!"');

program.parse(process.argv);

program.command("hello");
