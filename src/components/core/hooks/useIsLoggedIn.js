export const useIsLoggedIn = () => {
    return localStorage.getItem("ud") ? true : false;
};
