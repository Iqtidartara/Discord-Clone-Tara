import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params: {
        inviteCode : string;
    };
};
const InviteCodePage = async ({
    params} :InviteCodePageProps
) => {

    const profile = await currentProfile();
    if(!profile){
        return redirectToSignIn();
    }
    if(!params.inviteCode){
        return redirect("/");
    }

    const existingServer = await db.server.findFirst({
        where : {
            inviteCode : params.inviteCode,
            members: {
                some : {
                    profileId : profile.id
                }
            }
        }
    });
    if(existingServer){
    return redirect(`/servers/${existingServer?.id}`);
    }

    const server = await db.server.update({
        where : {
            inviteCode : params.inviteCode,
            

        },
        data : {
            members:{
                create: [
                    {
                        profileId: profile.id,
                    }
                ]
            }
        }
    })
  return (
    <div>Hello Invite</div>
  )
}

export default InviteCodePage;