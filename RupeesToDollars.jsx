
import { useState } from "react";

export default function RupeesToDollars() {

  const [rupees, setRupees] = useState("");

  const dollars = Number(rupees) / 83;

  return (
    <div style={{ maxWidth: 360, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Rupees to Dollars Converter</h2>

      <label>
        Amount in Rupees (₹):
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter rupees"
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
        />
      </label>

      <p style={{ fontSize: 20, marginTop: 20 }}>
        {rupees === ""
          ? "Enter an amount to convert"
          : `$${dollars.toFixed(2)}`}
      </p>
    </div>
  );
}
