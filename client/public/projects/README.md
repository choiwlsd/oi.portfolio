# 프로젝트 PDF 넣는 방법

프로젝트 ID와 같은 이름의 폴더를 만들고 PDF를 아래 이름으로 넣습니다.

```text
client/public/projects/{프로젝트ID}/presentation.pdf
client/public/projects/{프로젝트ID}/report.pdf
```

예를 들어 `shared/data/projects.ts`에서 `id: '7'`인 프로젝트는 다음 경로를 사용합니다.

```text
client/public/projects/7/presentation.pdf
client/public/projects/7/report.pdf
```

- `presentation.pdf`가 있으면 상세 페이지에 Presentation 버튼이 자동으로 표시됩니다.
- `report.pdf`가 있으면 Demo 대신 Report가 자동으로 표시됩니다.
- 파일이 없으면 해당 버튼은 표시되지 않습니다.
- `shared/data/projects.ts`에 PDF 경로를 따로 작성할 필요가 없습니다.
