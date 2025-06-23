/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2309                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2309                           #+#        #+#      #+#    */
/*   Solved: 2025/06/22 23:30:43 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const heightsArr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 100에서 얼마나 초괴되었는지 (= 거짓말치고 있는 두 난쟁이의 합이 몇인지)
const overageFrom100 = heightsArr.reduce((acc, cur) => acc + cur) - 100;

// 외부 반복문에 "outer"이라는 명칭 지정
outer: for (let i = 0; i < heightsArr.length; i++) {
  for (let j = i + 1; j < heightsArr.length; j++) {
    // 두 난쟁이의 합이 overageFrom100과 동일하면 그 둘이 거짓말치고 있는거
    if (heightsArr[i] + heightsArr[j] === overageFrom100) {
      const [first, second] = [i, j].sort((a, b) => b - a);
      heightsArr.splice(first, 1);
      heightsArr.splice(second, 1);
      break outer; // 외부 반복문인 "outer"까지 빠져나가도록 하기
    }
  }
}

heightsArr.sort((a, b) => a - b);
heightsArr.forEach((e) => console.log(e));
