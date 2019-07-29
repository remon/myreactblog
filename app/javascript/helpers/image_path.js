const icons = require.context('images', true);

export const iconPath = name => icons(name, true);
console.log(iconPath);
