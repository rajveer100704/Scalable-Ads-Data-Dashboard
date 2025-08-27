import { GoogleAdsApi } from "google-ads-api";
import { generateMockAdsData } from "./mockData.js";

const USE_MOCK = process.env.ENABLE_MOCK === "true";

let customer;
if (!USE_MOCK) {
  const client = new GoogleAdsApi({
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    developer_token: process.env.GOOGLE_ADS_DEV_TOKEN
  });

  customer = client.Customer({
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
    refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN
  });
}

export async function fetchGoogleAdsData() {
  if (USE_MOCK) return generateMockAdsData(8);

  const query = `
    SELECT
      campaign.id,
      campaign.name,
      metrics.impressions,
      metrics.clicks,
      metrics.average_cpc,
      metrics.conversions
    FROM campaign
    WHERE segments.date DURING LAST_30_DAYS
  `;
  const rows = await customer.query(query);
  return rows;
}
