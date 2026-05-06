import { useLocation } from "react-router";

const useCurrentPath = () => {
    const { pathname } = useLocation();
    return pathname.replace("/", "");
};

export default useCurrentPath;
