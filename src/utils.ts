import { ObjectLiteral, TextTimeStamped } from "./types";

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

export const isValidUUID = (uuid: any) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
};

export const isValidJSONString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
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

export const mask = (cc: string, num = 4, mask = "*") => ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);

export const setUrlParams = (url: string, object?: ObjectLiteral | null): string => {
  const query = new URLSearchParams();

  if (!object) {
    return query.toString();
  }

  const keys = Object.keys(object);

  keys.forEach((key) => {
    if (object[key]) {
      query.append(key, object[key]);
    }
  });

  return query.toString();
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

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number, unit: "K" | "N" = "K") => {
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  // const radlon1 = (Math.PI * lon1) / 180;
  // const radlon2 = (Math.PI * lon2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
};

// get domain from url
export const getDomainFromUrl = (url: string) => {
  const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
  return domain;
};

// check if url contains contains special characters

export const isUrlContainsSpecialCharacters = (url: string) => {
  const regex = /[!@#$%^&*(),.?":{}|<>]/g;
  return regex.test(url);
};

export const JSONtoURLEncoded = (element: any, key?: string, _list?: any[]) => {
  let list = _list || [];
  if (typeof element == "object") {
    for (let idx in element) JSONtoURLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, list);
  } else {
    list.push(key + "=" + encodeURIComponent(element));
  }
  return list.join("&");
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
