"use strict";

declare global {
  interface Window { Chartrend: any; }
}

import Chartrend from "./chartrend";

window.Chartrend = Chartrend;
