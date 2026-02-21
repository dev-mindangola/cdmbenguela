import * as prismicH from '@prismicio/helpers'

export const htmlSerializer: prismicH.HTMLMapSerializer = {
  heading1: ({ children }) => `<h1 class="text-3xl font-bold">${children}</h1>`,
  heading6: ({ children }) => `<p class="text-xl italic">${children}</p>`,
  paragraph: ({ children }) => {
    const transformedChildren = children.replace(
      // https://regex101.com/r/ii0xXo/1
      /`(.*?)`/g,
      '<code class="bg-gray-200 rounded py-px px-1 font-mono">$1</code>',
    )

    return `<p>${transformedChildren}</p>`
  },
  list: ({ children }) => `<ul class="list-disc list-inside">${children}</ul>`,
  oList: ({ children }) =>
    `<ol class="list-decimal list-inside">${children}</ol>`,
}
