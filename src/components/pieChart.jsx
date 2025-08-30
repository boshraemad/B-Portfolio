import { ResponsivePie } from '@nivo/pie';

function PieChart({langaugesData}){

   const data=langaugesData.map((language)=>{
        return{
            id:language[0],
            label:language[0],
            value:language[1].bytes,
        }
    })

    return(
        <ResponsivePie 
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pink_yellowGreen' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#eee"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />

    )
}
export default PieChart;