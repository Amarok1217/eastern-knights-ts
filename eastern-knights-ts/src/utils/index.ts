export const isPC = (): boolean => {
  const userAgentInfo = navigator.userAgent;
  const Agents: string[] = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  let flag: boolean = true;
  for (const item of Agents) {
    if (userAgentInfo.indexOf(item) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
