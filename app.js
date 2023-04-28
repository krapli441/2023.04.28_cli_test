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
      message:
        "생성할 html 파일의 이름을 입력해주세요. (.html은 넣지 않으셔도 됩니다)",
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
    console.log(
      "파일이 생성되었습니다. result 폴더를 확인해 주세요. 다음은 입력하신 값입니다:",
      answers
    );
    let rootHtml = "";
    if (answers.create_root === "네") {
      rootHtml = `<div id="root"></div>`;
    } else {
      rootHtml = "";
    }

    fs.writeFileSync(
      `./result/${answers.fileName}.html`,
      htmlForm(answers.title, rootHtml, answers.p_tag_innertext)
    );
  });
