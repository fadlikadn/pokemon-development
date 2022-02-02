// import { useCallback } from "react";
import { localStorageId } from "../settings/config";

export const getSessionStorage = (key: string): string|null => {
    const sessionState = sessionStorage.getItem(`${localStorageId}|${key}`);
    return sessionState;
};

export const getBooleanSessionStorage = (key: string, defaultValue = false): boolean => {
    const sessionState = sessionStorage.getItem(`${localStorageId}|${key}`);
    switch (sessionState) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return defaultValue;
    }
};

export const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(`${localStorageId}|${key}`, value);
};

export const removeSessionStorage = (key: string) => {
    sessionStorage.removeItem(`${localStorageId}|${key}`);
};


// const useSessionStorage = () => {
//     const getSessionStorage = useCallback((key: string) => {
//         const sessionState = sessionStorage.getItem(`${localStorageId}|${key}`);
//         return sessionState;
//     }, [localStorageId]);

//     const getBooleanSessionStorage = useCallback((key: string, defaultValue = false) => {
//         const sessionState = sessionStorage.getItem(`${localStorageId}|${key}`);
//         switch (sessionState) {
//             case "true":
//                 return true;
//             case "false":
//                 return false;
//             default:
//                 return defaultValue;
//         }
//     }, [localStorageId]);

//     const setSessionStorage = useCallback((key: string, value: string) => {
//         sessionStorage.setItem(`${localStorageId}|${key}`, value);
//     }, [localStorageId]);

//     const removeSessionStorage = useCallback((key: string) => {
//         sessionStorage.removeItem(`${localStorageId}|${key}`);
//     }, [localStorageId]);

//     return {
//         getSessionStorage, getBooleanSessionStorage, setSessionStorage, removeSessionStorage,
//     };
// };

// export default useSessionStorage;
