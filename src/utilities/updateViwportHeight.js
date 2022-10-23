const updateViewportHeight = () => {
    const root = document.documentElement;
    root.style.setProperty("--100vh", window.innerHeight+"px")
};

export { updateViewportHeight };