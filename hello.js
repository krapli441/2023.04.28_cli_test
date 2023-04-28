#!/usr/bin/env node
import { program } from "commander";

program
  .version("0.1.0")
  .description('A simple CLI tool that prints "Hello, World!"')
  .parse(process.argv);

console.log("Hello, World!");
