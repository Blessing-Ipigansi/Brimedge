import GlobalContext from "../GlobalContext";
import { createClient } from "contentful";
import { sanitize } from "../../assets/helpFunctions.js";
import { useState } from "react";

function GlobalProvider({ children }) {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
  const [globalContent, setGlobalContent] = useState();

  const globalWait = new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      if (window.globalLayoutContent) {
        clearInterval(intervalId);
        resolve(window.globalLayoutContent);
        reject(window.globalLayoutContent);
      }
    }, 200);
  });

  const getGlobalContent = async () => {
    try {
      if (window.globalLayoutContent && window.globalLayoutContent.isError)
        window.globalLayoutContentPending = false;
      if (!window.globalLayoutContentPending) {
        window.globalLayoutContentPending = true;
        const globalObject = await client.getEntries({
          content_type: "globalLayout",
          select: "fields",
        });
        return sanitize(
          [
            "entryName",
            "metaData",
            "logo",
            "contact",
            "navbar",
            "footer",
            "callToAction",
          ],
          globalObject,
        );
      } else {
        return await globalWait;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getFields = async (...fields) => {
    if (!globalContent) {
      let content = await getGlobalContent();
      let requestedFields = {};
      if (content) {
        fields.forEach((field) => {
          requestedFields[field] = content[field];
        });
        if (!window.globalLayoutContent) {
          window.globalLayoutContent = content;
          setGlobalContent(content);
        }
      } else {
        window.globalLayoutContent = { isError: true };
        return { isError: true };
      }
      return requestedFields;
    } else {
      let requestedFields = {};
      fields.forEach((field) => {
        requestedFields[field] = globalContent[field];
      });
      return requestedFields;
    }
  };

  return <GlobalContext.Provider value={{ getFields }}>
    { children }
  </GlobalContext.Provider>
}

export default GlobalProvider;
