/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1940                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1940                           #+#        #+#      #+#    */
/*   Solved: 2025/06/29 20:22:51 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const m = parseInt(input[1]);
const materials = input[2].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (materials[i] + materials[j] === m) {
      answer++;
    }
  }
}

console.log(answer);
