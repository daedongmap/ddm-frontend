import axios from "axios";
import CONFIG from "../../config/config.json";

const useClubInfo = () => {
  const getClubInfo = async (clubName) => {
    const { data } = await axios.get(`${CONFIG.SERVER}/api/club/${clubName}`);
    return data;
  };
  return { getClubInfo };
};

export default useClubInfo;
