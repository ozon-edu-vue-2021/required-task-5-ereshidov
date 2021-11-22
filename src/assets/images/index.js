function importAll(r) {
  return r.keys().map((a) => {
    return a;
  });
}

const images = importAll(require.context("", false, /\.webp$/));

export default images;
