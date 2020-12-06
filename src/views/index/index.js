import React,{Component} from 'react';
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
class Index extends Component{
    // componentWillMount() {
    //     console.log(this.props.location.query)
    // }
    // componentDidMount() {
        
    // }
    render(){
        let GL_OPTION = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        }
        return (
            <ReactEcharts
                option={GL_OPTION}
            />
        )
    }
}
export default Index;