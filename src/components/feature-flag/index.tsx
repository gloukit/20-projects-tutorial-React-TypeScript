import Accordian from "../accordian";
import LightDarkMode from "../switch-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import TabTest from "../tab/tab-test";
import { FeatureFlagsContext } from "./context";
import { useContext } from "react";



export default function FeatureFlags(){
    const context = useContext(FeatureFlagsContext);
    if (!context) throw new Error("FeatureFlagsContext must be used inside Provider");
    const { loading, enabledFlags } = context;

    const componentsToRender = [
        {
            key:"showLightAndDarkMode",
            component:<LightDarkMode/>   
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordian",
            component: <Accordian />,
        },
        {
            key: "showTreeView",
            component: <TreeView  menus={menus} />,
        },
        {
            key : 'showTabs',
            component : <TabTest/>
        }
    ];

    function checkEnabledFlags(key:string){
        return enabledFlags[key];
    }

    return (
        <div>
            {componentsToRender.map(item=>(
                checkEnabledFlags(item.key)? item.component : null 
            ))
            }
        </div>
    )

}