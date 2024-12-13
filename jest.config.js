/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        "^.+\\.tsx?$": "ts-jest", // For TypeScript files
        "^.+\\.scss$": "jest-transform-stub", // Mock SCSS files
        "^.+\\.svg$": "jest-transform-stub", // Mock SVG files
    },
    transformIgnorePatterns: [
        "node_modules/(?!(your-scoped-module)/)"
    ],
    moduleNameMapper: {
        '\\.(scss|css)$': 'identity-obj-proxy',
    }
};