import { useEffect, useState } from "react";
import { getCampaigns } from "./api";
import CampaignTable from "./components/CampaignTable";
import CampaignChart from "./components/CampaignChart";

function App() {
  const [data, setData] = useState({ adsData: [], bqData: [] });

  useEffect(() => {
    getCampaigns().then(res => setData(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Ads Performance Dashboard (Mock Mode)</h1>
      <CampaignTable data={data.adsData} />
      <CampaignChart data={data.adsData} />
    </div>
  );
}
export default App;
