;; highlights.scm

;; Keywords
"let" @keyword
"if" @conditional
"else" @conditional
"while" @repeat
"for" @repeat
"print" @function.call

;; Identifiers
(identifier) @variable

;; Literals
(number) @number
(string) @string

;; Operators
"==" @operator
"+" @operator
"<" @operator
"=" @operator

;; Statements and blocks
(variable_declaration) @statement
(assignment) @statement
(if_statement) @conditional
(while_statement) @repeat
(for_statement) @repeat
(print_statement) @function.call
(block) @block

;; Comments
(comment) @comment

