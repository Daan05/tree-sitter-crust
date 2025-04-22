module.exports = grammar({
  name: 'crust',

  extras: $ => [
    /\s/,
    $.comment
  ],

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
      $.variable_declaration,
      $.assignment,
      $.if_statement,
      $.while_statement,
      $.for_statement,
      $.print_statement,
      $.block
    ),

    comment: _ => token(seq('//', /.*/)),

    variable_declaration: $ => seq(
      'let',
      field('name', $.identifier),
      '=',
      field('value', $._expression),
      ';'
    ),

    assignment: $ => seq(
      field('name', $.identifier),
      '=',
      field('value', $._expression),
      ';'
    ),

    if_statement: $ => seq(
      'if',
      field('condition', $._expression),
      field('consequence', $.block),
      optional(seq('else', field('alternative', $.block)))
    ),

    while_statement: $ => seq(
      'while',
      field('condition', $._expression),
      field('body', $.block)
    ),

    for_statement: $ => seq(
      'for',
      '(',
      $.variable_declaration,
      $._expression,
      ';',
      $.assignment,
      ')',
      $.block
    ),

    print_statement: $ => seq(
      'print',
      $._expression,
      ';'
    ),

    block: $ => seq(
      '{',
      repeat($._statement),
      '}'
    ),

    _expression: $ => choice(
      $.binary_expression,
      $.identifier,
      $.number,
      $.string
    ),

    binary_expression: $ => prec.left(1, seq(
      field('left', $._expression),
      field('operator', choice('==', '<', '+')),
      field('right', $._expression)
    )),

    identifier: _ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    number: _ => /\d+/,
    string: _ => seq('"', /[^"]*/, '"'),
  }
});

