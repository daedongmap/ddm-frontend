import axios from "axios";
import CONFIG from "../../config/config.json";

const useClubInfo = () => {
  const getClubInfo = async () => {
    const { data } = await axios.get(`${CONFIG.SERVER}/api/club/`);
    return data;
  };
  return { getClubInfo };
};

export default useClubInfo;
