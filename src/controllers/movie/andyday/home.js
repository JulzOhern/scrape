import { gotScraping } from "got-scraping";
import { load } from "cheerio";

export const andydayHome = async (req, res) => {
  try {
    const data = {
      trending: [],
      latestMovie: [],
      latestTvShow: [],
      comingSoon: [],
    };

    const response = await gotScraping.get(
      `${process.env.ANDYDAY_BASE_URL}/home`
    );
    const $ = load(response.body);

    $("#trending-movies .flw-item").each(function () {
      data.trending.push({
        id: $(this).find("a").attr("href").split("/")[2],
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".film-detail .film-name a").text(),
        reso: $(this).find(".pick.film-poster-quality").text(),
        otherInfo: {
          year: $(this).find(".fd-infor span:nth-child(1)").text(),
          duration: $(this).find(".fd-infor span:nth-child(3)").text(),
          type: $(this).find(".fd-infor span:nth-child(4)").text(),
        },
      });
    });

    $(
      "#main-wrapper .container section:nth-child(6) div:nth-child(2) .film_list-wrap .flw-item"
    ).each(function () {
      data.latestMovie.push({
        id: $(this).find("a").attr("href").split("/")[2],
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".film-detail .film-name a").text(),
        reso: $(this).find(".pick.film-poster-quality").text(),
        otherInfo: {
          year: $(this).find(".fd-infor span:nth-child(1)").text(),
          duration: $(this).find(".fd-infor span:nth-child(3)").text(),
          type: $(this).find(".fd-infor span:nth-child(4)").text(),
        },
      });
    });

    $(
      "#main-wrapper .container section:nth-child(7) div:nth-child(2) .film_list-wrap .flw-item"
    ).each(function () {
      data.latestTvShow.push({
        id: $(this).find("a").attr("href").split("/")[2],
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".film-detail .film-name a").text(),
        reso: $(this).find(".pick.film-poster-quality").text(),
        otherInfo: {
          year: $(this).find(".fd-infor span:nth-child(1)").text(),
          duration: $(this).find(".fd-infor span:nth-child(3)").text(),
          type: $(this).find(".fd-infor span:nth-child(4)").text(),
        },
      });
    });

    $(
      "#main-wrapper .container section:nth-child(8) div:nth-child(2) .film_list-wrap .flw-item"
    ).each(function () {
      data.comingSoon.push({
        id: $(this).find("a").attr("href").split("/")[2],
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".film-detail .film-name a").text(),
        reso: $(this).find(".pick.film-poster-quality").text() || null,
        otherInfo: {
          year: $(this).find(".fd-infor span:nth-child(1)").text(),
          type: $(this).find(".fd-infor span:nth-child(2)").text(),
        },
      });
    });

    return res.status(200).json(data.comingSoon);
  } catch (error) {
    return res.status(500).json("Error" + error.message);
  }
};
