/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9996                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9996                           #+#        #+#      #+#    */
/*   Solved: 2025/06/26 22:21:18 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [prefix, suffix] = input[1].split("*");
const fileList = input.splice(2);

fileList.forEach((file) => {
  if (
    file.length >= prefix.length + suffix.length &&
    file.startsWith(prefix) &&
    file.endsWith(suffix)
  ) {
    console.log("DA");
  } else {
    console.log("NE");
  }
});
