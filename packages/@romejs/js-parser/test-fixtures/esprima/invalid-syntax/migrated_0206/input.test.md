# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0206`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 42
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'arguments is a reserved word'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 19
          index: 19
          line: 1
        }
        start: Object {
          column: 10
          index: 10
          line: 1
        }
      }
    }
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 41
          index: 41
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: CallExpression {
        arguments: Array []
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 41
            index: 41
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        callee: FunctionExpression {
          id: BindingIdentifier {
            name: 'arguments'
            loc: Object {
              filename: 'input.js'
              identifierName: 'arguments'
              end: Object {
                column: 19
                index: 19
                line: 1
              }
              start: Object {
                column: 10
                index: 10
                line: 1
              }
            }
          }
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 38
              index: 38
              line: 1
            }
            start: Object {
              column: 1
              index: 1
              line: 1
            }
          }
          head: FunctionHead {
            async: false
            generator: false
            hasHoistedVars: false
            params: Array []
            predicate: undefined
            rest: undefined
            returnType: undefined
            thisType: undefined
            typeParameters: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 21
                index: 21
                line: 1
              }
              start: Object {
                column: 19
                index: 19
                line: 1
              }
            }
          }
          body: BlockStatement {
            body: Array []
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 38
                index: 38
                line: 1
              }
              start: Object {
                column: 22
                index: 22
                line: 1
              }
            }
            directives: Array [
              Directive {
                value: 'use strict'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 36
                    index: 36
                    line: 1
                  }
                  start: Object {
                    column: 23
                    index: 23
                    line: 1
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
}
```
