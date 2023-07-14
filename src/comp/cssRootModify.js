'use client'

export const cssRootModify = (variables) => {
    let stylesheet = document.styleSheets[0];
    if (stylesheet && stylesheet.cssRules) {
        let rule = Array.from(stylesheet.cssRules).find(r => r.selectorText === ':root');
        if (rule) {
            Object.entries(variables).forEach(([name, value]) => {
                rule.style.setProperty(`--${name}`, value);
            });
        }
    }
};
