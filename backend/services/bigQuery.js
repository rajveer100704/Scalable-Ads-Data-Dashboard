import { BigQuery } from "@google-cloud/bigquery";
import { generateMockBigQueryData } from "./mockData.js";

const USE_MOCK = process.env.ENABLE_MOCK === "true";

let bigquery;
if (!USE_MOCK) {
  bigquery = new BigQuery({
    projectId: process.env.GCP_PROJECT_ID,
    keyFilename: process.env.GCP_KEY_FILE
  });
}

export async function queryBigQuery() {
  if (USE_MOCK) {
    const campaignIds = Array.from({ length: 8 }, (_, i) => `${1001 + i}`);
    return generateMockBigQueryData(campaignIds);
  }

  const query = `
    SELECT campaign_id, SUM(spend) as total_spend, SUM(clicks) as total_clicks
    FROM \`${process.env.GCP_BQ_DATASET || "your_dataset"}.ad_performance\`
    GROUP BY campaign_id
    LIMIT 10
  `;
  const [rows] = await bigquery.query({ query });
  return rows;
}
