export const isActivePath = (currentPath: string, path: string) => {
  return currentPath.split('/')[1] === path;
};
