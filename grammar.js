module.exports = grammar({
  name: 'crust',

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
      $.function_definition,
      $.variable_declaration,
      $.expression_statement,
      $.if_statement,
      $.while_statement,
      $.for_statement,
      $.comment
    ),

    function_definition: $ => seq(
      'fn',
      $.identifier,
      $.parameter_list,
      $.block
    ),

    parameter_list: $ => seq(
      '(',
      optional(seq(
        $.parameter,
        repeat(seq(',', $.parameter))
      )),
      ')'
    ),

    parameter: $ => seq($.type, $.identifier),

    variable_declaration: $ => seq(
      choice('let', 'int'),
      $.identifier,
      '=',
      $.expression,
      ';'
    ),

    expression_statement: $ => seq($.expression, ';'),

    if_statement: $ => seq(
      'if',
      $.expression,
      $.block
    ),

    while_statement: $ => seq(
      'while',
      $.expression,
      $.block
    ),

    for_statement: $ => seq(
      'for',
      '(',
      $.variable_declaration,
      $.expression,
      ';',
      $.assignment_expression,
      ')',
      $.block
    ),

    block: $ => seq(
      '{',
      repeat($._statement),
      '}'
    ),

    assignment_expression: $ => seq(
      $.identifier,
      '=',
      $.expression
    ),

    expression: $ => choice(
      $.identifier,
      $.number,
      $.boolean,
      $.binary_expression,
      $.unary_expression,
      $.function_call
    ),

    function_call: $ => seq(
      $.identifier,
      '(',
      optional(seq($.expression, repeat(seq(',', $.expression)))),
      ')'
    ),

    binary_expression: $ => prec.left(1, seq(
      $.expression,
      choice('+', '-', '*', '/', '&&', '||', '<', '>'),
      $.expression
    )),

    unary_expression: $ => prec(2, seq(
      choice('!', '-'),
      $.expression
    )),

    comment: _ => token(seq('//', /.*/)),

    identifier: _ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    number: _ => /\d+/,

    boolean: _ => choice('true', 'false'),

    type: _ => choice('int', 'bool', 'string')
  }
});

