import { gotScraping } from "got-scraping";
import { load } from "cheerio";

export const readmImage = async (req, res) => {
  try {
    const { infoId, chapter } = req.params;

    const data = [];

    const response = await gotScraping.get(
      `${process.env.READM_BASE_URL}/manga/${infoId}/${chapter}/all-pages`
    );
    const $ = load(response.body);

    $(".ui.grid.chapter .ch-images center img").each((_, el) => {
      data.push({
        img: `${process.env.READM_BASE_URL}${$(el).attr("src")}`,
      });
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("Error " + error.message);
  }
};
