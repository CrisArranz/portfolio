import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AboutMe, Experience, Knowledge, Work } from "./components/sections";
import { Header } from "./components/utils/Header";
export const App = () => {
    const [isDark, setisDark] = useState(false);
    const handleClickDark = () => {
        setisDark(prev => !prev);
    };
    return (_jsx("div", { className: `${isDark ? "dark" : ""}`, children: _jsxs("div", { className: "absolute top-0 z-[-2] w-full dark:bg-black bg-[radial-gradient(ellipse_70%_70%_at_50%-15%,rgb(0,128,128,0.6),rgba(255,255,255,0))]", children: [_jsx(Header, { onClickDark: handleClickDark, isDark: isDark }), _jsx(AboutMe, {}), _jsx(Experience, { id: "experience" }), _jsx(Knowledge, { id: "tecnologies" }), _jsx(Work, { id: "projects" })] }) }));
};
