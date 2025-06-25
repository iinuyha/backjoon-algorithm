/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1159                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1159                           #+#        #+#      #+#    */
/*   Solved: 2025/06/25 23:47:30 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = Number(input[0]); // 선수 총 인원수
const players = input.splice(1); // 선수 명단

const countingStartLetter = {};

players.forEach((e) => {
  countingStartLetter[e[0]] = (countingStartLetter[e[0]] || 0) + 1;
});

let answer = "";

for (const key in countingStartLetter) {
  if (countingStartLetter[key] >= 5) {
    answer += key;
  }
}

console.log(answer === "" ? "PREDAJA" : answer.split("").sort().join(""));
