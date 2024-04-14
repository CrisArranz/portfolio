import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CardList } from "../../utils/card-list/card-list";
import { Text } from "../../utils/text/text";
export const Knowledge = ({ id }) => {
    const frontend = [
        { item: _jsxs("svg", { className: "size-12 mb-2", viewBox: "0 0 452 520", children: [_jsx("path", { fill: "#e34f26", d: "M41 460L0 0h451l-41 460-185 52" }), _jsx("path", { fill: "#ef652a", d: "M226 472l149-41 35-394H226" }), _jsx("path", { fill: "#ecedee", d: "M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" }), _jsx("path", { fill: "#fff", d: "M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" })] }), name: 'HTML' },
        { item: _jsxs("svg", { className: "size-12 mb-2", viewBox: "0 0 452 520", children: [_jsx("path", { fill: "#0c73b8", d: "M41 460L0 0h451l-41 460-185 52" }), _jsx("path", { fill: "#30a9dc", d: "M226 472l149-41 35-394H226" }), _jsx("path", { fill: "#ecedee", d: "M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" }), _jsx("path", { fill: "#fff", d: "M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" })] }), name: 'CSS' },
        { item: _jsxs("svg", { className: "size-12 mb-2", width: "2500", height: "2500", viewBox: "0 0 1052 1052", children: [_jsx("path", { fill: "#f0db4f", d: "M0 0h1052v1052H0z" }), _jsx("path", { d: "M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z", fill: "#323330" })] }), name: 'JavaScript' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 256 228", width: "256", height: "228", preserveAspectRatio: "xMidYMid", children: _jsx("path", { d: "M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z", fill: "#00D8FF" }) }), name: 'React' },
        { item: _jsxs("svg", { className: "size-12 mb-2", viewBox: "0 0 256 154", width: "256", height: "154", preserveAspectRatio: "xMidYMid", children: [_jsx("defs", { children: _jsxs("linearGradient", { x1: "-2.778%", y1: "32%", x2: "100%", y2: "67.556%", id: "a", children: [_jsx("stop", { "stop-color": "#2298BD", offset: "0%" }), _jsx("stop", { "stop-color": "#0ED7B5", offset: "100%" })] }) }), _jsx("path", { d: "M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z", fill: "url(#a)" })] }), name: 'TailwindCSS' },
        { item: _jsxs("svg", { className: "size-12 mb-2", xmlns: "http://www.w3.org/2000/svg", width: "256", height: "154", viewBox: "0 0 512 512", children: [_jsx("rect", { fill: "#3178c6", height: "512", rx: "50", width: "512" }), _jsx("rect", { fill: "#3178c6", height: "512", rx: "50", width: "512" }), _jsx("path", { clipRule: "evenodd", d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z", fill: "#fff", fillRule: "evenodd" })] }), name: 'TypeScript' },
    ];
    const backend = [
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 -1 100 50", children: _jsx("path", { fill: "currentColor", d: "M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053" }) }), name: 'PHP' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 256 289", width: "256", height: "289", preserveAspectRatio: "xMidYMid", children: _jsx("path", { d: "M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z", fill: "#539E43" }) }), name: 'NodeJS' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 32 32", width: "64", height: "64", children: _jsx("path", { fill: "currentColor", d: "M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" }) }), name: 'ExpressJS' },
        { item: _jsxs("svg", { className: "size-12 mb-2", preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 252", children: [_jsx("path", { d: "M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z", fill: "#00546B" }), _jsx("path", { d: "m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z", fill: "#00546B" })] }), name: 'MySQL' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 256 549", width: "256", height: "549", preserveAspectRatio: "xMidYMid", children: _jsx("path", { fill: "#01EC64", d: "M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" }) }), name: 'MongoDB' },
        { item: _jsxs("svg", { className: "size-12 mb-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "29 23.10000000000001 681.2 778.5", width: "256", height: "154", children: [_jsx("path", { d: "M539.2 167.8c-39.8-24.8-77.2-34.5-114.8-59.2-23.2-15.8-55.5-53.2-82.5-85.5-5.2 51.8-21 72.8-39 87.8-38.2 30-62.2 39-95.2 57-27.8 14.2-178.5 104.2-178.5 297.7s162.8 336 343.5 336 337.5-131.2 337.5-330-147-288.8-171-303.8z", fill: "#00598e" }), _jsx("path", { d: "M478.2 633.5c12 0 24.8.8 33.8 6.8s14.2 19.5 17.2 27 0 12-6 15c-5.2 3-6 1.5-11.2-8.2s-9.8-19.5-36-19.5-34.5 9-47.2 19.5-17.2 14.2-21.8 8.2-3-12 5.2-19.5 21.8-19.5 34.5-24.8 19.5-4.5 31.5-4.5zM353.8 719c15 12 37.5 21.8 85.5 21.8S521 727.2 536 716c6.8-5.2 9.8-.8 10.5 2.2s2.2 7.5-3 12.8c-3.8 3.8-38.2 27.8-78.8 31.5s-95.2 6-128.2-24c-5.2-5.2-3.8-12.8 0-15.8s6.8-5.2 11.2-5.2 3.8 0 6.1 1.5z", fill: "#fff" }), _jsx("path", { d: "M170 662c57-.8 67.5-10.5 117.8-33 271.5-121.5 321.8-232.5 331.5-258s24-66.8 9-112.5c-2.9-8.8-5-15.9-6.5-21.6-36.1-40.3-71.9-62.4-82.7-69.1-39-24.8-77.3-34.5-114.8-59.2-23.2-15-55.5-53.2-82.5-85.5-5.2 51.8-20.2 73.5-39 87.8-38.2 30-62.2 39-95.2 57C179.8 182.8 29 272 29 465.5c0 61.8 16.6 118.4 45.1 166.8l7.4-.3c15.7 14.2 40.5 30.8 88.5 30z", fill: "#0073ba" }), _jsx("path", { d: "M539 167.8c-39-24.8-77.2-34.5-114.8-59.2-23.2-15-55.5-53.2-82.5-85.5-5.2 51.8-20.2 73.5-39 87.8-38.2 30-62.2 39-95.2 57C179.8 182.8 29 272 29 465.5c0 61.8 16.6 118.4 45.1 166.8 60.7 103.2 175.4 169.2 298.4 169.2 180.8 0 337.5-131.2 337.5-330 0-109.1-44.3-185.5-88.3-234.6-36.1-40.4-71.9-62.4-82.7-69.1zm91.2 87.7c49.2 61.6 74.2 134.2 74.2 216 0 47.4-9 92.2-26.8 133.2-16.9 38.8-41.2 73.2-72.3 102.3-61.5 57.4-144.1 89-232.7 89-43.8 0-86.8-8.4-127.8-24.9-40.3-16.2-76.5-39.4-107.8-69C70.9 639.7 34.6 555.7 34.6 465.5c0-80.3 26.1-151.7 77.5-212.2 39.3-46.2 81.7-71.8 98-80.6 8-4.3 15.4-8.2 22.6-11.9 22.6-11.6 44-22.6 73.4-45.6 15.7-11.9 32.4-30.8 39.5-78.7 24.8 29.5 53.5 62.6 75.5 76.8 19.5 12.9 39.5 21.9 58.8 30.6 18.3 8.2 37.2 16.8 55.9 28.7l.7.4c54.9 34.1 84.1 70.6 93.7 82.5z", fill: "#004975" }), _jsx("path", { d: "M345.5 38c10.5 30.8 9 46.5 9 53.2s-3.8 24.8-15.8 33.8c-5.2 3.8-6.8 6.8-6.8 7.5 0 3 6.8 5.2 6.8 12 0 8.2-3.8 24.8-43.5 64.5s-96.8 75-141 96.8S89 326 83 315.5s2.2-33.8 30-64.5 115.5-75 115.5-75L338 99.5l6-29.2", fill: "#93c5e4" }), _jsx("path", { d: "M345.5 37.2c-6.8 49.5-21.8 64.5-42 80.2-33.8 25.5-66.8 41.2-74.2 45-19.5 9.8-90 48.8-126.8 105-11.2 17.2 0 24 2.2 25.5s27.8 4.5 82.5-28.5S266 212 296.8 179.8c16.5-17.2 18.8-27 18.8-31.5 0-5.2-3.8-7.5-9.8-9-3-.8-3.8-2.2 0-4.5S325.2 125 329 122s21.8-15 22.5-34.5-.7-33-6-50.3zM176.8 582.5c.8-58.5 55.5-113.2 124.5-114 87.8-.8 148.5 87 192.8 86.2 37.5-.8 109.5-74.2 144.8-74.2 37.5 0 48 39 48 62.2s-7.5 65.2-25.5 91.5-29.2 36-50.2 34.5c-27-2.2-81-86.2-115.5-87.8-43.5-1.5-138 90.8-212.2 90.8-45 0-58.5-6.8-73.5-16.5-22.8-15.7-34-39.7-33.2-72.7z", fill: "#fff" }), _jsx("path", { d: "M628.2 258.5c15 45.8.8 87-9 112.5s-60 136.5-331.5 258c-50.2 22.5-60.8 32.2-117.8 33-48 .8-72.8-15.8-88.5-30l-7.4.3c60.7 103.2 175.4 169.2 298.4 169.2 180.8 0 337.5-131.2 337.5-330 0-109.1-44.3-185.5-88.3-234.6 1.6 5.7 3.8 12.8 6.6 21.6z", fill: "none" })] }), name: 'Drupal' },
    ];
    const tools = [
        { item: _jsx("svg", { className: "size-12 mb-2", preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 256", children: _jsx("path", { d: "M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33", fill: "#DE4C36" }) }), name: 'Git' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 256 250", width: "256", height: "250", fill: "currentColor", preserveAspectRatio: "xMidYMid", children: _jsx("path", { d: "M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z", fill: "currentColor" }) }), name: 'GitHub' },
        { item: _jsxs("svg", { className: "size-12 mb-2", height: "2455", viewBox: "-11.9 -2 1003.9 995.6", width: "2500", children: [_jsx("path", { d: "m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z", fill: "#2489ca" }), _jsx("path", { d: "m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z", fill: "#1070b3" }), _jsx("path", { d: "m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z", fill: "#0877b9" }), _jsx("path", { d: "m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z", fill: "#3c99d4" })] }), name: 'VSCode' },
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 128 128", children: _jsx("path", { fill: "#cb3837", d: "M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z" }) }), name: 'npm' },
        { item: _jsxs("svg", { className: "size-12 mb-2", xmlns: "http://www.w3.org/2000/svg", width: "256", height: "289", viewBox: "0 0 256 256", version: "1.1", preserveAspectRatio: "xMidYMid", children: [_jsx("path", { d: "M128,0 C57.3281853,0 0,57.3281853 0,128 C0,198.671815 57.3281853,256 128,256 C198.671815,256 256,198.671815 256,128 C256,57.3281853 198.671815,0 128,0", fill: "#368FB9" }), _jsx("path", { d: "M203.317375,174.060232 C195.410039,175.938224 191.40695,177.667954 181.621622,184.043243 C166.350579,193.927413 149.646332,198.523552 149.646332,198.523552 C149.646332,198.523552 148.262548,200.599228 144.259459,201.538224 C137.340541,203.218533 111.295753,204.651737 108.923552,204.701158 C102.548263,204.750579 98.6440154,203.07027 97.5567568,200.450965 C94.2455598,192.543629 102.301158,189.08417 102.301158,189.08417 C102.301158,189.08417 100.522008,187.996911 99.4841699,187.008494 C98.5451737,186.069498 97.5567568,184.191506 97.2602317,184.883398 C96.0247104,187.898069 95.3822394,195.261776 92.0710425,198.572973 C87.5243243,203.169112 78.9250965,201.637066 73.834749,198.96834 C68.2501931,196.003089 74.2301158,189.034749 74.2301158,189.034749 C74.2301158,189.034749 71.215444,190.8139 68.7938224,187.156757 C66.619305,183.796139 64.5930502,178.06332 65.1366795,170.996139 C65.7297297,162.940541 74.7243243,155.132046 74.7243243,155.132046 C74.7243243,155.132046 73.1428571,143.221622 78.3320463,131.014672 C83.027027,119.894981 95.6787645,110.949807 95.6787645,110.949807 C95.6787645,110.949807 85.0532819,99.1876448 89.0069498,88.611583 C91.576834,81.6926641 92.6146718,81.7420849 93.4548263,81.4455598 C96.4200772,80.3088803 99.2864865,79.0733591 101.411583,76.7505792 C112.037066,65.2849421 125.578378,67.4594595 125.578378,67.4594595 C125.578378,67.4594595 132.003089,47.9382239 137.933591,51.7436293 C139.762162,52.9297297 146.335135,67.5583012 146.335135,67.5583012 C146.335135,67.5583012 153.352896,63.4563707 154.143629,64.988417 C158.393822,73.2416988 158.888031,89.0069498 157.010039,98.5945946 C153.847104,114.409266 145.939768,122.909653 142.776834,128.247104 C142.035521,129.482625 151.27722,133.386873 157.10888,149.54749 C162.495753,164.324324 157.701931,176.728958 158.542085,178.112741 C158.690347,178.359846 158.739768,178.458687 158.739768,178.458687 C158.739768,178.458687 164.917375,178.952896 177.322008,171.292664 C183.944402,167.190734 191.802317,162.594595 200.74749,162.495753 C209.396139,162.34749 209.840927,172.478764 203.317375,174.060232 L203.317375,174.060232 Z M215.079537,166.795367 C214.189961,159.777606 208.259459,154.934363 200.648649,155.033205 C189.281853,155.181467 179.743629,161.062548 173.417761,164.966795 C170.946718,166.498842 168.821622,167.635521 166.99305,168.475676 C167.388417,162.742857 167.042471,155.230888 164.07722,146.977606 C160.469498,137.093436 155.626255,131.014672 152.166795,127.505792 C156.169884,121.674131 161.655598,113.173745 164.225483,100.027799 C166.449421,88.8092664 165.757529,71.3637066 160.667181,61.5783784 C159.629344,59.6015444 157.899614,58.1683398 155.725097,57.5752896 C154.835521,57.3281853 153.155212,56.8339768 149.844015,57.772973 C144.85251,47.4440154 143.12278,46.3567568 141.788417,45.4671815 C139.020849,43.6880309 135.759073,43.2926641 132.694981,44.4293436 C128.59305,45.9119691 125.08417,49.8656371 121.772973,56.8833977 C121.278764,57.9212355 120.833977,58.9096525 120.43861,59.8980695 C114.162162,60.3428571 104.277992,62.6162162 95.9258687,71.6602317 C94.8880309,72.7969112 92.8617761,73.6370656 90.7366795,74.4277992 L90.7861004,74.4277992 C86.4370656,75.9598456 84.4602317,79.5181467 82.03861,85.9428571 C78.6779923,94.9374517 82.1374517,103.783784 85.5474903,109.516602 C80.9019305,113.667954 74.7243243,120.290347 71.4625483,128.049421 C67.4100386,137.637066 66.965251,147.027027 67.1135135,152.117375 C63.6540541,155.774517 58.3166023,162.644015 57.7235521,170.353668 C56.9328185,181.127413 60.8370656,188.441699 62.5667954,191.110425 C63.0610039,191.901158 63.6046332,192.543629 64.1976834,193.1861 C64,194.520463 63.9505792,195.953668 64.2471042,197.436293 C64.8895753,200.895753 67.0640927,203.712741 70.3752896,205.491892 C76.8988417,208.951351 85.992278,210.433977 93.0100386,206.925097 C95.5305019,209.593822 100.126641,212.163707 108.478764,212.163707 L108.972973,212.163707 C111.098069,212.163707 138.081853,210.730502 145.939768,208.803089 C149.448649,207.962934 151.87027,206.480309 153.451737,205.145946 C158.492664,203.564479 172.429344,198.820077 185.57529,190.319691 C194.866409,184.290347 198.078764,183.005405 204.997683,181.325097 C211.718919,179.694208 215.919691,173.566023 215.079537,166.795367 L215.079537,166.795367 Z", fill: "#FFFFFF" })] }), name: 'yarn' },
        { item: _jsxs("svg", { className: "size-12 mb-2", xmlns: "http://www.w3.org/2000/svg", width: "256", height: "250", viewBox: "0 -5 256 256", version: "1.1", preserveAspectRatio: "xMidYMid", children: [_jsxs("defs", { children: [_jsxs("linearGradient", { x1: "99.140087%", y1: "112.708084%", x2: "33.8589812%", y2: "37.7549606%", id: "linearGradient-1", children: [_jsx("stop", { stopColor: "#0052CC", offset: "18%" }), _jsx("stop", { stopColor: "#2684FF", offset: "100%" })] }), _jsxs("linearGradient", { x1: "0.92569163%", y1: "-12.5823074%", x2: "66.1800713%", y2: "62.3057471%", id: "linearGradient-2", children: [_jsx("stop", { stopColor: "#0052CC", offset: "18%" }), _jsx("stop", { stopColor: "#2684FF", offset: "100%" })] })] }), _jsx("path", { d: "M9.26054484,187.329971 C6.61939782,191.637072 3.65318655,196.634935 1.13393863,200.616972 C-1.12098385,204.42751 0.0895487945,209.341911 3.85635171,211.669157 L56.6792921,244.175582 C58.5334859,245.320393 60.7697695,245.67257 62.8860683,245.153045 C65.0023672,244.633521 66.8213536,243.285826 67.9346417,241.412536 C70.0475593,237.877462 72.7699724,233.285929 75.7361837,228.369333 C96.6621947,193.831256 117.710105,198.057091 155.661356,216.179423 L208.037333,241.087471 C210.020997,242.031639 212.302415,242.132457 214.361632,241.366949 C216.420848,240.601441 218.082405,239.034833 218.967618,237.024168 L244.119464,180.137925 C245.896483,176.075046 244.088336,171.3377 240.056161,169.492071 C229.003977,164.291043 207.021507,153.92962 187.233221,144.380857 C116.044151,109.802148 55.5415672,112.036965 9.26054484,187.329971 Z", fill: "url(#linearGradient-1)" }), _jsx("path", { d: "M246.11505,58.2319428 C248.756197,53.9248415 251.722408,48.9269787 254.241656,44.9449416 C256.496579,41.1344037 255.286046,36.2200025 251.519243,33.8927572 L198.696303,1.38633231 C196.82698,0.127283893 194.518741,-0.298915762 192.323058,0.209558312 C190.127374,0.718032386 188.241461,2.11550922 187.115889,4.06811236 C185.002971,7.60318607 182.280558,12.1947186 179.314347,17.1113153 C158.388336,51.6493918 137.340426,47.4235565 99.3891748,29.3012247 L47.1757299,4.5150757 C45.1920661,3.57090828 42.9106475,3.47008979 40.8514312,4.2355977 C38.7922149,5.00110562 37.1306578,6.56771434 36.2454445,8.57837881 L11.0935983,65.4646223 C9.31657942,69.5275012 11.1247267,74.2648471 15.1569014,76.1104765 C26.2090859,81.3115044 48.1915557,91.6729274 67.9798418,101.22169 C139.331444,135.759766 199.834028,133.443683 246.11505,58.2319428 Z", fill: "url(#linearGradient-2)" })] }), name: 'Confluence' },
    ];
    const learning = [
        { item: _jsx("svg", { className: "size-12 mb-2", viewBox: "0 0 24 24", fill: "#008fe2", children: _jsx("path", { d: "M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" }) }), name: 'Docker' },
        { item: _jsxs("svg", { className: "size-12 mb-2", xmlns: "http://www.w3.org/2000/svg", width: "256", height: "256", viewBox: "-8 0 272 272", version: "1.1", preserveAspectRatio: "xMidYMid", children: [_jsx("path", { d: "M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z", fill: "#E23237" }), _jsx("path", { d: "M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z", fill: "#B52E31" }), _jsx("path", { d: "M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z", fill: "#FFFFFF" })] }), name: 'Angular' },
        { item: _jsxs("svg", { className: "size-12 mb-2", viewBox: "0 0 256 366", preserveAspectRatio: "xMidYMid", children: [_jsx("path", { fill: "currentColor", d: "M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z" }), _jsx("path", { fill: "#FF5D01", d: "M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z" })] }), name: 'Astro' },
    ];
    return (_jsxs("section", { id: id, className: 'pt-24 container mx-auto px-2 lg:w-[900px]', children: [_jsx(Text, { message: 'Tecnolog\u00EDas', type: 'HEADING_2', styles: { className: 'text-3xl font-bold text-black dark:text-white' } }), _jsxs(Text, { message: '', type: 'PARAGRAPH', styles: { className: "my-8 text-pretty md:text-lg max-w-[740px] text-black dark:text-white" }, children: [_jsx(_Fragment, { children: "En mi recorrido en el " }), _jsx(Text, { message: 'sector del desarrollo web', type: 'SPAN', styles: { className: "text-teal-500 dark:text-teal-200 font-semibold" } }), _jsx(_Fragment, { children: ", he ganado " }), _jsx(Text, { message: 'experiencia', type: 'SPAN', styles: { className: "text-fuchsia-700 dark:text-fuchsia-300 font-semibold" } }), _jsx(_Fragment, { children: " y desarrollado " }), _jsx(Text, { message: 'mis habilidades', type: 'SPAN', styles: { className: "text-fuchsia-700 dark:text-fuchsia-300 font-semibold" } }), _jsx(_Fragment, { children: " en una variedad de tecnolog\u00EDas. " }), _jsx(Text, { message: 'Mi stack tecnol\u00F3gico incluye', type: 'SPAN', styles: { className: "text-teal-500 dark:text-teal-300 font-bold" } }), _jsx(_Fragment, { children: ":" })] }), _jsxs("section", { className: 'grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center', children: [_jsx(CardList, { title: "frontend", list: frontend }), _jsx(CardList, { title: "backend", list: backend }), _jsx(CardList, { title: "herramientas", list: tools }), _jsx(CardList, { title: "aprendiendo", list: learning })] })] }));
};