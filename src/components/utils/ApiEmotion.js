export const ApiEmotion = ({emotion}) => {
  switch(emotion){
    case "Anger":
      return "ANGER";
    case "Fear":
      return "FEAR";
    case "FeelTouch":
      return "TOUCH";
    case "Lonely":
      return "LONELY";
    case "Happiness":
      return "HAPPY";
    case "Tired":
      return "TIRED";
    case "Love":
      return "LOVE";
    case "Normal":
      return "DEFAULT_MOOD";
    case "Shame":
      return "SHAME";
    case "Nervous":
      return "NERVOUS";
    case "Relaxation":
      return "RELAX";
    case "Pride":
      return "PRIDE";
    case "Sadness":
      return "SAD";
    case "Surprise":
      return "SURPRISE";
    case "LongFor":
      return "Longing";
    default:
      return "";
  }
}