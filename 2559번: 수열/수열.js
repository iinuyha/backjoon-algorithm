/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2559                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2559                           #+#        #+#      #+#    */
/*   Solved: 2025/06/26 22:33:36 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

// 방법 1️⃣
// ⏰ 시간복잡도 : O(N * K)

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [totalDays, sequence] = input[0].split(" ").map(Number);
// const tempList = input[1].split(" ").map(Number);
// let sumOfTemp = new Array(totalDays - sequence + 1).fill(0);

// for (let i = 0; i < totalDays - sequence + 1; i++) {
//   for (let j = 0; j < sequence; j++) {
//     sumOfTemp[i] += tempList[i + j];
//   }
// }

// console.log(Math.max(...sumOfTemp));

// 방법 2️⃣
// ⏰ 시간복잡도 : O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [totalDays, sequence] = input[0].split(" ").map(Number);
const tempList = input[1].split(" ").map(Number);

// 초기 윈도우 합 계산
let windowSum = 0;
for (let i = 0; i < sequence; i++) {
  windowSum += tempList[i];
}

let maxSum = windowSum;

// 슬라이딩 윈도우 시작
for (let i = sequence; i < totalDays; i++) {
  windowSum = windowSum - tempList[i - sequence] + tempList[i];
  maxSum = Math.max(maxSum, windowSum); // 그냥 max를 발견할 때마다 maxSum을 업데이트 하는 느낌
}

console.log(maxSum);
