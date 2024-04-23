import { gotScraping } from "got-scraping";
import { load } from "cheerio";

export const andydayMovieInfo = async (req, res) => {
  try {
    const { infoId } = req.params;

    const data = {
      info: {
        img: null,
        title: null,
        reso: null,
        description: null,
        imdb: null,
        otherInfo: {
          released: null,
          genres: null,
          casts: null,
          duration: null,
          country: null,
          productions: null,
        },
      },
      youMayAlsoLike: [],
    };

    const response = await gotScraping.get(
      `${process.env.ANDYDAY_BASE_URL}/movie/${infoId}`
    );
    const $ = load(response.body);

    const selector = $(
      "#main-wrapper .detail_page.detail_page-style .container div:nth-child(3) .detail_page-infor"
    );

    data.info.img = $(selector).find("img").attr("src");
    data.info.title = $(selector).find(".dp-i-c-right .heading-name a").text();
    data.info.reso = $(selector).find(".dp-i-stats span:nth-child(2)").text();
    data.info.description = $(selector).find(".description").text().trim();
    data.info.imdb = $(selector)
      .find(".dp-i-stats span:nth-child(3)")
      .text()
      .split(":")[1]
      .trim();

    const genres = [];
    $(selector)
      .find(".elements .row .col-xl-5 div:nth-child(2) a")
      .each(function () {
        genres.push({
          id: $(this).attr("href").split("/")[2],
          genre: $(this).text(),
        });
      });
    const casts = [];
    $(selector)
      .find(".elements .row .col-xl-5 div:nth-child(3) a")
      .each(function () {
        casts.push({
          id: $(this).attr("href").split("/")[2],
          name: $(this).text(),
        });
      });
    const productions = [];
    $(selector)
      .find(".elements .row .col-xl-6 div:nth-child(3) a")
      .each(function () {
        productions.push({
          id: $(this).attr("href").split("/")[2],
          name: $(this).text(),
        });
      });
    data.info.otherInfo = {
      released: $(selector)
        .find(".elements .row .col-xl-5 div:nth-child(1)")
        .text()
        .split(":")[1]
        .trim(),
      genres,
      casts,
      duration: $(selector)
        .find(".elements .row .col-xl-6 div:nth-child(1)")
        .text()
        .split(":")[1]
        .replace(/\s+/g, " ")
        .trim(),
      country: {
        id: $(selector)
          .find(".elements .row .col-xl-6 div:nth-child(2) a")
          .attr("href")
          .split("/")[2],
        countryName: $(selector)
          .find(".elements .row .col-xl-6 div:nth-child(2)")
          .text()
          .split(":")[1]
          .replace(/\s+/g, " ")
          .trim(),
      },
      productions,
    };

    $(
      "#main-wrapper .film_related .container section div:nth-child(2) .film_list-wrap .flw-item"
    ).each(function () {
      data.youMayAlsoLike.push({
        id: $(this).find("a").attr("href").split("/")[2],
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".film-detail > h3").text().trim(),
        reso: $(this).find(".pick.film-poster-quality").text(),
        otherInfo: {
          year: $(this).find(".fd-infor span:nth-child(1)").text(),
          duration: $(this).find(".fd-infor span:nth-child(3)").text(),
          type: $(this).find(".fd-infor span:nth-child(4)").text(),
        },
      });
    });

    return res.status(200).json(data.youMayAlsoLike);
  } catch (error) {
    return res.status(500).json("Error" + error.message);
  }
};
