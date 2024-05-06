export default {
    arrowParens: 'always',
    bracketSpacing: false,
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 120,
    tabWidth: 4,
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    useTabs: false,
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
    ],
};
