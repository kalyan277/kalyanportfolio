
export const getCookieFromReq = (req, cookieKey) => {

 try {
     const cookie = req.headers.cookie
       .split(";")
       .find((c) => c.trim().startsWith(`${cookieKey}=`));
     if (!cookie) {
       return undefined;
     }
    return cookie.split("=")[1];
 } catch (error) {
    return undefined;
 }
 
};

export const shortenText = (text, maxLength = 124) => {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)} ...`;
  }

  return text;
};