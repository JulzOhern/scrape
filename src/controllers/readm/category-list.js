import { gotScraping } from "got-scraping";
import { load } from "cheerio";

export const readmCategoryList = async (req, res) => {
  try {
    const data = [];

    const response = await gotScraping.get(`${process.env.READM_BASE_URL}`);
    const $ = load(response.body);

    $("#sidebar-inner .trending-thisweek.categories li").each((_, el) => {
      data.push({
        id: $(el).find("a").attr("href").split("/")[2],
        name: $(el).find("a").text().trim(),
      });
    });

    const removeHentai = data.filter((i) => i.name !== "Hentai");

    return res.status(200).json(removeHentai);
  } catch (error) {
    return res.status(500).json("Error " + error.message);
  }
};
