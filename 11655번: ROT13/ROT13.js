/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11655                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11655                          #+#        #+#      #+#    */
/*   Solved: 2025/07/07 20:57:38 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const answer = input.map((e) => {
  return e
    .split("")
    .map((letter) => {
      if (isNaN(letter)) {
        if (upperCase.includes(letter)) {
          let index = (upperCase.indexOf(letter) + 13) % 26;
          return upperCase[index];
        } else if (lowerCase.includes(letter)) {
          let index = (lowerCase.indexOf(letter) + 13) % 26;
          return lowerCase[index];
        }
      } else {
        return letter;
      }
    })
    .join("");
});

console.log(answer.join(" "));
