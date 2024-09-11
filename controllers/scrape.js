import puppeteer from "puppeteer";

const browse = async (url) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
    //   headless: "new", // or true to make it headless
      defaultViewport: null,
      userDataDir: "./tmp",
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const htmlContent = await page.content();

    console.log(htmlContent);

    await browser.close();
    return {
      status: "success",
      message: "Completed crawling through this page...",
      html: htmlContent,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "failed",
      message: error,
    };
  }
};

export { browse };
