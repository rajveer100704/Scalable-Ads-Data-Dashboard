function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateMockAdsData(count = 8) {
  const campaigns = [];
  for (let i = 1; i <= count; i++) {
    const impressions = randInt(1000, 200000);
    const clicks = Math.round(impressions * (Math.random() * 0.1));
    const avgCpcMicros = randInt(100000, 1500000);
    const conversions = Math.round(clicks * (Math.random() * 0.2));
    campaigns.push({
      campaign: { id: `${1000 + i}`, name: `Mock Campaign ${i}` },
      metrics: {
        impressions,
        clicks,
        average_cpc: { micros: avgCpcMicros },
        conversions
      }
    });
  }
  return campaigns;
}

export function generateMockBigQueryData(campaignIds = []) {
  return campaignIds.map((id) => ({
    campaign_id: id,
    total_spend: (Math.random() * 2000).toFixed(2),
    total_clicks: randInt(10, 200)
  }));
}
