  /** -----------------------------------------------------
   * @param {*} key
   * @returns
   ** ----------------------------------------------------- */
  export const getLocalStorage = (key) => {
    const storage = JSON.parse(localStorage.getItem("burritoObj"));
    if (storage) {
      return storage[key] != null ? storage[key] : false;
    }
    return false;
  };
  
  /** -----------------------------------------------------
   * @param {*} key
   * @param {*} value
   ** ----------------------------------------------------- */
  export const setLocalStorage = (key, value) => {
    let data = JSON.parse(localStorage.getItem("burritoObj"));
    data = data ? data : {};
    data[key] = value;
    localStorage.setItem("burritoObj", JSON.stringify(data));
  };
  
  /** -----------------------------------------------------
   *
   ** ----------------------------------------------------- */
  export const deleteLocalStorage = () => {
    localStorage.clear("burritoObj");
  };