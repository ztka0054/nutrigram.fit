const getOffset = (el, compesationX = 0, compesationY = 100) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX - compesationX,
        top: rect.top + window.scrollY - compesationY,
    };
};

export default getOffset;
