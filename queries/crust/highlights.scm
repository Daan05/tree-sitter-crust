;; highlights.scm

;; Keywords
[
  "fn"
  "return"
  "if"
  "for"
  "while"
  "let"
  "int"
  "print"
] @keyword

;; Types
(int_type) @type

;; Identifiers
(identifier) @variable

;; Function definitions
(function_definition
  name: (identifier) @function)

;; Function calls
(call_expression
  function: (identifier) @function.call)

;; Numbers
(integer_literal) @number

;; Operators
[
  "+"
  "-"
  "*"
  "/"
  "<"
  ">"
  "=="
  "!="
  "&&"
  "||"
  "!"
] @operator

;; Blocks
(block) @punctuation.bracket

;; Delimiters
[
  "("
  ")"
  "{"
  "}"
  ";"
  "="
] @punctuation.delimiter

;; Comments (if your grammar supports them)
(comment) @comment

