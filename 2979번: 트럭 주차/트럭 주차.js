/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2979                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2979                           #+#        #+#      #+#    */
/*   Solved: 2025/07/03 23:19:23 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C] = input[0].split(" ").map(Number); // 요금을 각각 A, B, C에 담기
const parkingTime = input.slice(1).map((e) => e.split(" ").map(Number));

let timeCount = new Array(101).fill(0);

parkingTime.forEach(([inTime, outTime]) => {
  for (let i = inTime; i < outTime; i++) {
    timeCount[i]++;
  }
});

let total = 0;

timeCount.forEach((count) => {
  if (count === 1) total += A * count;
  else if (count === 2) total += B * count;
  else if (count === 3) total += C * count;
});

console.log(total);
