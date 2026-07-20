import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home';
export const App = () => {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) }) }));
};
