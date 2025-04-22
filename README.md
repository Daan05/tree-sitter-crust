<H1>Treesitter crust</H1>

Treesitter syntax highlighting for the programming language crust. This is meant to be used inside neovim.

<H2>Installation</H2>

<H3>1. Run the install script</H3>

Make the script runnable

`chmod +x install.sh`


Run the script

`./install.sh`


<H3>2. configure neovim</H3>

It's important to add this, otherwise .crust files won't get recognized as crust
```lua
vim.filetype.add({
    extension = {
        crust = "crust",
    },
})
```

And your treesitter config should look something along the lines if this:
```lua
return {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
        local configs = require("nvim-treesitter.configs")

        local parser_config = require "nvim-treesitter.parsers".get_parser_configs()

        parser_config.crust = {
            install_info = {
                url = "some/path/to/tree-sitter-crust", -- path to your tree-sitter-crust repo
                files = { "src/parser.c" },
            },
            filetype = "crust", -- This tells Treesitter the filetype
        }

        configs.setup({
            ensure_installed = { "c", "rust", "lua", "vim", "vimdoc", "cpp", "zig", "crust" },
            auto_install = false,
            modules = {},
            sync_install = false,
            highlight = { enable = true },
            indent = { enable = true },
            ignore_install = {},
        })
    end
}
```

Congrats! If everything is correct your .crust files should now have colorhighlighting
