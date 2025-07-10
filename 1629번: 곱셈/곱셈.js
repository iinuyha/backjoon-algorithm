/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1629                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: dkgus731 <boj.kr/u/dkgus731>                +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1629                           #+#        #+#      #+#    */
/*   Solved: 2025/07/07 23:27:56 by dkgus731      ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt); // 숫자가 너무 커질 수 있으니 Number가 아니라 BigInt 사용

// ✅ 모듈러 연산의 분배법칙 : (A x B) % C = ((A % C) x (B % C)) % C

// ( A^B ) % C를 계산하는 함수
const mod = (A, B, C) => {
  // 지수인 B가 1인 경우, A % C 리턴
  if (B === BigInt(1)) {
    // BigInt는 Number와 비교 못하니까 Number인 1을 BigInt로 변환해서 비교하기
    return A % C;
  }

  // BigInt는 정수만을 표현하기떄문에 내림 연산이 필요 X (Math 라이브러리는 Number만 사용 가능)
  const half = mod(A, B / BigInt(2), C); // 지수를 절반으로 나눠서 계산한 나머지 값
  const result = (half * half) % C; // (A ^ B) % C 의 결과

  // B가 짝수면 result를 그대로 리턴
  // B가 홀수면 (half에서의 지수) + (half에서의 지수) = B-1 이니까 A를 한 번 더 곱해줘야 함
  return B % BigInt(2) === BigInt(0) ? result : (result * A) % C;
};

const answer = mod(a, b, c);
console.log(answer.toString());
