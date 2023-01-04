const { DateTime } = require("luxon");

const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/favicon.png');

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['th'],
        wrapper: 'div',
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // eleventyConfig.addCollection('tagsList', (collectionApi) => {
    //     const tagsSet = new Set()
    //     collectionApi.getAll().forEach((item) => {
    //       if (!item.data.tags) return
    //       item.data.tags
    //         .filter((tag) => !['post'].includes(tag))
    //         .forEach((tag) => tagsSet.add(tag))
    //     })
    // });

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.setLibrary("md",
        markdownIt({
            html: true,
            linkify: true,
            typographer: true,
        }).use(markdownItAnchor, {})
    );

    return {
        dir: {
            input: "src",
            output: "public"
        },
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}