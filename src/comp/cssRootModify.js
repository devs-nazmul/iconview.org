export const cssRootModify = (variables) => {
    let stylesheet = document.styleSheets[0];
    let rule = Array.from(stylesheet.cssRules).find(r => r.selectorText === ':root');
    if (rule) {
        Object.entries(variables).forEach(([name, value]) => {
            rule.style.setProperty("--" + name, value);
        });
    }
}
