import { gotScraping } from "got-scraping";
import { load } from "cheerio";

export const readmLatestUpdates = async (req, res) => {
  try {
    const { page } = req.query;

    const data = {
      totalPages: 539,
      currentPage: page || 1,
      latestUpdates: [],
    };

    const response = await gotScraping.get(
      `${process.env.READM_BASE_URL}/latest-releases/${page}`
    );
    const $ = load(response.body);

    $(
      "#router-view .dark-segment .clearfix.latest-updates li .poster.poster-xs"
    ).each((_, el) => {
      const chapters = [];
      $(el)
        .find("ul.chapters a")
        .each((_, el) => {
          chapters.push({
            id: $(el).attr("href").split("/")[2],
            chapter: $(el).text(),
          });
        });
      data.latestUpdates.push({
        id: $(el).find("a").attr("href").split("/")[2],
        img: `${process.env.READM_BASE_URL}${$(el)
          .find("img")
          .attr("data-src")}`,
        title: $(el).find("h2.truncate").text(),
        uploaded: $(el).find("span.date").text().trim(),
        chapters,
      });
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("Error " + error.message);
  }
};
