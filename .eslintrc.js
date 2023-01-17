module.exports = {
  root: true,
  ignorePatterns: ['tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  globals: {
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'warn',
    'no-control-regex': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'block-scoped-var': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-return': 'error',
    'no-use-before-define': 'error',
    'no-unneeded-ternary': 'error',
    'space-before-blocks': 'error',
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-mixed-operators': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-var': 'error',
    'no-confusing-arrow': 'off',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'eslint-comments/require-description': 'error',
    'eslint-comments/disable-enable-pair': ['error'],
    'eslint-comments/no-unused-disable': 'error',
    'no-array-constructor': 'off',
    'no-redeclare': 'off',
    'no-unsafe-assignment': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'import/named': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'react/function-component-definition': 'off',
    eqeqeq: 'error'
  },
  extends: [
    'eslint:recommended',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
    'plugin:security/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        configPath: ['./tsconfig.json']
      },
      vite: {
        configPath: './vite.config.ts'
      },
      postcss: {
        configPath: './postcss.config.js'
      },
      tailwindcss: {
        configPath: './tailwind.config.js'
      }
    }
  }
};
