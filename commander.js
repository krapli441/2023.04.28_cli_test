#!/usr/bin/env node

import { Command } from "commander";
import { exec } from "child_process";

const program = new Command();

program
  .command("create-html")
  .description("Create HTML file")
  .action(() => {
    exec("node app.js", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  });

program.parse(process.argv);
