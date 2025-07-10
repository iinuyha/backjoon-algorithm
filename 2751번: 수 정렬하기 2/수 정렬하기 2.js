/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2751                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2751                           #+#        #+#      #+#    */
/*   Solved: 2025/07/10 22:20:53 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1)
  .sort((a, b) => a - b);

// 이렇게하면 시간초과 될 수 있으니까!!!!
// input.forEach((e) => console.log(e));

console.log(input.join("\n"));
