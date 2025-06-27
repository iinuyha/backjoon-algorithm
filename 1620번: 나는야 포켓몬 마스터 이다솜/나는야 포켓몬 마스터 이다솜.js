/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1620                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1620                           #+#        #+#      #+#    */
/*   Solved: 2025/06/27 23:36:26 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

// 방법 1️⃣
// ⏰ 시간복잡도 : O(N)

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [numOfPokemons, numOfQuestions] = input[0].split(" ").map(Number);
// const pokemons = input.slice(1, 1 + numOfPokemons); // ~부터 ~까지
// const questions = input.slice(
//   1 + numOfPokemons,
//   1 + numOfPokemons + numOfQuestions
// );

// questions.forEach((e) => {
//   if (isNaN(e)) {
//     // 이름 -> 번호
//     console.log(pokemons.indexOf(e) + 1);
//   } else {
//     // 번호 -> 이름
//     console.log(pokemons[Number(e) - 1]);
//   }
// });

// 방법 2️⃣
// ⏰ 시간복잡도 : O(1)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [numOfPokemons, numOfQuestions] = input[0].split(" ").map(Number);
const pokemons = input.slice(1, 1 + numOfPokemons);
const questions = input.slice(1 + numOfPokemons);

// 이름 -> 번호 Map 생성
const nameToNumber = new Map();
pokemons.forEach((name, index) => {
  nameToNumber.set(name, index + 1); // 번호는 1부터 시작
});

const result = [];

questions.forEach((q) => {
  if (isNaN(q)) {
    // 이름 → 번호
    result.push(nameToNumber.get(q));
  } else {
    // 번호 → 이름
    result.push(pokemons[Number(q) - 1]);
  }
});

console.log(result.join("\n"));
