# @mw-experts/eslint-config-ts

## Install

```
npm i -D @mw-experts/eslint-config-ts @typescript-eslint/eslint-plugin
```

Add to `.eslintrc.js`

```
extends: [
  ...
  '@mw-experts/eslint-config-ts',
]
```

## Recommended tsconfig options

```
"strict": true,                                   
"noImplicitAny": true,                            
"strictNullChecks": true,                         
"strictFunctionTypes": true,                      
"strictBindCallApply": true,                      
"strictPropertyInitialization": true,             
"noImplicitThis": true,                           
"useUnknownInCatchVariables": true,               
"alwaysStrict": true,                             
"noUnusedLocals": true,                           
"noUnusedParameters": true,                       
"exactOptionalPropertyTypes": true,               
"noImplicitReturns": true,                        
"noFallthroughCasesInSwitch": true,               
"noUncheckedIndexedAccess": true,                 
"noImplicitOverride": true,                       
"noPropertyAccessFromIndexSignature": true,       
"allowUnusedLabels": false,                       
"allowUnreachableCode": false, 
"forceConsistentCasingInFileNames": true,
```
