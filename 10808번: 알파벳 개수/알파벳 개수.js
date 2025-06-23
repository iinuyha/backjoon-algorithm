/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10808                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10808                          #+#        #+#      #+#    */
/*   Solved: 2025/06/23 09:35:27 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString();

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetList = alphabet.split("");

// (문자열에서 특정 문자가 포함된 개수) = (특정 문자로 split한 배열의 원소 개수) - 1
const charCounts = alphabetList.map((e) => word.split(e).length - 1);

console.log(charCounts.join(" "));
