import axios from "axios";
import CONFIG from "../../config/config.json";

const useClub = () => {
  const getClubList = async () => {
    const { data } = await axios.get(`${CONFIG.SERVER}/api/club`);
    return data;
  };
  return { getClubList };
};

export default useClub;
