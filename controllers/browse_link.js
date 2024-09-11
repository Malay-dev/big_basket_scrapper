import { browse } from "./scrape.js";

const browse_link = async (req, res, next) => {
  const { link } = req?.body;
  console.log(link);
  try {
    const resp = await browse(link);
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};

export default browse_link;
