; Function definitions
(function_definition
  name: (identifier) @function)

; Function calls
(function_call
  function: (identifier) @function.call)

; Variable declarations
(variable_declaration
  (identifier) @variable
  type: (type) @type)

; Keywords: control structures
[
  (if_statement)
  (while_statement)
  (for_statement)
] @keyword.control

; Boolean literals
(boolean) @constant.builtin

; Numbers
(number) @number

; Identifiers used in expressions
(identifier) @variable

; Operators
(binary_expression operator: _ @operator)
(unary_expression operator: _ @operator)

; Comments
(comment) @comment

; Types
(type) @type

; Braces and punctuation (optional for editors that support it)
["(" ")" "{" "}" "[" "]"] @punctuation.bracket
[";" ","] @punctuation.delimiter

