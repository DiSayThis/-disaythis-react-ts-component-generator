#! /usr/bin/env node

const program = require("commander");
// const generateReactClassComponent = require("./generateReactClassComponent");
const generateReactStatelessComponentScss = require("./generateReactStatelessComponentScss");
const generateReactStatelessComponentCss = require("./generateReactStatelessComponentCss");
// const generateReactContainerComponent = require("./generateReactContainerComponent");

program.version("0.0.1", "-v, --version").description("Typescript based react component generator cli");
program
  .command("cssStatelessComponent <componentName>")
  .alias("css")
  .description("Generate a stateless component with css modules")
  .action((componentName) => {
    generateReactStatelessComponentCss(componentName);
  });

program
  .command("statelessComponent <componentName>")
  .alias("scss")
  .description("Generate a stateless component")
  .action((componentName) => {
    generateReactStatelessComponentScss(componentName);
  });
// program
//   .command("classComponent <componentName>")
//   .alias("c")
//   .description("Generate a class component")
//   .action((componentName) => {
//     generateReactClassComponent(componentName);
//   });

// program
//   .command("containerComponent <componentName>")
//   .alias("r")
//   .description("Generate a redux container component")
//   .action((componentName) => {
//     generateReactContainerComponent(componentName);
//   });

program.description("Generate a stateless component with css modules").action((componentName) => {
  generateReactStatelessComponentScss(componentName);
});
program.parse(process.argv);
