'use client';

import React, { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";

export const ModalProvider =()=>{
    const [isMounted , setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[]);
    if(!isMounted){
        return null;
    }
    return(
        <>
        <CreateServerModal/>
        <InviteModal />
        <EditServerModal />
        <MembersModal />
        <CreateChannelModal />
        <LeaveServerModal />
        <DeleteServerModal />
        </>
    )
}