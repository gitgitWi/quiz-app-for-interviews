# Quiz App for Front-end Interview

배포 :

---

## 기획의도

프론트엔드 면접 공부와 React 연습,
1타2피를 위해 만들었습니다.

### UI 기획

[👉 Figma](https://www.figma.com/file/eKPGMPQ773vPFDpergDvVc/Untitled?node-id=0%3A3) 활용

<p align="center">
  <img src="https://i.imgur.com/3cOWog9.png" alter="UI v0.1 from Imgur" >
UI ver 0.1
</p>

---

### 기능 구성

UI

- [ ] 모바일 위주 UI 구성; 어디에서든 편하게 볼 수 있도록
- [ ] 한번에 한문제에만 집중할 수 있도록 구성
  - [ ] 이전, 이후 문제는 dimm 처리
- reference
  - [나랑 맞는 실리콘밸리 기업 찾기 :star::star::star:](https://hellosiliconvalley.me/who-are-you)
  - [과일 MBTI :star::star:](http://devdory.com/entertainment/fruit_mbti/)
  - [16 personalities MBTI :star:](https://www.16personalities.com/free-personality-test)

문제 풀기

- [ ] 연습할 문제 갯수 지정
- [ ] 랜덤 순서로 문제 출제
- [ ] ContextAPI 에 저장해 정답과 비교 가능 기능

문제 은행 관리

- [ ] firebase와 연동해 문제 불러오기 및 추가
- [ ] 문제 추가 페이지는 PC에서만 가능하도록
- [ ] FE, DB, CS 관련 유형별 문제 관리

---

## 기술 스택

- TypeScript, JavaScript
- Next.js (React)
- Firestore
