#!/usr/bin/env node
import { cac } from "cac";
import { init } from "./commands/init.js";

const cli = cac("create-modul");
cli.command("").action(() => {init();});

cli.parse()
