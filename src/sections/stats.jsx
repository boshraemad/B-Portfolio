import Separator from "../components/separator";
import { useState , useEffect } from "react";
import axios from "axios";
import PieChart from "../components/pieChart";

function Stats(){
    const token=import.meta.env.VITE_GITHUB_PRIVATE_TOKEN;
    const [mostUsedLanguages, setMostUsedLanguages]=useState([]);
    useEffect(()=>{
        const page=1;
        const getStatesData=async()=>{
            try{
            const response= await axios.get(`https://api.github.com/users/boshraemad/repos?page=${page}`,{
                headers:{
                    Authorization:`token ${token}`,
                    Accept: 'application/vnd.github.v3+json'
                }
            })
            const languagePromises=response.data.map((repo=>{
                return axios.get(`https://api.github.com/repos/boshraemad/${repo.name}/languages`,{
                    headers:{
                        Authorization:`token ${token}`,
                        Accept: 'application/vnd.github.v3+json'
                    }
                })
            }))
            const languagesData=await Promise.all(languagePromises);
            const languageStates={};
            let totalBytes=0;
            languagesData.forEach(repo => {
                for(const [lang , bytes] of Object.entries(repo.data)){
                    languageStates[lang]=(languageStates[lang] || 0) + bytes;
                    totalBytes+=bytes;
                }
            });
            // console.log(languageStates, totalBytes)
            //get percentages
            if ( totalBytes > 0) {
                for (const lang in languageStates) {
                  languageStates[lang] = {
                    bytes: languageStates[lang],
                    percentage: ((languageStates[lang] / totalBytes) * 100).toFixed(1)
                  };
                }
              }
              //sort languages states array
              const sortedLanguages = Object.entries(languageStates)
              .sort((a, b) => b[1].bytes - a[1].bytes);

              setMostUsedLanguages(sortedLanguages);
            }catch(error){
                console.log(error);
            }
        }

        getStatesData();
    },[])
    return(
        <div id="stats" className="bg-background text-primary">
            <Separator>Github Stats</Separator>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="p-4">
                    <h3 className="mt-6 mb-6 text-sm text-gray-500">Most Used Languages</h3>
                    <ul className="space-y-4">
                    {
                        mostUsedLanguages.map((langauge , index)=>{
                            return(
                                <li key={index} className="flex items-center gap-4 font-bold">{langauge[0]}<span className="text-lg font-bold text-[#BE5985]">{langauge[1].percentage}%</span></li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="pie-chart h-[400px] cursor-pointer " >
                    <PieChart langaugesData={mostUsedLanguages}/>
                </div>
            </div>
        </div>
    )
}

export default Stats;