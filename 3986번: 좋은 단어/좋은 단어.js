/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 3986                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/3986                           #+#        #+#      #+#    */
/*   Solved: 2025/07/04 23:36:09 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const lines = input.slice(1, 1 + input[0]);
let goodWord = 0;

lines.forEach((word) => {
  let letters = word.split("");
  let stack = []; // 스택 사용
  letters.forEach((letter) => {
    // 스택의 마지막 글자와 현재 글자가 동일하면 스택에서 제거
    if (letter === stack.at(-1)) stack.pop();
    // 스택의 마지막 글자와 현재 글자가 동일지 않으면 현재 글자를 스택에 푸쉬
    else stack.push(letter);
  });

  if (stack.length === 0) goodWord++;
});

console.log(goodWord);
