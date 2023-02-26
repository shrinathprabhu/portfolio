import { toASCII } from "punycode";

function isValidEmail(email: string) {
  if (!email.includes("@")) {
    return false;
  }
  const emailParams = email.split("@");
  if (
    emailParams[0].startsWith(".") ||
    emailParams[0].endsWith(".") ||
    emailParams[0].length === 0
  ) {
    return false;
  }
  if (!emailParams[1].trim()) {
    return false;
  }
  return /^(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([\w]{2,24}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
    `@${toASCII(emailParams[1])}`
  );
}

export { isValidEmail };
