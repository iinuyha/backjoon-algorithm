/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10988                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10988                          #+#        #+#      #+#    */
/*   Solved: 2025/06/23 22:07:34 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim();

const isPalindrome = word === word.split("").reverse().join("");
console.log(isPalindrome ? 1 : 0);
