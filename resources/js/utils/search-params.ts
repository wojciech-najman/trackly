export const getSearchParams = (append: { [key: string]: string }, fresh = false): string => {
  const searchParams = new URLSearchParams(fresh ? '' : window.location.search);

  Object.keys(append).forEach((key) => {
    if (append[key]) {
      searchParams.set(key, append[key]);
    } else {
      searchParams.delete(key);
    }
  });

  return searchParams.toString();
};

export const getSearchParam = (name: string): string | undefined => {
  const searchParams = new URLSearchParams(window.location.search);

  const param = searchParams.get(name);

  return param ? param : undefined;
};
