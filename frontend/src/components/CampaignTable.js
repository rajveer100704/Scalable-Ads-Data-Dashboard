export default function CampaignTable({ data }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Impressions</th>
          <th>Clicks</th>
          <th>CPC</th>
          <th>Conversions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, i) => (
          <tr key={i}>
            <td>{c.campaign.id}</td>
            <td>{c.campaign.name}</td>
            <td>{c.metrics.impressions}</td>
            <td>{c.metrics.clicks}</td>
            <td>{(c.metrics.average_cpc?.micros / 1000000).toFixed(2)}</td>
            <td>{c.metrics.conversions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
