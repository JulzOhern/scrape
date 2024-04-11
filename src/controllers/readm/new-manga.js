import { load } from "cheerio";
import { gotScraping } from "got-scraping";

export const readmNewManga = async (req, res) => {
  try {
    const { page } = req.query;

    const data = {
      totalPages: 718,
      currentPage: page || 1,
      newManga: [],
    };

    const response = await gotScraping.get(
      `${process.env.READM_BASE_URL}/new-manga/${page}`
    );
    const $ = load(response.body);

    $("#router-view .clearfix.mb-0 li").each((_, el) => {
      data.newManga.push({
        id: $(el).find("a").attr("href").split("/")[2],
        img: `${process.env.READM_BASE_URL}${$(el)
          .find("img")
          .attr("data-src")}`,
        title: $(el).find(".poster-subject h2").text(),
        ratings: $(el).find(".poster-overlay .item.rating").text().trim(),
        favorites: $(el).find(".poster-overlay .item.year").text().trim(),
      });
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("Error " + error.message);
  }
};
