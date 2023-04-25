const fs = require("fs");
const chalk = require("chalk");

const { toCamelCase, errorLog, warningLog, successLog, infoLog } = require("./helpers");

module.exports = (name) => {
  fs.mkdir(name, (err) => {
    if (err && err.code !== "EEXIST") {
      errorLog(err.message);
    } else {
      if (err && err.code === "EEXIST") warningLog(err.message);
      else successLog(`Directory '${chalk.italic(name)}' created.`);

      const componentName = name.slice(name.lastIndexOf("/") + 1);

      const indexFile = `${name}/index.ts`;
      const componentFile = `${name}/${componentName}.tsx`;
      const propsInterfaceFile = `${name}/I${componentName}Props.ts`;
      const stylesFile = `${name}/${componentName}.module.css`;
      // const styleDeclarationsFile = `${name}/${componentName}.module.scss.ts`;

      fs.appendFile(indexFile, index(componentName), (err) => {
        if (err) errorLog(err.message);
        else successLog(`'${componentFile}' created.`);
      });
      fs.appendFile(componentFile, component(componentName), (err) => {
        if (err) errorLog(err.message);
        else successLog(`'${componentFile}' created.`);
      });
      fs.appendFile(propsInterfaceFile, propsInterface(componentName), (err) => {
        if (err) errorLog(err.message);
        else successLog(`'${propsInterfaceFile}' created.`);
      });
      fs.appendFile(stylesFile, styles(componentName), (err) => {
        if (err) {
          errorLog(err.message);
        } else {
          successLog(`'${stylesFile}' created.`);
          // fs.appendFile(styleDeclarationsFile, styleDeclarations(componentName), (err) => {})
        }
      });
    }
  });
};

const index = (componentName) => `export { default } from './${componentName}';

`;

const component = (componentName) =>
  `import { FC } from 'react';

import { I${componentName}Props } from './I${componentName}Props';
import styles from './${componentName}.module.css';

const ${componentName}: FC = (props:I${componentName}Props) => {
  return (
    <div className={\`\${styles.${toCamelCase(componentName)}}\`}>
      <h3>${componentName} Stateless Component!</h3>
    </div>
  );
};

export default ${componentName};

`;

const propsInterface = (componentName) =>
  `export interface I${componentName}Props {}

`;

const styles = (componentName) =>
  `.${toCamelCase(componentName)} {
  display: block;
}

`;
