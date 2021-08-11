//initia state
export const initialState = {
  use: null,
  playerlists: [],
  playing: false,
  item: null,
  //remove after finish developing
  //token:
  //"BQA00lUGrZUF4Qj7n9byS0xngtm7qxnd63CgqaKoI1YclK3wfLe52h3Lhc3kL4mR-P-NPUye1VjqRsu14KOvZzUSp4w95w88-FpVmIBNaOb4ccp_L1JXc_y-giPN6-OY_LVAXTMmiEKq58NIxn9I6v4Crn-IUJNJ2QXf-2oVdu4fG-UpSea9",
};
//reducer
const reducer = (state, action) => {
  console.log(action);
  //Action ->type , [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //from preventing overriding
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
