export function getPages() {
  // @ts-ignore
  const ctx = require.context('../pages', true, /\.(tsx|mdx)$/);

  return ctx
    .keys()
    .filter((page) => !page.startsWith('./_')) // Filters out _app.js and _document.js
    .map((page) => {
      page = page
        .replace(/(\/index)?\.tsx$/i, '') // Removes the index.js files
        .replace(/\.(\/)?/i, '/'); // Normalize the homepage directory to "/"

      console.log(page);
    });
}
