/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: Brian Janes
 *      Date: <SUBMISSION_DATE>
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a_bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
  // Trim leading/trailing whitespace
  return (
    value
      .trim()
      // Replace internal spaces, tabs, or dots with underscores
      .replace(/[\s\.]+/g, "_")
      // Convert to lowercase
      .toLowerCase()
  );
}

console.log();
console.log("Problem 1: ");
console.log(snake("abc")); // abc
console.log(snake(" ABC ")); // abc
console.log(snake("ABC")); // abc
console.log(snake("A BC")); // a_bc
console.log(snake(" A bC  ")); // a_bc
console.log(snake("A   BC")); // a_bc
console.log(snake("A.BC")); // a_bc
console.log(snake(" A..  B   C ")); // a_b_c

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

function createVideo(src, width, controls) {
  // Replace this comment with your code...
  let srcAttr = `src="${src.trim()}"`;
  let widthAttr = Number.isInteger(width) ? `width="${width}"` : "";
  let controlsAttr = controls ? true : false;
  return `<video ${srcAttr} ${widthAttr} ${controlsAttr}></video>`;
}

console.log();
console.log("Problem 2: ");
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    500
  )
); // <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>\

console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    500,
    true
  )
); // <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/

function parseDateString(value) {
  // Check for null or non-string input
  if (value === null || typeof value !== "string") {
    throw new Error("Invalid date string: Input is null or not a string");
  }

  // Validate the date string format
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(value)) {
    throw new Error("Invalid date string: Does not match YYYY-MM-DD format");
  }

  // Extract and convert date components to numbers
  let [year, month, day] = value.split("-").map(Number);

  // Validate the extracted components to make sure we're working with appropriate potential numbers
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error("Invalid date string: Contains non-numeric values");
  }
  if (month < 1 || month > 12) {
    throw new Error("Invalid date string: Month is out of range");
  }
  if (day < 1 || day > 31) {
    throw new Error("Invalid date string: Day is out of range");
  }

  // Create Date object directly with the extracted components
  // Month is zero-based, so we need to subtract 1 from the month
  // Create Date object
  const date = new Date(year, month - 1, day);

  // Validate created date against extracted day (handles invalid dates like 2024-02-30)
  if (date.getDate() !== day) {
    throw new Error(
      "Invalid date string: Day does not exist for the provided month"
    );
  }

  // Return the Date object
  return date;
}

// Test cases
console.log();
console.log("Problem 3: ");
// Fri Jan 01 2021 00:00:00 GMT-0500 (Eastern Standard Time)
console.log(parseDateString("2021-01-01"));
// Wed Sep 29 2021 00:00:00 GMT-0400 (Eastern Daylight Time)
console.log(parseDateString("2021-09-29"));

// Using try // catch blocks on the following tests to produce accurate error messages
// Error: Invalid date string
try {
  console.log(parseDateString("01-01-01"));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid date string: does not match YYYY-MM-DD format
try {
  console.log(parseDateString("2021-1-01"));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid date string: does not match YYYY-MM-DD format
try {
  console.log(parseDateString("2021-01-1"));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid date string: input is null or not a string
try {
  console.log(parseDateString(null));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid date string: does not match YYYY-MM-DD format
try {
  console.log(parseDateString("this is totally wrong"));
} catch (e) {
  console.error(e.message);
}

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above.
 * Make sure your day and month values are padded with a leading '0' if necessary (e.g., * 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29')) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/

function toDateString(value) {
  try {
    // Check for invalid Date object
    if (isNaN(value.getTime())) {
      throw new Error("Invalid Date object");
    }

    // Extract date components from the Date object
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const day = value.getDate();

    // Format the date components as a date string
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  } catch (error) {
    throw new Error("Invalid Date object");
  }
}

console.log();
console.log("Problem 4:");
// 2021-01-29
console.log(toDateString(new Date("2021-01-29")));
// 2021-09-29
console.log(toDateString(new Date("2021-09-29")));

// Using try // catch blocks on the following tests to produce accurate error messages
// Error: Invalid Date object
try {
  console.log(toDateString("2021-01-29"));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid Date object
try {
  console.log(toDateString("2021-09-29"));
} catch (e) {
  console.error(e.message);
}

// Error: Invalid Date object
try {
  console.log(toDateString("this is totally wrong"));
} catch (e) {
  console.error(e.message);
}

//should return '2021-01-29'
console.log(toDateString(parseDateString("2021-01-29")));

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * An example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/

function normalizeCoord(value) {
  let trimmedValue = value.trim();
  try {
    if (trimmedValue.startsWith("[") || trimmedValue.endsWith("]")) {
      let coords = trimmedValue.replace("[", "").replace("]", "").split(",");
      let lat = Number(coords[1].trim());
      let lng = Number(coords[0].trim());
      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return `(${lat}, ${lng})`;
      }
    } else if (trimmedValue.includes(",")) {
      let coords = trimmedValue.split(",");
      let lat = Number(coords[0].trim());
      let lng = Number(coords[1].trim());
      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return `(${lat}, ${lng})`;
      }
    } else if (trimmedValue.includes(" ")) {
      let coords = trimmedValue.split(" ");
      let lat = Number(coords[0].trim());
      let lng = Number(coords[1].trim());
      if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return `(${lat}, ${lng})`;
      }
    }
  } catch (error) {
    throw new Error("Invalid coordinate, Please use an appropriate format");
  }
}

console.log();
console.log("Problem 5:");

// (42.9755, -77.4369)
console.log(normalizeCoord("42.9755,-77.4369"));
// (42.9755, -77.4369)
console.log(normalizeCoord("[-77.4369, 42.9755]"));
// (42.9755, -77.4369)
console.log(normalizeCoord("42.9755 -77.4369"));

/*******************************************************************************
   * Problem 6: format any number of coordinates as a list in a string
   *
   * You are asked to format geographic lat, lng coordinates in a list using your
   * normalizeCoord() function from problem 5.
   *
   * Where normalizeCoord() takes a single geographic coord, the formatCoords()
   * function takes a list of any number of geographic coordinates, parses them,
   * filters out any invalid coords, and creates a list.
   *
   * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
   * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
   *
   * Notice how the list has been enclosed in an extra set of (...) braces, and each
   * formatted geographic coordinate is separated by a comma and space.
   *
   * The formatCoords() function can take any number of arguments, but they must all
   * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
   * an Error is thrown), skip the value.  For example:
   *
   * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
   * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
   *
  
   ******************************************************************************/

function formatCoords(...values) {
  let coords = values.map((value) => {
    try {
      return normalizeCoord(value);
    } catch (error) {
      return null;
    }
  });
  coords = coords.filter((coord) => coord !== null);
  let newCoords = `(${coords.join(", ")})`;
  if (newCoords.endsWith(", )")) {
    newCoords = newCoords.replace(", )", ")");
  }
  return newCoords;
}

console.log();
console.log("Problem 6:");

// ((42.9755, -77.4369), (42.9755, -62.1234))
console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]"));
// ((42.9755, -77.4369), (42.9755, -62.1234))
console.log(formatCoords("42.9755 -77.4369", "[-62.1234, 42.9755]"));
// ((42.9755, -77.4369), (42.9755, -62.1234))
console.log(
  formatCoords("42.9755 -77.4369", "[-62.1234, 42.9755]", "300,-9000")
);

/*******************************************************************************
   * Problem 7: determine MIME type from filename extension
   *
   * Web browsers and servers exchange streams of bytes, which must be interpreted
   * by the receiver based on their type.  For example, an HTML web page is
   * plain text, while a JPG image is a binary sequence.
   *
   * The Content-Type header contains information about a resource's MIME type, see:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
   *
   * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
   * The type is general, for example, 'text' or 'video'.  The subtype is more
   * specific, indicating the specific type of text, image, video, etc.  See:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
   *
   * A number of common types are used in web development:
   *
   * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
   *
   * Your mimeFromFilename() function should support all of the following extensions
   * with and without the leading '.':
   *
   * - .html, .htm --> text/html
   * - .css --> text/css
   * - .js --> text/javascript
   * - .jpg, .jpeg --> image/jpeg
   * - .gif --> image/gif
   * - .bmp --> image/bmp
   * - .ico, .cur --> image/x-icon
   * - .png --> image/png
   * - .svg --> image/svg+xml
   * - .webp --> image/webp
   * - .mp3 --> audio/mp3
   * - .wav --> audio/wav
   * - .mp4 --> video/mp4
   * - .webm --> video/webm
   * - .json --> application/json
   * - .mpeg --> video/mpeg
   * - .csv --> text/csv
   * - .ttf --> font/ttf
   * - .woff --> font/woff
   * - .zip --> application/zip
   * - .avi --> video/x-msvideo
   *
   *
   * NOTE: any other extension should use the `application/octet-stream` MIME type,
   * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
   * also use `application/octet-stream` if the file has no extension.
   *
  
   ******************************************************************************/

function mimeFromFilename(fileName) {
  // Replace this comment with your code...
  // NOTE: Use a switch statement in your solution.
  const getFilenameExtension = (fileName) => {
    const dotIndex = fileName.lastIndexOf(".");
    if (dotIndex === -1) {
      return "application/octet-stream";
    }
    const fileExt = fileName.substring(dotIndex + 1).toLowerCase();
    return fileExt;
  };

  const fileExt = getFilenameExtension(fileName);

  switch (fileExt) {
    case "html":
    case "htm":
      return "text/html";
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "gif":
      return "image/gif";
    case "bmp":
      return "image/bmp";
    case "ico":
    case "cur":
      return "image/x-icon";
    case "png":
      return "image/png";
    case "svg":
      return "image/svg+xml";
    case "webp":
      return "image/webp";
    case "mp3":
      return "audio/mp3";
    case "wav":
      return "audio/wav";
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    case "json":
      return "application/json";
    case "mpeg":
      return "video/mpeg";
    case "csv":
      return "text/csv";
    case "ttf":
      return "font/ttf";
    case "woff":
      return "font/woff";
    case "zip":
      return "application/zip";
    case "avi":
      return "video/x-msvideo";
    default:
      return "application/octet-stream";
  }
}

console.log();
console.log("Problem 7:");

// text/plain
console.log(mimeFromFilename("/User/Documents/readme.txt"));
// text/html
console.log(mimeFromFilename("/User/Documents/index.html"));
// text/html
console.log(mimeFromFilename("/User/Documents/index.htm"));
// text/css
console.log(mimeFromFilename("/User/Documents/styles.css"));
// text/javascript
console.log(mimeFromFilename("/User/Documents/scripts.js"));
// image/jpeg
console.log(mimeFromFilename("/User/Documents/image.jpg"));
// image/jpeg
console.log(mimeFromFilename("/User/Documents/image.jpeg"));
// image/gif
console.log(mimeFromFilename("/User/Documents/image.gif"));
// image/bmp
console.log(mimeFromFilename("/User/Documents/image.bmp"));
// image/x-icon
console.log(mimeFromFilename("/User/Documents/image.ico"));
// image/x-icon
console.log(mimeFromFilename("/User/Documents/image.cur"));
// image/png
console.log(mimeFromFilename("/User/Documents/image.png"));
// image/svg+xml
console.log(mimeFromFilename("/User/Documents/image.svg"));
// image/webp
console.log(mimeFromFilename("/User/Documents/image.webp"));
// audio/mp3
console.log(mimeFromFilename("/User/Documents/audio.mp3"));
// audio/wav
console.log(mimeFromFilename("/User/Documents/audio.wav"));
// video/mp4
console.log(mimeFromFilename("/User/Documents/video.mp4"));
// video/webm
console.log(mimeFromFilename("/User/Documents/video.webm"));
// application/json
console.log(mimeFromFilename("/User/Documents/data.json"));
// video/mpeg
console.log(mimeFromFilename("/User/Documents/video.mpeg"));
// text/csv
console.log(mimeFromFilename("/User/Documents/data.csv"));
// font/ttf
console.log(mimeFromFilename("/User/Documents/font.ttf"));
// font/woff
console.log(mimeFromFilename("/User/Documents/font.woff"));
// application/zip
console.log(mimeFromFilename("/User/Documents/archive.zip"));
// video/x-msvideo
console.log(mimeFromFilename("/User/Documents/video.avi"));
// application/octet-stream
console.log(mimeFromFilename("/User/Documents/unknown"));
// application/octet-stream
console.log(mimeFromFilename("/User/Documents/unknown."));
// application/octet-stream
console.log(mimeFromFilename("/User/Documents/unknown.xyz"));

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  // Replace this comment with your code...
  const licenseText = {
    "CC-BY": "Creative Commons Attribution License",
    "CC-BY-NC": "Creative Commons Attribution-NonCommercial License",
    "CC-BY-SA": "Creative Commons Attribution-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-NoDerivs License",
    "CC-BY-NC-SA":
      "Creative Commons Attribution-NonCommercial-ShareAlike License",
    "CC-BY-NC-ND":
      "Creative Commons Attribution-NonCommercial-NoDerivs License",
  };
  const licenseUrl = {
    "CC-BY": "https://creativecommons.org/licenses/by/4.0/",
    "CC-BY-NC": "https://creativecommons.org/licenses/by-nc/4.0/",
    "CC-BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    "CC-BY-ND": "https://creativecommons.org/licenses/by-nd/4.0/",
    "CC-BY-NC-SA": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "CC-BY-NC-ND": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  };
  const licenseCodeLower = licenseCode.toUpperCase();
  if (licenseText[licenseCodeLower]) {
    const license = licenseText[licenseCodeLower];
    const url = licenseUrl[licenseCodeLower];
    const target = targetBlank ? ' target="_blank"' : "";
    return `<a href="${url}"${target}>${license}</a>`;
  }
  return '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>';
}

console.log();
console.log("Problem 8, Part 1:");

// <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution License</a>
console.log(generateLicenseLink("CC-BY"));
// <a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>
console.log(generateLicenseLink("CC-BY-NC"));
// <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike License</a>
console.log(generateLicenseLink("CC-BY-SA"));
// <a href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivs License</a>
console.log(generateLicenseLink("CC-BY-ND"));
// <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike License</a>
console.log(generateLicenseLink("CC-BY-NC-SA"));
// <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs License</a>
console.log(generateLicenseLink("CC-BY-NC-ND"));
// <a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>
console.log(generateLicenseLink("CC-XYZ"));

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/

function pureBool(value) {
  const trueValues = ["yes", "oui", "o", "true", "vrai", "v", "y", "t"];
  const falseValues = ["no", "non", "n", "false", "faux", "f"];

  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    if (value === 1) {
      return true;
    } else if (value === 0) {
      return false;
    }
  }

  const lowerValue = value.toString().toLowerCase();

  if (trueValues.includes(lowerValue)) {
    return true;
  } else if (falseValues.includes(lowerValue)) {
    return false;
  } else {
    throw new Error("Invalid value");
  }
}

console.log();
console.log("Problem 9 Part 1:");

// true
console.log(pureBool("Yes"));
// true
console.log(pureBool("Oui"));
// true
console.log(pureBool("O"));
// true
console.log(pureBool("TRUE"));
// true
console.log(pureBool("True"));
// true
console.log(pureBool("vrai"));
// true
console.log(pureBool("V"));
// true
console.log(pureBool(1));
// false
console.log(pureBool("No"));
// false
console.log(pureBool("Non"));
// false
console.log(pureBool("N"));
// false
console.log(pureBool("FALSE"));
// false
console.log(pureBool("False"));
// false
console.log(pureBool("faux"));
// false
console.log(pureBool("F"));
// false
console.log(pureBool(0));

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every(...args) {
  try {
    return args.every((arg) => pureBool(arg));
  } catch (error) {
    return false;
  }
}

function any(...args) {
  try {
    return args.some((arg) => pureBool(arg));
  } catch (error) {
    return false;
  }
}

function none(...args) {
  try {
    return args.every((arg) => !pureBool(arg));
    s;
  } catch (error) {
    return false;
  }
}

console.log();
console.log("Problem 9, Part 2:");

// true
console.log(every("Y", "yes", 1));
// true
console.log(any("Y", "no", 1));
// false
console.log(none("Y", "invalid", 1));

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 * "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  if (!query) {
    throw new Error("Query must not be blank.");
  }
  const encodedQuery = encodeURIComponent(query);

  const validOrders = ["ascending", "descending"];
  if (!validOrders.includes(order)) {
    throw new Error('Order must be either "ascending" or "descending".');
  }

  if (typeof count != "number" || count <= 1 || count > 50) {
    throw new Error("Count must be a number between 1 and 50.");
  }

  const validLicenses = [
    "none",
    "any",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nd",
    "cc-by-nc-sa",
    "cc-by-nc-nd",
  ];
  if (!validLicenses.includes(license)) {
    throw new Error("License must be one of the specified values");
  }

  const baseUrl = "https://api.inaturalist.org/v2/observations";
  const url = `${baseUrl}?query=${encodedQuery}&count=${count}&order=${order}&license=${license}`;
  return url;
}

console.log();
console.log("Problem 10:");

// Expected: https://api.inaturalist.org/v2/observations?query=hello%20brian&count=25&order=ascending&license=cc-by
console.log(buildUrl("hello brian", "ascending", 25, "cc-by"));

// Expected: https://api.inaturalist.org/v2/observations?query=hellobrian&count=50&order=descending&license=none
console.log(buildUrl("hellobrian", "descending", 50, "none"));
