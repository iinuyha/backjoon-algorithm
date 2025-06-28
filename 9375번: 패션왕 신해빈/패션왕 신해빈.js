/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9375                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9375                           #+#        #+#      #+#    */
/*   Solved: 2025/06/27 23:58:02 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input[0]);
let line = 1;

// 문제 수만큼 반복
for (let i = 0; i < t; i++) {
  let n = Number(input[line++]);
  const map = {};

  // 옷 종류만큼 반복
  for (let j = 0; j < n; j++) {
    const [name, type] = input[line++].split(" ");
    map[type] = (map[type] || 0) + 1;
  }

  // 조합 계산: (종류1 + 1) * (종류2 + 1) * ... - 1
  let result = 1;
  for (const type in map) {
    result *= map[type] + 1;
  }
  console.log(result - 1);
}
