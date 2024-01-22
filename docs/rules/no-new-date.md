# marco (`no-new-date`)

## Rule Details

new Date() 사용을 금지하는 규칙입니다.
new Date()는 클라이언트에서 실행 시 해당 기기의 시간에 의존적이라 정확하지 않습니다. 
현재 시간이 필요하다면 ServerDate()를 사용해 주세요.

Examples of **incorrect** code for this rule:

```js

new Date();

```

Examples of **correct** code for this rule:

```js

new Date('2023-03-03');

ServerDate();

```

## When Not To Use It

클라이언트에서 실행 시 해당 기기의 시간에 의존해도 괜찮다면, new Date()를 사용해도 괜찮습니다.
