import "mutationobserver-shim";
import "@testing-library/jest-dom";
// import { Settings } from "luxon";
import failOnConsole from "jest-fail-on-console";

failOnConsole({
    shouldFailOnWarn: true,
});

(global as NodeJS.Global & { document: Document }).document.createRange = () => ({
    setStart: () => null,
    setEnd: () => null,
    commonAncestorContainer: {
        nodeName: "BODY",
        ownerDocument: document,
    },
} as never);
