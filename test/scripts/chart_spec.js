"use strict";

import assert from "assert";
import Chart from "scripts/chart";

describe("chart.js", () => {
  it("loaded", () => {
    assert(Chart, "is loaded");
  });
});
