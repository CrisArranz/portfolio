import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
export const Text = ({ message, styles, children, type }) => {
    switch (type) {
        case 'PARAGRAPH':
            return _jsxs("p", { className: styles?.className, children: [message ?? '', children] });
        case 'HEADING_1':
            return _jsxs("h1", { className: styles?.className, children: [message ?? '', children] });
        case 'HEADING_2':
            return _jsxs("h2", { className: styles?.className, children: [message ?? '', children] });
        case 'HEADING_3':
            return _jsxs("h3", { className: styles?.className, children: [message ?? '', children] });
        case 'HEADING_4':
            return _jsxs("h4", { className: styles?.className, children: [message ?? '', children] });
        case 'HEADING_5':
            return _jsxs("h5", { className: styles?.className, children: [message ?? '', children] });
        case 'SPAN':
            return _jsxs("span", { className: styles?.className, children: [message ?? '', children] });
        default:
            return _jsx(_Fragment, { children: children });
    }
};
