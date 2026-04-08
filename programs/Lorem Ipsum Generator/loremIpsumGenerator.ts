function generateLoremIpsum(wordCount: number = 50): string {
    const loremWords: string[] = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
        "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
        "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
    ];

    let result: string[] = [];
    for (let i = 0; i < wordCount; i++) {
        result.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }

    return result.join(" ") + ".";
}

console.log(generateLoremIpsum(50));
