import inquirer from "inquirer";
import { program } from "commander";
import fs from "fs";

program.version("0.1.0v");
program.description("commander 실행 테스트");
program.parse(process.argv);

function htmlForm(title, root, innerText) {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    ${root}
    <p>${innerText}</p>
  </body>
  </html>`;

  return html;
}

inquirer
  .prompt([
    {
      type: "input",
      name: "fileName",
      message: "생성할 html 파일의 이름을 입력해주세요.",
    },
    {
      type: "input",
      name: "title",
      message: "html 파일 내의 title 정보를 입력해주세요.",
    },
  ])
  .then((answers) => {
    console.log("입력된 값:", answers);
    fs.writeFileSync(`${answers.fileName}.html`, htmlForm(answers.title));
  });

console.log(title);
