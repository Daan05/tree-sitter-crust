<H1>Treesitter crust</H1>

Treesitter syntax highlighting for the programming language crust. This is meant to be used inside neovim.

<H2>Installation</H2>

<H3>Just need to configure neovim</H3>

Your treesitter plugin config should look something like this:

```lua
return {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
        local configs = require("nvim-treesitter.configs")

        local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
        parser_config.crust = {
            install_info = {
                url = "https://github.com/Daan05/tree-sitter-crust/",
                files = { "src/parser.c" },
            },
            filetype = "crust",
        }

        configs.setup({
            ensure_installed = { "crust" },
        })
    end
}
```

And add this somewhere:

```lua
vim.filetype.add({
    extension = {
        crust = "crust",
    },
})

function UpdateCrustQueries()
    local url = "https://raw.githubusercontent.com/Daan05/tree-sitter-crust/queries/crust/highlights.scm"
    local dest = vim.fn.stdpath("data") .. "/lazy/nvim-treesitter/queries/crust/highlights.scm"

    -- Create the directory if it doesn't exist
    vim.fn.mkdir(vim.fn.fnamemodify(dest, ":h"), "p")

    -- Download the file with curl
    vim.fn.system({
        "curl",
        "-fLo",
        dest,
        "--create-dirs",
        url,
    })

    -- Optional: confirm success
    if vim.v.shell_error == 0 then
        vim.notify("Downloaded highlights.scm to " .. dest, vim.log.levels.INFO)
    else
        vim.notify("Download failed!", vim.log.levels.ERROR)
    end
end
```

The first code snippets installs the crust parser for syntax highlighting, but to actually get the colors on your screen you need a highlights.scm file. This file gets downloaded and placed in the right directory when you call `:lua UpdateCrustQueries()`. You need to call this function the first time after installing your crust parser and also whenever you want to update (which shouldn't be too often).

Congrats! If everything is correct your .crust files should now have colorhighlighting
