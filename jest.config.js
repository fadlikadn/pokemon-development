module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    roots: [
        "<rootDir>/src",
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(jpg|png|gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupJest.ts",
    ],
};
