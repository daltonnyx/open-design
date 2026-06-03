import { detectAcpModels, DEFAULT_MODEL_OPTION } from "./shared.js";
import type { RuntimeAgentDef } from "../types.js";

export const agentCrewDef = {
  id: "agentcrew-ai",
  name: "Agentcrew",
  bin: "agentcrew",
  versionArgs: ["--version"],
  fetchModels: async (resolvedBin, env) =>
    detectAcpModels({
      bin: resolvedBin,
      args: ["acp"],
      env,
      timeoutMs: 15_000,
      defaultModelOption: DEFAULT_MODEL_OPTION,
    }),
  fallbackModels: [DEFAULT_MODEL_OPTION],
  buildArgs: () => ["acp"],
  streamFormat: "acp-json-rpc",
} satisfies RuntimeAgentDef;
