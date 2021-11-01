# day 1

### debugging이란

디버깅(debugging)은 스크립트 내 에러를 검출해 제거하는 일련의 과정을 의미합니다.

### breakpoints란

- 자바스크립트의 실행이 중단되는 코드 내 지점
  실행이 중지된 시점에 변수가 어떤 값을 담고 있는지 알 수 있으며 실행이 중지된 시점을 기준으로 명령어를 실행할 수도 있습니다.

debugger; <- 스크립트 내에 해당 명령어를 적고 실행하면 해당 명령어까지만 실행이 됨

### watch사용법 - shows current values for any expressions.

- 표현식을 평가하고 결과를 보여줍니다.

- 우선 sources 패널을 열어서 확인합니다.(브라우저 -> F12 -> sources)
- sources 판넬에서 watch란을 확인합니다.
  우측에 +버튼을 클릭해 원하는 표현식을 입력 후 엔터를 누르면 값을 보여줍니다.
  입력한 표현식은 실행 과정 중에 계속해서 재계산됩니다.

### call stack 의 의미 - shows the nested calls chain.

- 해당 breakpoint에서 실행경로를 역순으로 표시합니다.

### Step over / Step into/ Step out

- step(F9) : run the next statement.
  다음 문을 실행합니다. 클릭하면 alert 창이 뜹니다.

- step over(F10) : run the next command, but don’t go into a function

'Step’은 함수 내부로 들어가 함수 본문 첫 번째 줄에서 실행을 멈춥니다. 반면 'Step over’는 보이지 않는 곳에서 중첩 함수를 실행하긴 하지만 함수 내로 진입하지 않습니다.

실행은 함수 실행이 끝난 후에 즉시 멈춥니다.
'Step over’은 함수 호출 시 내부에서 어떤 일이 일어나는지 궁금하지 않을 때 유용합니다.

- step into(F11)
  'Step’은 setTimeout(함수 호출 스케줄링에 쓰이는 내장 메서드)같은 비동기 동작은 무시합니다.
  반면 'Step into’는 비동기 동작을 담당하는 코드로 진입하고, 필요하다면 비동기 동작이 완료될 때까지 대기합니다.

-step out(Shift+F11) : continue the execution till the end of the current function
현재 실행 중인 함수의 실행을 계속 이어가다가 함수 본문 마지막 줄에서 실행을 멈춥니다.
