export const formatBtnContent = (btnId) => {
  switch (btnId) {
    case "first":
      return "|<<";
    case "prev":
      return "<";
    case "next":
      return ">";
    case "last":
      return ">>|";
    default:
      btnId;
      break;
  }
};
