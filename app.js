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
    {
      type: "list",
      name: "create_root",
      message: "html의 body 태그 자식으로 id가 root인 div를 생성하시겠습니까?",
      choices: ["네", "아니오"],
    },
    {
      type: "input",
      name: "p_tag_innertext",
      message: "body 태그 안의 p 태그 안에 들어갈 내용을 입력해주세요.",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "생성하시겠습니까?",
    },
  ])
  .then((answers) => {
    console.log("입력된 값:", answers);
    fs.writeFileSync(
      `${answers.fileName}.html`,
      htmlForm(answers.title, "<div id=#root></div>", answers.p_tag_innertext)
    );
  });
