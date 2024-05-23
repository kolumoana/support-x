const replaceFullwidthSpaces = (text: string): string =>
  text.replace(/　/g, " ");

const replaceColon = (text: string): string => text.replace(/：/g, ": ");

const replaceParentheses = (text: string): string =>
  text.replace(/（/g, "(").replace(/）/g, ")");

const replaceHyphenWithDot = (text: string): string => text.replace(/-/g, "・");

const removeAsterisks = (text: string): string => text.replace(/\*/g, "");

const insertSpaceAfterSymbols = (text: string): string => {
  const lines = text.split(/\r?\n/);
  const formattedLines = lines.map((line) => {
    if (/^[■①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(line)) {
      if (!/^[■①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑱⑲⑳] /.test(line)) {
        return line[0] + " " + line.slice(1);
      }
    }
    return line;
  });
  return formattedLines.join("\n");
};

const insertNewlineAfterSymbols = (text: string): string => {
  const lines = text.split(/\r?\n/);
  const formattedLines: string[] = [];
  lines.forEach((line, i) => {
    formattedLines.push(line);
    if (
      line.startsWith("■") &&
      i + 1 < lines.length &&
      !/^\s*$/.test(lines[i + 1])
    ) {
      formattedLines.push("");
    }
  });
  return formattedLines.join("\n");
};

const formatPunctuation = (text: string): string => {
  const lines = text.split(/\r?\n/);
  const formattedLines = lines.map((line) => {
    if (line.startsWith("■") || line.startsWith("-") || line.startsWith("・"))
      return line;
    line = line.replace(/、(?!\n)/g, "、\n");
    line = line.replace(/。(?!\n\n)/g, "。\n\n");
    line = line.replace(/【[^】]*】/g, (match) => match.replace(/\r?\n/g, ""));

    return line;
  });
  return formattedLines.join("\n");
};

const removeExtraBlankLines = (text: string): string =>
  text.replace(/\n\s*\n\s*\n/g, "\n\n");

const trimNewlines = (text: string): string => text.trim();

// prettier-ignore
export const fmtx = (text: string): string => 
  trimNewlines(
    removeExtraBlankLines(
      formatPunctuation(
        insertNewlineAfterSymbols(
          insertSpaceAfterSymbols(
            removeAsterisks(
              replaceHyphenWithDot(
                replaceParentheses(
                  replaceColon(
                    replaceFullwidthSpaces(text)
                  )
                )
              )
            )
          )
        )
      )
    )
  );
