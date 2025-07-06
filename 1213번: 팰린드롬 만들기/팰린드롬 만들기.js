/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1213                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1213                           #+#        #+#      #+#    */
/*   Solved: 2025/07/05 23:29:27 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").sort();

let letterMap = new Map();

// 문자 개수 세서 letterMap 만들기
input.forEach((e) => {
  letterMap.set(e, (letterMap.get(e) || 0) + 1);
});

let numberOfOdd = 0; // 홀수개인 문자의 개수
let centerChar = null; // 센터가 될 문자(홀수개인 문자가 있다면)

// 홀수개수인 문자 파악
// ⚠️ Map의 forEach는 (value, key) 순서로 전달되니까 키(= count)에 바로 접근하기
letterMap.forEach((value, key) => {
  if (value % 2 === 1) {
    numberOfOdd += 1;
    centerChar = key;
  }
});

if (numberOfOdd > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  let half = []; // 절반만 저장하는 배열

  // 절반만큼씩 저장
  letterMap.forEach((value, key) => {
    half.push(...Array(Math.floor(value / 2)).fill(key)); // ["A", "A"]를 그냥 넣으면 배열 안에 배열이 생기니까, 전개 연산자로 하나하나 분리해서 push하기
  });

  // 정답 조립
  const firstHalf = half.join(""); // 앞부분 문자로
  const secondHalf = [...half].reverse().join(""); // 앞부분을 반대로 돌려서 문자로
  const middle = centerChar ? centerChar : ""; // 센터 문자

  console.log(firstHalf + middle + secondHalf);
}
