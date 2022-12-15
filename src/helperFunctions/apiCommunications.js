/** -----------------------------------------------------
 *
 ** ----------------------------------------------------- */
export const apiToken = () => {
    return process.env.REACT_APP_API_TOKEN;
  };
  
  /** -----------------------------------------------------
   *
   ** ----------------------------------------------------- */
  export const apiURL = () => {
    return process.env.REACT_APP_API_URL;
  };
  
  /** -----------------------------------------------------
   *
   ** ----------------------------------------------------- */
  export const getAPIHeader = () => {
    const lmsHeader = new Headers();
    lmsHeader.append("Authorization", `Bearer ${apiToken()}`);
    lmsHeader.append("Content-Type", "application/json");
    return lmsHeader;
  };