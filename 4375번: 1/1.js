/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4375                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4375                           #+#        #+#      #+#    */
/*   Solved: 2025/07/10 21:03:27 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputList = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputList.forEach((e) => {
  let remainder = 1 % e; // 처음 나머지
  let length = 1; // 몇자리수인지 (length = 1이면 1, 2이면 11, 3이면 111, ...)

  while (remainder !== 0) {
    remainder = (remainder * 10 + 1) % e;
    length++;
  }

  console.log(length);
});
