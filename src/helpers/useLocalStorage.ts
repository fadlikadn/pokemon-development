import { useCallback } from "react";
import { localStorageId } from "../settings/config";

const useLocalStorage = () => {
    const getLocalStorage = useCallback((key: string) => {
        const localState = localStorage.getItem(`${localStorageId}|${key}`);
        return localState;
    }, [localStorageId]);

    const getBooleanLocalStorage = useCallback((key: string, defaultValue = false) => {
        const localState = localStorage.getItem(`${localStorageId}|${key}`);
        switch (localState) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return defaultValue;
        }
    }, [localStorageId]);

    const setLocalStorage = useCallback((key: string, value: string) => {
        localStorage.setItem(`${localStorageId}|${key}`, value);
    }, [localStorageId]);

    return { getLocalStorage, getBooleanLocalStorage, setLocalStorage };
};

export default useLocalStorage;
