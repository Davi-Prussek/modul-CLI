#!/usr/bin/env node

import { cac } from "cac";

const cli = cac("create-modul");

cli
  .command("")
  .action(() => {
    console.log("Welcome to Modul-CLI!");
  });

cli.parse()