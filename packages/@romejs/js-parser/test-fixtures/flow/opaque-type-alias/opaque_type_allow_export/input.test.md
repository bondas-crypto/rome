# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > opaque-type-alias > opaque_type_allow_export`

```javascript
Program {
  comments: Array []
  corrupt: true
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 71
      line: 4
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
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Expected a semicolon or a line terminator'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 35
          index: 58
          line: 2
        }
        start: Object {
          column: 36
          index: 59
          line: 2
        }
      }
    }
  ]
  body: Array [
    FlowDeclareModule {
      id: StringLiteral {
        value: 'foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 20
            index: 20
            line: 1
          }
          start: Object {
            column: 15
            index: 15
            line: 1
          }
        }
      }
      kind: 'commonjs'
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 35
          index: 58
          line: 2
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      body: BlockStatement {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 35
            index: 58
            line: 2
          }
          start: Object {
            column: 21
            index: 21
            line: 1
          }
        }
        body: Array [
          FlowDeclareExportNamed {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 35
                index: 58
                line: 2
              }
              start: Object {
                column: 2
                index: 25
                line: 2
              }
            }
            declaration: FlowDeclareOpaqueType {
              id: BindingIdentifier {
                name: 'MyType'
                loc: Object {
                  filename: 'input.js'
                  identifierName: 'MyType'
                  end: Object {
                    column: 35
                    index: 58
                    line: 2
                  }
                  start: Object {
                    column: 29
                    index: 52
                    line: 2
                  }
                }
              }
              impltype: undefined
              supertype: undefined
              typeParameters: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 35
                  index: 58
                  line: 2
                }
                start: Object {
                  column: 17
                  index: 40
                  line: 2
                }
              }
            }
          }
        ]
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 37
          index: 60
          line: 2
        }
        start: Object {
          column: 36
          index: 59
          line: 2
        }
      }
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 37
            index: 60
            line: 2
          }
          start: Object {
            column: 36
            index: 59
            line: 2
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 45
          index: 68
          line: 2
        }
        start: Object {
          column: 38
          index: 61
          line: 2
        }
      }
      expression: ReferenceIdentifier {
        name: 'string'
        loc: Object {
          filename: 'input.js'
          identifierName: 'string'
          end: Object {
            column: 44
            index: 67
            line: 2
          }
          start: Object {
            column: 38
            index: 61
            line: 2
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 1
          index: 70
          line: 3
        }
        start: Object {
          column: 0
          index: 69
          line: 3
        }
      }
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 1
            index: 70
            line: 3
          }
          start: Object {
            column: 0
            index: 69
            line: 3
          }
        }
      }
    }
  ]
}
```
