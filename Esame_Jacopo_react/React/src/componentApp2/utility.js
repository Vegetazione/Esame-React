const slugify = (str) => str.toLowerCase()
                            .replaceAll(' ', '-')
                            .replaceAll('?', '')

export { slugify }