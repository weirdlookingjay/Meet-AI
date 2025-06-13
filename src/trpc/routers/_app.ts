import { agentsRouter } from "@/modules/agents/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
});

export type AppRouter = typeof appRouter;
