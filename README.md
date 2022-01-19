# vue-til-clone
> vue-til 다시 만들어보기 프로젝트 

## vsCode 플러그인 설치
---
- Night Owl : 어두운 테마 플러그인 (눈 편함!!)
- Vetur : .vue 파일의 코드 하이라이팅, vue.js 자동완성
- Vue VSCode Snippets : Vue 자동완성 명령어 ex) vdata, vimport, vmethods
- Material Icon Theme : EXPLORER 파일 아이콘 테마
- ESLint : 잘못된 코드 스타일로 인해 에러가 나지 않게 코드 문법을 잡아주는 문법 검사기
- Turbo Console Log : console.log() 끝판왕 도구

플러그인 셋팅 단축키  
`[ctrl] + [shift] + [p]`  
'color theme' >> night owl 선택  
'file icon' >> Material Icon Theme 선택 

[ESlint/Prettier 설정](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)


## vue-cli 프로젝트 생성
---

### 프로젝트 생성 테스트 

1. ~~Default로 만들어보기~~
```bash
npx @vue/cli create vue-til-clone
Default
```  
2. Manually select features로 만들어보기

```bash
npx @vue/cli create vue-til-clone
Manually select features
Choose Vue Version, Babel, Linter / Formatter, Unit Testing
2.x
ESLint + Prettier
Lint on save
Jest
In dedicated config files
n
```
> 결과   
- Default로 만들면 config file들이(.browserslistrc.js, .eslintrc.js, jest.config.js)  생성되지 않고, package.json파일에서 설정을 해준다..
- package.json에 devDependencies의 항목이 다르다.
  


## Eslint + Prettier설정 - `.eslintrc.js`
---
- Prettier 플러그인은 사용안함(disabled)으로 해야함
- [ctrl] + [,] > `format on save` >  선택해제
- rules수정
```javascript
...
rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ['error', {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
    }]
  },
```
## Eslint - VSCode auto fix 설정 - 플러그인 설정
[ctrl] + [,] > `eslint` > `eslint:validate` > `settings.json에서 편집` > 아래 복붙
---
```javascript
{
  // ESLint
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": [
    {"mode": "auto"}
  ],
  // don't format on save
  "editor.formatOnSave": false,  
}
```

## Eslint-vue 설정 - `vue.config.js`
---
vue-cli 3.x.x 버전 이후 Eslint가 화면을 덮게되는 현상이 있음  
```javascript
module.exports = {
    devServer: {
        overlay: false
    }
}
```

## 절대 경로 - VSCode 설정 - `jsconfig.json` (VSCode 설정파일)
---
`"baseUrl": ".",` 로 설정하기 위해서는 [vue-til-clone]폴더를 root로 열어야한다.
```javascript
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "~/*": [
          "./*"
        ],
        "@/*": [
          "./src/*"
        ],
      }
    },
    "exclude": [
      "node_modules",
      "dist"
    ]
  }
```

