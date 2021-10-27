import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/mmath.js',
    output: [
        {
            file: 'dist/mmath.js',
            format: 'iife',
            name: 'MMath',
        },
        {
            file: 'dist/mmath.min.js',
            format: 'iife',
            name: 'MMath',
            plugins: [
                terser(),
            ],
        },
    ],
    plugins: [
        json(),
    ],
};