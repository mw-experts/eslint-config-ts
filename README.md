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
"forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
"strict": true,                                      /* Enable all strict type-checking options. */
// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
// "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
// "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
// "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
// "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
// "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
// "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
// "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
// "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
// "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
// "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
// "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
```
