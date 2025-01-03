import { TextTimeStamped } from "./types";

export const capitalizeAllWords = (string: string) => {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const twoDP = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const roundToTwo = (num: number) => {
  const m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
};

export const smoothScrollByElementID = (elementID: string, offset: number = -80) => {
  const pageHeaderElement = document.getElementById(elementID);
  if (pageHeaderElement) {
    const y = pageHeaderElement.getBoundingClientRect().top + window.pageYOffset + offset;
    window && window?.scrollTo?.({ top: y, behavior: "smooth" });
  }
};

export const removeUndefinedProperties = (currentOBJ: any) => {
  const obj = { ...currentOBJ };
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}));
  return obj;
};

export const uniq = (arr: string[]) => {
  return Array.from(new Set(arr));
};

export const chunk = (arr: any[], size: number) => {
  const chunked_arr = [];
  let index = 0;
  while (index < arr.length) {
    chunked_arr.push(arr.slice(index, size + index));
    index += size;
  }
  return chunked_arr as (typeof arr)[];
};

export const splitTextTimestampedByChar = (textSets: TextTimeStamped[], charLength: number) => {
  const textSplitArray: TextTimeStamped[] = [];
  let indexCount = 0;

  for (let i = 0; i < textSets.length; i++) {
    const textSet = textSets[i];
    if (textSplitArray[indexCount]) {
      textSplitArray[indexCount].content += " " + textSet.content;
      textSplitArray[indexCount].end = textSet.end;
      textSplitArray[indexCount].dur += textSet.dur;
    } else {
      textSplitArray[indexCount] = {
        start: textSet.start,
        end: textSet.end,
        dur: textSet.dur,
        content: textSet.content,
      };
    }

    if (textSplitArray[indexCount].content.length + (textSets?.[i + 1]?.["content"]?.length || 0) > charLength) {
      indexCount++;
    }
  }

  return textSplitArray;
};

const formatsToTry = ["maxresdefault", "hqdefault", "0", "default"];

export const getYTThumbnail = async (video_id: string) => {
  const baseURL = `https://img.youtube.com/vi/${video_id}/`;

  for (let index = 0; index < formatsToTry.length; index++) {
    const endText = formatsToTry[index];

    const fullURL = baseURL + `${endText}.jpg`;

    const resp = await fetch(fullURL, {
      method: "HEAD",
    }).catch((err) => {
      return null;
    });

    if (resp?.ok) {
      return fullURL;
    }
  }

  return null;
};
