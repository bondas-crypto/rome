# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 459`

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
      column: 25
      index: 25
      line: 1
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
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unknown label <emphasis>x</emphasis>'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 15
          index: 15
          line: 1
        }
      }
    }
  ]
  body: Array [
    WhileStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 25
          index: 25
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      test: BooleanLiteral {
        value: true
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 11
            index: 11
            line: 1
          }
          start: Object {
            column: 7
            index: 7
            line: 1
          }
        }
      }
      body: BlockStatement {
        directives: Array []
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 25
            index: 25
            line: 1
          }
          start: Object {
            column: 13
            index: 13
            line: 1
          }
        }
        body: Array [
          BreakStatement {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 23
                index: 23
                line: 1
              }
              start: Object {
                column: 15
                index: 15
                line: 1
              }
            }
            label: Identifier {
              name: 'x'
              loc: Object {
                filename: 'input.js'
                identifierName: 'x'
                end: Object {
                  column: 22
                  index: 22
                  line: 1
                }
                start: Object {
                  column: 21
                  index: 21
                  line: 1
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```
