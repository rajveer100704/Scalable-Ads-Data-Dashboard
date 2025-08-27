import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function CampaignChart({ data }) {
  const chartData = data.map(c => ({
    name: c.campaign.name,
    clicks: c.metrics.clicks,
    impressions: c.metrics.impressions
  }));

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
      <Line type="monotone" dataKey="impressions" stroke="#82ca9d" />
    </LineChart>
  );
}
