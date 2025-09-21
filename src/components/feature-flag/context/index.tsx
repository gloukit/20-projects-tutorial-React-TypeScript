import { useState,useEffect, createContext, ReactNode } from "react";
import featureFlagsMockApi from "../data";

interface EnabledFlagsType {
    [key:string]:boolean;
}

type ContextType = {
    loading:boolean;
    enabledFlags:EnabledFlagsType;
}

export const FeatureFlagsContext = createContext<ContextType | undefined>(undefined);

export default function FeatureFlagsGloubalState({children}:{children:ReactNode}){
    const [loading,setLoading] = useState<boolean>(false);
    const [enabledFlags,setEnabledFlags] = useState<EnabledFlagsType>({});

    async function fetchFeatureFlags(){
        try {
            setLoading(true);
            const response = await featureFlagsMockApi();
            setEnabledFlags(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchFeatureFlags();
    },[]);

    return (
        <FeatureFlagsContext.Provider value= {{loading,enabledFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}