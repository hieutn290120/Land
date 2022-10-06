interface legend{
    position: "top" | "top-left" | "top-right" | "right" | "right-top" | "right-bottom" | "left" | "left-top" | "left-bottom" | "bottom" | "bottom-left" | "bottom-right"
}
interface appear{
    animation: string,
    duration: number
}
interface animation{
    appear : appear
}
interface label{
    formatter: (fn :any)=> void,
}
interface yAxis{
    label: label
}

export interface ChartInterface {
    data: [],
    xField: string,
    yField: string,
    seriesField: string,
    yAxis: yAxis,
    legend:legend,
    smooth: boolean,
    // @TODO 后续会换一种动画方式
    animation: animation,
};

