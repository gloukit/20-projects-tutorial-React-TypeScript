const dummyApiResponse= {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: false,
  showTabs : true
};


export default function featureFlagsMockApi(){
    return new Promise ((resolve,reject)=>{
        if(dummyApiResponse){
            setTimeout(()=>resolve(dummyApiResponse),500);
        } else {
            reject ("Some error occured! Please try again");
        }
    })
}