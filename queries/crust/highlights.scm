;; ---------------------
;; Keywords & Types
;; ---------------------

(variable_declaration vartype: (_) @type)

(if_statement) @keyword
(while_statement) @keyword
(for_statement) @keyword
(print_statement) @function.builtin

;; ---------------------
;; Identifiers
;; ---------------------

(identifier) @variable

;; ---------------------
;; Literals
;; ---------------------

(number) @number
(string) @string

;; ---------------------
;; Operators
;; ---------------------

(binary_expression operator: (_) @operator)

;; ---------------------
;; Statements & Blocks
;; ---------------------

(variable_declaration) @statement
(assignment) @statement
(block) @block

;; ---------------------
;; Comments
;; ---------------------

(comment) @comment

