import express from "express";
import { fetchGoogleAdsData } from "../services/googleAds.js";
import { queryBigQuery } from "../services/bigQuery.js";

const router = express.Router();

router.get("/campaigns", async (req, res) => {
  try {
    const adsData = await fetchGoogleAdsData();
    const bqData = await queryBigQuery();
    res.json({ adsData, bqData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
