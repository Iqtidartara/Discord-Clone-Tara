import { Server ,Member ,Profile } from "@prisma/client";
import { profileEnd } from "console";

export type ServerWithMembersWithProfiles = Server & {
  members: ( Member & { profile : Profile}
)}[];