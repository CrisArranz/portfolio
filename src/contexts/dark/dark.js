import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const DarkContext = createContext({});
export const DarkProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    function handleDark() {
        setIsDark(prev => !prev);
    }
    const value = {
        isDark,
        handleDark
    };
    return _jsx(DarkContext.Provider, { value: value, children: children });
};
export default DarkContext;
