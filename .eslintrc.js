module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    overrides: [
        {
            files: [
                "**/*.test.js",
                "**/*.test.jsx",
                "**/*.test.ts",
                "**/*.test.tsx",
            ],
            env: {
                jest: true,
            },
            plugins: ["jest"],
            rules: {
                "jest/no-identical-title": "error",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
    ],
    rules: {
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["off"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],
        curly: [2, "all"],
        "import/no-cycle": 0,
        "import/extensions": [2, "ignorePackages", {
            ts: "never",
            tsx: "never",
            js: "never",
            jsx: "never",
            mjs: "never",
        }],
        "import/prefer-default-export": 0,
        "jsx-a11y/control-has-associated-label": [2, {
            labelAttributes: ["label", "FormattedMessage"],
            ignoreElements: ["input", "textarea"],
        }],
        indent: [2, 4, { SwitchCase: 1 }],
        "linebreak-style": [0, "windows"],
        "max-len": [2, 200, 4],
        "no-use-before-define": "off",
        "no-shadow": "off",
        "react/jsx-no-useless-fragment": "off",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "react/display-name": "off",
        "react/destructuring-assignment": 1,
        "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": [2, {
            exceptions: ["FormProvider"],
        }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "react-hooks/exhaustive-deps": 0,
        semi: "off",
        quotes: [2, "double"],
        "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "setupJest.ts", "**/src/tests/**"] }],
        "react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
            },
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },
};
