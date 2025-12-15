
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="nature-page">
      {/* Section 1 */}
      <div className="section beauty">
        <div className="content">
          <h1>Nature Gives Life</h1>
          <p>
            Every tree, every river, every breeze has a soul.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section pain">
        <div className="content">
          <h1>But Nature Is Hurting</h1>
          <p>
            Forests are burning. Rivers are polluted. Animals are suffering.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section hope">
        <div className="content">
          <h1>There Is Still Hope</h1>
          <p>
            If we protect nature today, it will protect us tomorrow.
          </p>
        </div>
      </div>

      {/* Final Message */}
      <div className="message">
        <h2>Save Nature 🌍 Save Future</h2>
        <p>
          Nature does not speak, but it feels everything.
        </p>
      </div>
    </div>
  );
}

export default App;
        
