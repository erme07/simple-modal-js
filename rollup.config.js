import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/js/index.js',
        output: {
            file: 'dist/main.esm.js',
            format: 'esm',
        },
        plugins: [
            postcss({
                extract: 'style.css', 
                minimize: false,
            }),
        ],
    },
    {
        input: 'src/js/index.js',
        output: {
            file: 'dist/main.min.js',
            format: 'iife',
            name: 'SimpleModalJS', 
        },
        plugins: [
            postcss({
                inject: true,
                minimize: true,
            }),
            terser(),
        ],
    },
    {
        input: 'src/js/index.js',
        output: {
            file: 'dist/main.js',
            format: 'iife',
            name: 'SimpleModalJS',
        },
        plugins: [
            postcss({
                inject: true,
                minimize: false,
            }),
        ],
    },
];
